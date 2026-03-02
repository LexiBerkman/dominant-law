import { NextResponse } from 'next/server';
import { chatIntakeSchema, contactIntakeSchema } from '@/lib/validation/intake';
import { getClientIp } from '@/lib/security/request';
import { rateLimit } from '@/lib/security/rate-limit';
import { env } from '@/lib/env';

async function verifyTurnstile(token: string) {
  if (!env.turnstileSecret) return true;
  const body = new URLSearchParams({
    secret: env.turnstileSecret,
    response: token
  });

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body
  });

  if (!res.ok) return false;
  const result = (await res.json()) as { success?: boolean };
  return Boolean(result.success);
}

export async function POST(request: Request) {
  const ip = getClientIp();
  const limiter = rateLimit(`intake:${ip}`, 8, 60_000);
  if (!limiter.ok) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const raw = await request.json();
  const schema = raw.source === 'chat_concierge' ? chatIntakeSchema : contactIntakeSchema;
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid intake data.' }, { status: 400 });
  }

  const payload = parsed.data;

  if (payload.hpField) {
    return NextResponse.json({ ok: true });
  }

  if (raw.turnstileToken && !(await verifyTurnstile(raw.turnstileToken))) {
    return NextResponse.json({ error: 'Spam verification failed.' }, { status: 400 });
  }

  const minimalPayload = {
    source: raw.source || 'web',
    incidentType: payload.incidentType,
    firstName: payload.firstName || undefined,
    phone: payload.phone || undefined,
    email: payload.email || undefined,
    phoneOrEmail: payload.phoneOrEmail || payload.phone || payload.email || undefined,
    county: payload.county || undefined,
    dateOfIncident: payload.dateOfIncident || undefined,
    treatmentStatus: payload.treatmentStatus || undefined,
    briefDescription: payload.briefDescription || undefined,
    consent: payload.consent,
    smsConsent: payload.smsConsent || false,
    submittedAt: new Date().toISOString()
  };

  if (!env.intakeWebhookUrl) {
    if (process.env.NODE_ENV === 'development') {
      // Never log free text, medical data, phone, or email in dev logs.
      console.info('[intake-dev-metadata]', {
        source: minimalPayload.source,
        incidentType: minimalPayload.incidentType,
        hasCounty: Boolean(minimalPayload.county)
      });
      return NextResponse.json({ ok: true, destination: 'dev-metadata-only' });
    }

    return NextResponse.json({ error: 'configured destination missing' }, { status: 503 });
  }

  const upstream = await fetch(env.intakeWebhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(minimalPayload)
  });

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Submission failed.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
