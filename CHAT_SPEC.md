# Chat Concierge Spec

## Modes

1. Get answers
- Default deterministic answer cards by topic.
- Optional answer mode uses `/api/chat/answer` when feature flag is enabled.

2. Check my case (guided intake)
- Finite step flow:
  - `incidentType`
  - `dateOfIncident`
  - `treatmentStatus`
  - `county`
  - `briefDescription`
  - `contact`
  - `consent`
- Client-only state persistence.

## Events

- `chat_start`
- `chat_step_complete`
- `chat_intake_complete`
- `chat_escalate_human`

## Escalation

- Manual escalation CTA always visible.
- Urgency keyword detection (`deadline`, `trial`, `police`, `hospital`, `insurance adjuster`) displays immediate call/text options.

## Safety Rules

- Prominent disclaimers in chat UI:
  - Not legal advice
  - No attorney-client relationship
  - Do not send confidential information
- LLM answer mode is off by default.
- LLM route guardrails:
  - strict system prompt
  - refusal for legal advice/outcome prediction requests
  - rate limiting
  - fallback static response on provider failure

## System Prompt (LLM Answer Mode)

"You are a legal marketing website assistant. Provide general information only. Do not provide legal advice, deadlines, or outcome predictions. In every response remind user no attorney-client relationship is formed and avoid confidential details."
