# Deployment (Vercel)

1. Install dependencies: `npm install`
2. Run checks:
   - `npm run typecheck`
   - `npm run lint`
   - `npm run test:unit`
3. Create a Vercel project and connect this repository.
4. Set environment variables:
   - `INTAKE_WEBHOOK_URL` (required in production for intake delivery)
   - `FEATURE_LLM_ANSWER_MODE` (`true`/`false`, default off)
   - `OPENAI_API_KEY` (required only when answer mode is on)
   - `NEXT_PUBLIC_FEATURE_LLM_ANSWER_MODE` (`true` to show answer box UI)
   - `TURNSTILE_SECRET_KEY` (optional)
   - `NEXT_PUBLIC_ANALYTICS_PROVIDER` (`posthog` | `plausible` | `ga4`, optional)
5. Deploy with default Vercel Next.js settings.

## Security/Privacy Notes

- CSP and security headers are set in `next.config.mjs`.
- API routes include in-memory rate limiting.
- Intake validation uses Zod and honeypot anti-spam.
- Sensitive free-text is not sent to analytics and is not logged in dev metadata logs.
- In production without `INTAKE_WEBHOOK_URL`, intake returns a safe configuration error.
