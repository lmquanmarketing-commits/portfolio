---
name: taste-skill
description: >-
  Anti-slop frontend design framework for AI coding agents. Enforces brief inference,
  three design dials (variance, motion, density), and strictly bans generic AI clichés
  (purple gradients, Inter-only fonts, cookie-cutter 3-card grids). Use when building,
  styling, or refining UI components, landing pages, or web layouts.
---

# Taste Skill: Anti-Slop Frontend Framework

Taste Skill elevates AI-generated web interfaces from generic, cookie-cutter templates to high-agency, bespoke designs crafted with intentional taste and art direction.

---

## 1. The Core Philosophy: Eliminate AI Slop

AI code generators default to "safe averages" that make every website look like a generic SaaS template. Taste Skill enforces an anti-slop doctrine:

* **BANNED: The AI Cliché Palette**
  * Never default to `#8B5CF6` (Vivid Purple) to `#3B82F6` (Electric Blue) gradients on dark slate backgrounds.
  * Never use low-contrast washed-out gray text (`#94A3B8` on white or light gray) that fails WCAG AA standards.
  * Pick an intentional, grounded palette with high-contrast anchors and warm neutrals.

* **BANNED: The "Inter For Everything" Trap**
  * Avoid defaulting to `Inter`, `Roboto`, or generic sans-serif for every heading, tag, and paragraph.
  * Pair typefaces with purpose: Display serif (editorial authority), geometric sans (modern clarity), or monospaced (data precision).

* **BANNED: The 3-Column Feature Grid Cliché**
  * Do not reflexively build a hero followed by three identical bordered cards with a colored icon at the top.
  * Use varied macrostructures: Asymmetric splits, bento matrices, editorial broadsheets, or horizontal narrative tracks.

* **BANNED: Decorative Meaninglessness**
  * No arbitrary status dots (`● Live`, `● Ready`) unless they represent actual real-time state.
  * No excessive em-dashes (`—`) in every title or subheading.
  * No redundant, decorative badge pills stacked on top of each other.

---

## 2. Step 0: Brief Inference

Before generating UI markup or CSS, pause to infer the design read:

1. **Page Kind:** Portfolio, Enterprise SaaS, Developer Tool, Creative Studio, or E-commerce?
2. **Vibe Keywords:** e.g., *Authoritative Editorial*, *Warm Tactile*, *Brutalist Technical*, *Minimalist Luxury*.
3. **Target Audience:** Who is reviewing this? (e.g., C-level executives, senior hiring managers, technical peers).
4. **The 3 Tunable Dials (Scale 1–10):**
   * `DESIGN_VARIANCE` (1 = conservative enterprise, 10 = avant-garde editorial)
   * `VISUAL_DENSITY` (1 = ultra-spacious luxury, 10 = high-density Bloomberg terminal)
   * `MOTION_INTENSITY` (1 = static, rock-solid, 10 = dynamic, kinetic micro-interactions)

---

## 3. Execution & Design Rules

* **Typography Hierarchy:**
  * Minimum 3:1 scale difference between Page Title (`H1`), Section Heading (`H2`), and Card Title (`H3`).
  * Explicit `line-height`: Headlines `1.15–1.28`, Body `1.6–1.75`.
  * Avoid `text-wrap: balance` on long Vietnamese or multi-word titles that cause awkward orphaned words. Use `text-wrap: normal`.

* **Spatial Rhythm & Density:**
  * Use a consistent 4px / 8px spacing scale (`8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`).
  * Give cards intentional breathing room: `padding: 24px` to `32px` on desktop, `16px` to `20px` on mobile.

* **Mobile-First Integrity:**
  * Ensure touch targets are at least `44×44px`.
  * Prevent horizontal overflow (`overflow-x: hidden`).
  * Avoid mixed alignments across siblings: Keep either a unified editorial left-alignment or a deliberate centered dashboard hierarchy.

---

## 4. Pre-Flight Verification Checklist

Before finalizing any frontend output, verify:
- [ ] Does this look like a human designer created it, or does it smell of generic AI templates?
- [ ] Is the primary headline distinctive and memorable?
- [ ] Are numbers, metrics, and proof points given visual prominence?
- [ ] Is contrast razor-sharp and legible in all lighting conditions?
- [ ] Is the layout responsive and stable across 360px (mobile) to 1440px (desktop)?
