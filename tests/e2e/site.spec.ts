import { test, expect } from '@playwright/test';

test('homepage loads and chat starts', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Built for the courtroom/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Chat Concierge' })).toBeVisible();
  await page.getByRole('tab', { name: 'Get answers' }).click();
  await expect(page.getByLabel('Choose a topic')).toBeVisible();
});

test('homepage CTA routes to contact intake', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Free case evaluation' }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { name: 'Free Case Evaluation' })).toBeVisible();
});

test('intake endpoint accepts valid payload', async ({ request }) => {
  const response = await request.post('/api/intake', {
    data: {
      firstName: 'Jordan Example',
      phone: '4045551111',
      email: 'person@example.com',
      phoneOrEmail: '',
      county: '',
      incidentType: 'auto-accidents',
      dateOfIncident: '2026-02-28',
      treatmentStatus: '',
      briefDescription: 'Rear-end collision with immediate pain and urgent care treatment.',
      consent: true,
      smsConsent: false,
      hpField: '',
      source: 'e2e_test'
    }
  });

  expect(response.ok()).toBeTruthy();
});
