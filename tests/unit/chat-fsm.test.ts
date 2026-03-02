import { describe, expect, it } from 'vitest';
import { completionPercent, nextStep } from '@/lib/chat/fsm';

describe('chat fsm', () => {
  it('advances through steps', () => {
    expect(nextStep('incidentType')).toBe('dateOfIncident');
    expect(nextStep('consent')).toBeNull();
  });

  it('calculates completion', () => {
    expect(completionPercent('incidentType')).toBeGreaterThan(0);
    expect(completionPercent('consent')).toBe(100);
  });
});
