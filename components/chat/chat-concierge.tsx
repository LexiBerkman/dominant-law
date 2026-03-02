'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { answerCards, urgencyKeywords } from '@/lib/content/chat';
import { completionPercent, nextStep, type IntakeStep } from '@/lib/chat/fsm';
import { track } from '@/lib/analytics/core';
import { siteConfig } from '@/lib/content/site';

const answerModeEnabled = process.env.NEXT_PUBLIC_FEATURE_LLM_ANSWER_MODE === 'true';

type IntakeState = {
  incidentType: 'auto-accidents' | 'truck-accidents' | 'slip-and-fall' | 'wrongful-death';
  dateOfIncident: string;
  treatmentStatus: string;
  county: string;
  briefDescription: string;
  phoneOrEmail: string;
  consent: boolean;
};

const initialState: IntakeState = {
  incidentType: 'auto-accidents',
  dateOfIncident: '',
  treatmentStatus: '',
  county: '',
  briefDescription: '',
  phoneOrEmail: '',
  consent: false
};

export function ChatConcierge() {
  const [query, setQuery] = useState('auto-accidents');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState<'idle' | 'loading'>('idle');
  const [step, setStep] = useState<IntakeStep>('incidentType');
  const [state, setState] = useState<IntakeState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [statusText, setStatusText] = useState('');

  const urgencyDetected = useMemo(
    () => urgencyKeywords.some((k) => state.briefDescription.toLowerCase().includes(k)),
    [state.briefDescription]
  );

  const answerKey = query in answerCards ? query : 'insurance';

  function advanceFrom(current: IntakeStep) {
    track('chat_step_complete', { step: current });
    setStep(nextStep(current) || current);
  }

  async function askQuestion() {
    if (!question.trim()) return;
    setAnswerStatus('loading');
    const res = await fetch('/api/chat/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = (await res.json()) as { answer?: string };
    setAnswer(data.answer || 'No answer available.');
    setAnswerStatus('idle');
  }

  async function submitIntake() {
    if (!state.phoneOrEmail || !state.consent) {
      setStatusText('Contact and consent are required.');
      return;
    }

    track('chat_intake_complete', { incidentType: state.incidentType });

    const result = await fetch('/api/intake', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: '',
        phoneOrEmail: state.phoneOrEmail,
        county: state.county,
        incidentType: state.incidentType,
        dateOfIncident: state.dateOfIncident,
        treatmentStatus: state.treatmentStatus,
        briefDescription: state.briefDescription,
        consent: state.consent,
        smsConsent: false,
        hpField: '',
        source: 'chat_concierge'
      })
    });

    if (result.ok) {
      setSubmitted(true);
      setStatusText('Intake submitted. You can call or text now for immediate support.');
      return;
    }

    setStatusText('Unable to submit. Please call or text now.');
  }

  return (
    <Card className="h-full border-primary/25">
      <CardHeader>
        <CardTitle className="text-xl">Chat Concierge</CardTitle>
        <DisclaimerBar compact />
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="answers"
          className="w-full"
          onValueChange={(v) =>
            v === 'answers' ? track('chat_start', { mode: 'answers' }) : track('chat_start', { mode: 'intake' })
          }
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="answers">Get answers</TabsTrigger>
            <TabsTrigger value="intake">Check my case</TabsTrigger>
          </TabsList>

          <TabsContent value="answers" className="space-y-4">
            <label className="text-sm text-mutedForeground" htmlFor="answer-topic">
              Choose a topic
            </label>
            <select
              id="answer-topic"
              value={query}
              className="h-10 w-full rounded-md border border-input bg-input px-3 text-sm"
              onChange={(e) => setQuery(e.target.value)}
            >
              <option value="auto-accidents">Auto accidents</option>
              <option value="truck-accidents">Truck accidents</option>
              <option value="slip-and-fall">Slip and fall</option>
              <option value="wrongful-death">Wrongful death</option>
              <option value="insurance">Insurance adjusters</option>
            </select>

            <div className="rounded-md border border-border bg-muted/50 p-4">
              <p className="font-semibold">{answerCards[answerKey].title}</p>
              <p className="mt-2 text-sm text-mutedForeground">{answerCards[answerKey].body}</p>
              <div className="mt-3 space-y-1 text-sm">
                {answerCards[answerKey].links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-primary no-underline hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {answerModeEnabled ? (
              <div className="space-y-2 rounded-md border border-border p-3">
                <Label htmlFor="question">Ask a general question</Label>
                <Input id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="General information only" />
                <Button onClick={askQuestion} disabled={answerStatus === 'loading'}>
                  {answerStatus === 'loading' ? 'Checking...' : 'Get answer'}
                </Button>
                {answer ? <p className="text-sm text-mutedForeground">{answer}</p> : null}
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Button asChild className="w-full">
                <a href={siteConfig.phoneHref} onClick={() => track('call_click', { placement: 'chat' })} className="no-underline">Call now</a>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <a href={siteConfig.textHref} onClick={() => track('text_click', { placement: 'chat' })} className="no-underline">Text us</a>
              </Button>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/contact" onClick={() => track('form_start', { placement: 'chat' })} className="no-underline">Free evaluation</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="intake" className="space-y-4">
            <Progress value={completionPercent(step)} />
            {!submitted && <p className="text-xs text-mutedForeground">General information only. Do not include confidential details.</p>}

            {step === 'incidentType' ? (
              <div className="space-y-3">
                <Label>Incident type *</Label>
                <select
                  className="h-10 w-full rounded-md border border-input bg-input px-3 text-sm"
                  value={state.incidentType}
                  onChange={(e) => setState((s) => ({ ...s, incidentType: e.target.value as IntakeState['incidentType'] }))}
                >
                  <option value="auto-accidents">Auto accidents</option>
                  <option value="truck-accidents">Truck accidents</option>
                  <option value="slip-and-fall">Slip and fall</option>
                  <option value="wrongful-death">Wrongful death</option>
                </select>
                <Button onClick={() => advanceFrom(step)}>Continue</Button>
              </div>
            ) : null}

            {step === 'dateOfIncident' ? (
              <StepField label="Date of incident (optional)" onNext={() => advanceFrom(step)}>
                <Input value={state.dateOfIncident} onChange={(e) => setState((s) => ({ ...s, dateOfIncident: e.target.value }))} />
              </StepField>
            ) : null}

            {step === 'treatmentStatus' ? (
              <StepField label="Treatment status (optional)" onNext={() => advanceFrom(step)}>
                <Input value={state.treatmentStatus} onChange={(e) => setState((s) => ({ ...s, treatmentStatus: e.target.value }))} />
              </StepField>
            ) : null}

            {step === 'county' ? (
              <StepField label="County (optional)" onNext={() => advanceFrom(step)}>
                <Input value={state.county} onChange={(e) => setState((s) => ({ ...s, county: e.target.value }))} />
              </StepField>
            ) : null}

            {step === 'briefDescription' ? (
              <StepField label="Brief description (optional)" onNext={() => advanceFrom(step)}>
                <Textarea value={state.briefDescription} onChange={(e) => setState((s) => ({ ...s, briefDescription: e.target.value }))} />
              </StepField>
            ) : null}

            {step === 'contact' ? (
              <StepField label="Phone or email *" onNext={() => advanceFrom(step)}>
                <Input value={state.phoneOrEmail} onChange={(e) => setState((s) => ({ ...s, phoneOrEmail: e.target.value }))} />
              </StepField>
            ) : null}

            {step === 'consent' ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox checked={state.consent} onCheckedChange={(v) => setState((s) => ({ ...s, consent: Boolean(v) }))} />
                  <Label>I understand this is not legal advice and no attorney-client relationship is created.</Label>
                </div>
                <Button onClick={submitIntake}>Submit intake</Button>
              </div>
            ) : null}

            {urgencyDetected ? (
              <div className="rounded-md border border-primary/50 bg-primary/10 p-3 text-sm">
                Urgent indicators detected. Talk to a lawyer now.
                <div className="mt-2 flex gap-2">
                  <Button asChild size="sm">
                    <a href={siteConfig.phoneHref} onClick={() => track('chat_escalate_human', { reason: 'urgency' })} className="no-underline">Call</a>
                  </Button>
                  <Button asChild size="sm" variant="secondary">
                    <a href={siteConfig.textHref} onClick={() => track('chat_escalate_human', { reason: 'urgency' })} className="no-underline">Text</a>
                  </Button>
                </div>
              </div>
            ) : null}

            {statusText ? <p className="text-sm text-mutedForeground">{statusText}</p> : null}
            <div className="pt-2">
              <Button variant="ghost" onClick={() => track('chat_escalate_human', { reason: 'manual' })} asChild>
                <Link href="/contact">Talk to a lawyer now</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function StepField({ label, children, onNext }: { label: string; children: React.ReactNode; onNext: () => void }) {
  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      {children}
      <Button onClick={onNext}>Continue</Button>
    </div>
  );
}
