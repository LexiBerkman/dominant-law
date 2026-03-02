import type { IntakePayload } from '@/lib/validation/intake';

export const intakeSteps = [
  'incidentType',
  'dateOfIncident',
  'treatmentStatus',
  'county',
  'briefDescription',
  'contact',
  'consent'
] as const;

export type IntakeStep = (typeof intakeSteps)[number];

export function nextStep(current: IntakeStep): IntakeStep | null {
  const idx = intakeSteps.indexOf(current);
  return idx === -1 || idx === intakeSteps.length - 1 ? null : intakeSteps[idx + 1];
}

export function completionPercent(step: IntakeStep) {
  return Math.round(((intakeSteps.indexOf(step) + 1) / intakeSteps.length) * 100);
}

export function sanitizeForEvent(payload: Partial<IntakePayload>) {
  return {
    incidentType: payload.incidentType,
    countyProvided: Boolean(payload.county),
    hasTreatmentStatus: Boolean(payload.treatmentStatus),
    hasDate: Boolean(payload.dateOfIncident)
  };
}
