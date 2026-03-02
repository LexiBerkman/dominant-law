# QA Checklist

## Functional

- [ ] Homepage hero renders with embedded chat above fold on desktop.
- [ ] Mobile sticky CTA bar present and clickable.
- [ ] CTAs trigger analytics events:
  - `call_click`
  - `text_click`
  - `form_start`
  - `form_submit`
  - `chat_start`
  - `chat_intake_complete`
  - `chat_escalate_human`
- [ ] Contact intake succeeds when webhook configured.
- [ ] Contact intake returns safe error when production webhook missing.

## Security/Privacy

- [ ] Headers present (CSP, HSTS, frame/options, etc.).
- [ ] API rate limits active.
- [ ] Honeypot blocks bot submissions.
- [ ] Sensitive free text not sent in analytics events.

## SEO

- [ ] Metadata is unique for core pages.
- [ ] Canonical links valid.
- [ ] `sitemap.xml` and `robots.txt` resolve.
- [ ] JSON-LD validates.

## Accessibility

- [ ] Keyboard navigation for nav, forms, tabs, accordions, chat.
- [ ] Visible focus states.
- [ ] Adequate color contrast for text and controls.

## Test Commands

- `npm run typecheck`
- `npm run lint`
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`
