import { describe, it, expect } from 'vitest';
import { chatIntakeSchema, contactIntakeSchema } from '@/lib/validation/intake';

describe('intake schemas', () => {
  it('accepts valid contact payload', () => {
    const result = contactIntakeSchema.safeParse({
      firstName: 'Alex',
      phone: '4045550000',
      email: 'person@example.com',
      phoneOrEmail: '',
      county: '',
      incidentType: 'auto-accidents',
      dateOfIncident: '2026-01-01',
      treatmentStatus: '',
      briefDescription: 'Rear-end crash with neck pain and ER visit.',
      consent: true,
      smsConsent: false,
      hpField: ''
    });

    expect(result.success).toBe(true);
  });

  it('accepts minimum valid chat payload', () => {
    const result = chatIntakeSchema.safeParse({
      firstName: '',
      phone: '',
      email: '',
      phoneOrEmail: 'person@example.com',
      county: '',
      incidentType: 'auto-accidents',
      dateOfIncident: '',
      treatmentStatus: '',
      briefDescription: '',
      consent: true,
      smsConsent: false,
      hpField: ''
    });

    expect(result.success).toBe(true);
  });

  it('rejects missing required contact form fields', () => {
    const result = contactIntakeSchema.safeParse({
      firstName: '',
      phone: '',
      email: '',
      incidentType: 'truck-accidents',
      dateOfIncident: '',
      briefDescription: '',
      consent: false
    });

    expect(result.success).toBe(false);
  });
});
