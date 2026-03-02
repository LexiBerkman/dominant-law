# Accessibility & UI Changes

## Stack + Commands

- Framework: Next.js 14 (App Router) + React + TypeScript
- Styling: Tailwind CSS + CSS variables/tokens in `app/globals.css`
- UI primitives: Radix-based components in `components/ui`
- Content: MDX guide pages in `app/resources/guides/*`

Local commands:

- `npm run dev -- --hostname 127.0.0.1 --port 3002`
- `npm run typecheck`
- `npm run lint`
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`

## Baseline Top Issues (Pre-fix)

1. Mobile primary navigation missing (no accessible menu fallback) (`components/layout/header.tsx`)
2. No focus management behavior for menu interactions (Esc/restore/trap) (`components/layout/header.tsx`)
3. Repetitive ambiguous CTA link text like "Read guide" (`app/page.tsx`, `app/resources/guides/page.tsx`)
4. Manual dash-prefixed list text reducing semantic clarity (`components/home/pillar-page.tsx`)
5. Contact form had no error summary, increasing failure friction for keyboard/screen-reader users (`components/forms/intake-form.tsx`)
6. Form step errors not announced in a consolidated way (`components/forms/intake-form.tsx`)
7. Some inputs lacked optimal input purpose/autocomplete/type metadata (`components/forms/intake-form.tsx`)
8. Checkbox labels were not explicitly linked by `id`/`htmlFor` (`components/forms/intake-form.tsx`)
9. Status/error submission messages were not marked as live regions (`components/forms/intake-form.tsx`)
10. Sticky action bar was not exposed as a navigation landmark (`components/layout/sticky-cta.tsx`)
11. About/attorney bio template had weak visual hierarchy/spacing rhythm (`app/about/page.tsx`)
12. Global typography rhythm and target sizing needed standardization for consistency (`app/globals.css`)
13. Skip-link behavior needed stronger discoverability and keyboard-first access (`app/layout.tsx`, `app/globals.css`)
14. Reduced-motion handling existed for crest motion only; broader interaction consistency needed review (`app/globals.css`)
15. Required templates in brief (dedicated attorney bio/blog post system) not fully present in current codebase (`app/about/page.tsx`, `app/resources/guides/*`)

## What Was Changed

### Global / Layout / Navigation

- Added skip link and explicit `main` target focus behavior:
  - `app/layout.tsx`
- Added mobile navigation menu with:
  - keyboard open/close
  - `Esc` close
  - focus trap loop within menu
  - focus restore to menu button on close
  - `components/layout/header.tsx`
- Added primary + mobile nav landmark labeling:
  - `components/layout/header.tsx`
- Converted sticky mobile CTA wrapper into nav landmark:
  - `components/layout/sticky-cta.tsx`

### Design Rhythm / UI Standardization

- Improved global accessibility utility styles:
  - visible skip-link behavior
  - minimum control target size
  - heading scroll margin offset for sticky header
  - `app/globals.css`
- Refined attorney bio template presentation and heading hierarchy:
  - `app/about/page.tsx`

### Home + Guides Template Improvements

- Replaced ambiguous "Read guide" with descriptive link text:
  - `app/page.tsx`
  - `app/resources/guides/page.tsx`
- Fixed list semantics by removing visual dash-prefix anti-pattern and using real bullets:
  - `components/home/pillar-page.tsx`

### Contact / Intake (Highest Risk)

- Added step-level error summary with focus-on-error behavior:
  - `components/forms/intake-form.tsx`
- Added `noValidate` + custom validation UX with programmatic feedback
- Added `required`, `type`, `autocomplete`, and `inputMode` metadata
- Added `aria-invalid`, `aria-describedby`, field-level error IDs
- Linked checkbox labels to controls with `id`/`htmlFor`
- Added submission success/error live region semantics (`role="status"`, `role="alert"`)
- Preserved and strengthened mandatory step gating

### Test Alignment

- Updated E2E intake payload to satisfy new required intake fields:
  - `tests/e2e/site.spec.ts`

## WCAG 2.2 AA Checklist Coverage

- [x] Keyboard navigation for global nav and key interactions
- [x] Visible focus states and keyboard skip-to-content
- [x] Landmarks and heading structure improved on priority templates
- [x] Form controls have programmatic labels
- [x] Error identification + field association (`aria-describedby`)
- [x] Error summary pattern added for multi-step intake
- [x] Status messages exposed to assistive tech
- [x] Descriptive link text improvements
- [x] Motion respects reduced-motion for custom animated crest
- [x] Decorative imagery is marked decorative where applicable (`alt=""`), meaningful imagery has alt text
- [x] Touch/target sizing improved globally for controls

## Verification Run

Executed successfully:

- `npm run typecheck`
- `npm run lint`
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`

Lighthouse/accessibility tooling:

- No local Lighthouse binary configured in this workspace (`lighthouse` command not found).
- Recommend running Lighthouse and axe in CI/browser against deployed preview.

## Remaining Gaps / Follow-up

1. Dedicated attorney-bio and blog-post template systems requested in scope are not fully represented in current route architecture.
   - Current equivalents: `/about` and MDX guides in `/resources/guides/*`
2. Full WCAG 2.2 AA certification still requires manual assistive tech QA:
   - NVDA/JAWS/VoiceOver pass
   - keyboard-only end-to-end pass on all templates
   - page-by-page contrast spot-checks with final brand assets
3. Third-party embeds/widgets (if added later) must be separately audited for keyboard and focus behavior.

