export const env = {
  intakeWebhookUrl: process.env.INTAKE_WEBHOOK_URL,
  turnstileSecret: process.env.TURNSTILE_SECRET_KEY,
  llmEnabled: process.env.FEATURE_LLM_ANSWER_MODE === 'true' && Boolean(process.env.OPENAI_API_KEY),
  openaiKey: process.env.OPENAI_API_KEY
};
