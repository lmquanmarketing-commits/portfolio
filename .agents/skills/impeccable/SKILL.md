---
name: impeccable
description: >-
  Design language, anti-pattern checker, and fine-tuning toolchain created by Paul Bakaus (jQuery UI).
  Provides specialist design commands (/polish, /bolder, /quieter, /audit, /typeset), persistent
  DESIGN.md context, and over 60 deterministic design checks. Use when styling, polishing, auditing,
  or adjusting the visual volume, contrast, and craft of web pages and components.
---

# Impeccable: Precision UI Craft & Design Vocabulary

Impeccable equips the AI coding agent with a shared, deterministic vocabulary for design craft, preventing aesthetic drift and maintaining high-finish quality across every iteration.

---

## 1. Specialist Commands & Actions

When invoked or requested by the user, apply these specialized design procedures:

### `/impeccable init`
* Scans the codebase, color variables, typography stack, and layout structure.
* Generates or updates `DESIGN.md` and `PRODUCT.md` at the project root to permanently lock down design rules and brand identity.

### `/impeccable polish`
* Micro-refinement pass focusing on precision:
  * Tighten spacing scales and align elements to the optical baseline.
  * Harmonize border-radii (e.g., child radii = parent radius - padding).
  * Ensure consistent shadow elevation (`box-shadow: 0 1px 3px rgba(...)`).
  * Remove visual jitter, awkward line breaks, and uneven vertical gaps.

### `/impeccable bolder` (Increase Design Volume)
* Increases personality, contrast, and visual drama:
  * Elevate headline scale and weight (e.g., Bold Serif Display).
  * Strengthen brand accent colors (e.g., rich metallic gold or deep charcoal).
  * Add distinctive container treatments (accent top bars, crisp editorial borders).

### `/impeccable quieter` (Decrease Design Volume)
* Calms down visual noise and embraces refined minimalism:
  * Reduce decorative elements, badges, and background tints.
  * Increase whitespace and negative space around key metrics.
  * Subdue secondary colors into muted neutral tones.

### `/impeccable audit`
* Runs a deterministic checklist across 60+ common UI anti-patterns:
  * **Contrast:** Checks foreground against background (minimum 4.5:1 ratio).
  * **Typography:** Flags uncalibrated line-heights, orphaned words, and font clashes.
  * **Layout:** Detects unnecessary card nesting (cards inside cards) and cramped mobile padding.
  * **Hierarchy:** Verifies that the most important element on the screen is visually undeniable.

### `/impeccable typeset`
* Dedicated typography refinement:
  * Adjusts letter-spacing (`letter-spacing: -0.02em` on giant headlines, `letter-spacing: 0.12em` on uppercase mono labels).
  * Calibrates `font-family` pairings (Editorial Serif + Clean Sans + Technical Mono).
  * Ensures tabular numerals (`font-variant-numeric: tabular-nums` or monospace) for financial and KPI data.

---

## 2. The 60+ Anti-Pattern Heuristics

Actively prevent and fix these common frontend flaws:
1. **The Ghost Text Syndrome:** Body text set to low-contrast light grays (`#9E9E9E` on `#FFFFFF`). Always use `#1A1A1A` to `#4A4A4A`.
2. **The Inconsistent Border-Radius:** Mixing `rounded-full`, `rounded-md`, and `rounded-2xl` arbitrarily without a defined nesting math.
3. **The Center-Everything Mobile Trap:** Forcing all content into the center on mobile, breaking natural reading flow for editorial long-form.
4. **The Empty Pill Box:** Full-width tags spanning across wide cards with empty dead space inside the border. Tags must fit their content snugly (`display: inline-flex; width: fit-content;`).
5. **The Unpadded Container:** Content touching screen edges on mobile devices. Always maintain at least `16px–24px` gutter padding.

---

## 3. Persistent Project Design Context

Always consult `DESIGN.md` in the project root before making visual modifications. Never overwrite established color palettes, typography scales, or approved section layouts without explicit user consent.
