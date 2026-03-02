# NeuroIS Color + Shape Redesign (UI Audit, Spec, Implementation, QA)

## A) UI Audit (Current State)

### Interactive Element Inventory and Classification

Primary CTA
- Global: `Call now`, `Text us`, `Free case evaluation` (header, hero, sticky bar, footer, practice/guides CTA blocks)
- Intake flow: `Next`, `Submit intake`, `Continue`
- Chat: `Call now`, `Text us`, `Free evaluation`, `Submit intake`, `Talk to a lawyer now`

Secondary CTA
- `Back`, secondary button variants, non-primary conversion actions in cards and sidebars

Utility
- Header navigation links
- Footer legal/support links
- Breadcrumb links
- Guide/practice internal links (`Read guide`, `Open page`, `Explore this practice area`)
- Topic selectors, tabs, accordions

Destructive
- Error messaging surfaces and destructive color usage only (validation states, failed submit notices)

### Baseline Problems Found

1. Primary interaction cues were gold-led and mixed, not trust-forward blue-led.
2. Multiple utility links were muted/gray-ish and understated as interactive cues.
3. Control shapes varied (`rounded-sm`, `rounded-md`) and felt inconsistent.
4. Inputs/selects lacked a unified rounded style and focus feedback pattern.
5. Tabs used low-emphasis active state (`data-state=active` mostly card tint), reducing action clarity.
6. Footer nav and utility links were low-emphasis muted, increasing cognitive load for scannability.

## B) Redesign Spec (Target State)

### Color Tokens

- `--primary`: trust blue for primary CTA/action emphasis
- `--secondary`: blue-tinted neutral for secondary controls
- `--accent`: darker blue for support highlights
- `--destructive`: red reserved strictly for destructive/error states
- `--link` / `--link-hover`: explicit interactive cue colors
- `--focus`: high-visibility blue focus ring token

### Button Tokens

- Radius: `rounded-xl` default, no sharp corners for actionable controls
- Sizes:
  - `sm`: `h-10`
  - `default`: `h-11`
  - `lg`: `h-12`
- States:
  - default/hover/active for each variant
  - disabled opacity and pointer behavior
  - visible focus ring for keyboard users

### Link and Form Control Styles

- Links: colored by default (`--link`) with clear hover (`--link-hover`)
- Inputs/selects/textarea: rounded-xl, consistent heights, explicit focus ring
- Checkbox: enlarged target and rounded shape
- Tabs: rounded container + strong active blue state

### Rule Mapping

- Blue-led trust cues for primary actions: implemented.
- Rounded controls over sharp: implemented across shared controls.
- Red for errors/destructive only: preserved.
- Purposeful color on interaction cues: strengthened links/nav/action states.
- Contrast/readability: maintained high contrast with dark background + light text.

## C) Implementation Summary

### Shared Design System Changes

- `app/globals.css`
  - Replaced gold-led primary token system with blue-led trust palette
  - Added explicit `--link`, `--link-hover`, `--focus`
  - Updated background gradients to blue-led
  - Standardized focus ring behavior and control radius
  - Updated crest accents to blue to match trust palette

- `components/ui/button.tsx`
  - Rounded-xl buttons
  - Blue-led default variant
  - Strong focus-visible and active states

- `components/ui/input.tsx`
- `components/ui/textarea.tsx`
- `components/ui/checkbox.tsx`
- `components/ui/tabs.tsx`
  - Unified rounded control language
  - Improved focus and active interaction clarity

### Template/Component Adoption

- `components/chat/chat-concierge.tsx`
  - Select controls moved to rounded-xl + explicit focus styles
- `components/forms/intake-form.tsx`
  - Incident type select aligned to control system
- `components/layout/header.tsx`
  - Utility links tuned for stronger interactive cueing
- `components/layout/footer.tsx`
  - Utility links updated from muted to clear interactive states

## D) QA / Verification Checklist

- [x] Every CTA has clear color-driven interaction cueing
- [x] All shared actionable controls are rounded
- [x] Red is only used for destructive/error contexts
- [x] Focus states remain visible and keyboard accessible
- [x] Contrast remains high on body text and CTA labels
- [x] No SEO/routing/URL changes introduced
- [x] Build/lint/type safety preserved

## Before/After Component Diffs (Representative)

1. `app/globals.css`
- Before: gold-led primary + muted link cues
- After: blue-led trust palette + explicit link/focus tokens

2. `components/ui/button.tsx`
- Before: `rounded-md`, less pronounced active/focus treatment
- After: `rounded-xl`, stronger primary blue emphasis and focus ring

3. `components/ui/tabs.tsx`
- Before: low-contrast active tab
- After: active tab uses primary blue and primary foreground

4. `components/ui/input.tsx`, `textarea.tsx`, `checkbox.tsx`
- Before: mixed sizing/rounding
- After: consistent rounded control system and focus feedback

## Short Changelog

- Introduced blue-led design tokens for trust-forward CTAs.
- Standardized rounded shape language across interactive controls.
- Strengthened interactive affordance on links/nav/footer utilities.
- Updated chat/intake select controls to match system.
- Preserved existing copy, routing, metadata, and SEO structure.

