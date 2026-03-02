'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactIntakeSchema, type ContactIntakePayload } from '@/lib/validation/intake';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { track } from '@/lib/analytics/core';

const steps = ['Basics', 'Incident', 'Consent'] as const;

export function IntakeForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorSummary, setErrorSummary] = useState<string[]>([]);
  const summaryRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<ContactIntakePayload>({
    resolver: zodResolver(contactIntakeSchema),
    defaultValues: {
      firstName: '',
      phone: '',
      email: '',
      phoneOrEmail: '',
      county: '',
      incidentType: 'auto-accidents',
      dateOfIncident: '',
      treatmentStatus: '',
      briefDescription: '',
      consent: false,
      smsConsent: false,
      hpField: ''
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setErrorSummary([]);
    setStatus('submitting');
    track('form_submit', { incidentType: values.incidentType });

    const response = await fetch('/api/intake', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, source: 'contact_form' })
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
      return;
    }
    setStatus('error');
  }, async () => {
    const messages = Object.values(form.formState.errors)
      .map((error) => error?.message)
      .filter((msg): msg is string => Boolean(msg));
    setErrorSummary(messages);
    requestAnimationFrame(() => summaryRef.current?.focus());
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-lg border border-border bg-card/60 p-6">
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...form.register('hpField')} />
      {errorSummary.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          className="rounded-md border border-destructive/70 bg-destructive/10 p-3 text-sm"
          role="alert"
          aria-live="assertive"
        >
          <p className="font-semibold text-destructive">Please fix the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-destructive">
            {errorSummary.map((msg, idx) => (
              <li key={`${msg}-${idx}`}>{msg}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <ol className="flex gap-2 text-xs text-mutedForeground" aria-label="Form progress">
        {steps.map((s, idx) => (
          <li key={s} aria-current={idx === step ? 'step' : undefined} className={idx === step ? 'text-primary' : ''}>
            {idx + 1}. {s}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">Name *</Label>
            <Input
              id="firstName"
              required
              autoComplete="name"
              aria-invalid={Boolean(form.formState.errors.firstName)}
              aria-describedby={form.formState.errors.firstName ? 'firstName-error' : undefined}
              {...form.register('firstName')}
            />
            <p id="firstName-error" className="mt-1 text-xs text-destructive" role="alert">{form.formState.errors.firstName?.message}</p>
          </div>
          <div>
            <Label htmlFor="phone">Phone number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(form.formState.errors.phone)}
              aria-describedby={form.formState.errors.phone ? 'phone-error' : undefined}
              {...form.register('phone')}
            />
            <p id="phone-error" className="mt-1 text-xs text-destructive" role="alert">{form.formState.errors.phone?.message}</p>
          </div>
          <div>
            <Label htmlFor="email">Email address *</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(form.formState.errors.email)}
              aria-describedby={form.formState.errors.email ? 'email-error' : undefined}
              {...form.register('email')}
            />
            <p id="email-error" className="mt-1 text-xs text-destructive" role="alert">{form.formState.errors.email?.message}</p>
          </div>
          <Button type="button" onClick={async () => {
            const valid = await form.trigger(['firstName', 'phone', 'email']);
            if (!valid) {
              const messages = ['firstName', 'phone', 'email']
                .map((field) => form.formState.errors[field as keyof typeof form.formState.errors]?.message)
                .filter((msg): msg is string => Boolean(msg));
              setErrorSummary(messages);
              requestAnimationFrame(() => summaryRef.current?.focus());
              return;
            }
            setErrorSummary([]);
            setStep(1);
            track('form_start', { step: 'incident' });
          }}>
            Next
          </Button>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-4">
          <div>
            <Label htmlFor="incidentType">Incident type *</Label>
            <select id="incidentType" className="h-10 w-full rounded-md border border-input bg-input px-3 text-sm" {...form.register('incidentType')}>
              <option value="auto-accidents">Auto accidents</option>
              <option value="truck-accidents">Truck accidents</option>
              <option value="slip-and-fall">Slip and fall</option>
              <option value="wrongful-death">Wrongful death</option>
            </select>
          </div>
          <div>
            <Label htmlFor="dateOfIncident">Date of incident *</Label>
            <Input
              id="dateOfIncident"
              type="date"
              required
              aria-invalid={Boolean(form.formState.errors.dateOfIncident)}
              aria-describedby={form.formState.errors.dateOfIncident ? 'incidentDate-error' : undefined}
              {...form.register('dateOfIncident')}
            />
            <p id="incidentDate-error" className="mt-1 text-xs text-destructive" role="alert">{form.formState.errors.dateOfIncident?.message}</p>
          </div>
          <div>
            <Label htmlFor="county">County (optional)</Label>
            <Input id="county" {...form.register('county')} />
          </div>
          <div>
            <Label htmlFor="treatmentStatus">Treatment status (optional)</Label>
            <Input id="treatmentStatus" {...form.register('treatmentStatus')} />
          </div>
          <div>
            <Label htmlFor="briefDescription">Brief description of incident *</Label>
            <Textarea
              id="briefDescription"
              required
              aria-invalid={Boolean(form.formState.errors.briefDescription)}
              aria-describedby={form.formState.errors.briefDescription ? 'briefDescription-error' : 'briefDescription-help'}
              {...form.register('briefDescription')}
            />
            <p id="briefDescription-help" className="mt-1 text-xs text-mutedForeground">Do not include confidential details.</p>
            <p id="briefDescription-error" className="mt-1 text-xs text-destructive" role="alert">{form.formState.errors.briefDescription?.message}</p>
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" onClick={() => setStep(0)}>Back</Button>
            <Button type="button" onClick={async () => {
              const valid = await form.trigger(['incidentType', 'dateOfIncident', 'briefDescription']);
              if (!valid) {
                const messages = ['incidentType', 'dateOfIncident', 'briefDescription']
                  .map((field) => form.formState.errors[field as keyof typeof form.formState.errors]?.message)
                  .filter((msg): msg is string => Boolean(msg));
                setErrorSummary(messages);
                requestAnimationFrame(() => summaryRef.current?.focus());
                return;
              }
              setErrorSummary([]);
              setStep(2);
            }}>Next</Button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="consent"
              checked={form.watch('consent')}
              onCheckedChange={(v) => form.setValue('consent', Boolean(v), { shouldValidate: true })}
            />
            <Label htmlFor="consent">I understand this is not legal advice and no attorney-client relationship is created.</Label>
          </div>
          <p className="text-xs text-destructive" role="alert">{form.formState.errors.consent?.message}</p>
          <div className="flex items-center gap-2">
            <Checkbox id="smsConsent" checked={form.watch('smsConsent')} onCheckedChange={(v) => form.setValue('smsConsent', Boolean(v))} />
            <Label htmlFor="smsConsent">SMS consent: if phone is provided, I agree to receive text follow-up regarding my request.</Label>
          </div>
          <DisclaimerBar compact />
          <div className="flex gap-2">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
            <Button type="submit" disabled={status === 'submitting'}>Submit intake</Button>
          </div>
          {status === 'success' ? <p className="text-sm text-primary" role="status" aria-live="polite">Request received. A team member will follow up.</p> : null}
          {status === 'error' ? <p className="text-sm text-destructive" role="alert" aria-live="assertive">Submission failed. Please call or text now.</p> : null}
        </div>
      ) : null}
    </form>
  );
}
