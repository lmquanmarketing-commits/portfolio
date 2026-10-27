# DESIGN.md — Design System & Brand Guidelines
**Project:** Lê Minh Quân — Growth Performance Marketing Portfolio  
**Architecture:** Editorial Broadsheet & Verified Financial Ledger  
**Standard:** Taste Skill + Impeccable + Hallmark Integrated Framework

---

## 1. Brand Identity & Design Persona

* **Individual:** Lê Minh Quân
* **Professional Positioning:** Growth Performance Marketer (B2B SaaS, Multi-Brand F&B, Global E-commerce).
* **Visual Persona:** Authoritative, data-backed, business-first. The aesthetic resembles a high-tier financial publication (*The Financial Times*, *Harvard Business Review*) rather than a generic tech portfolio.
* **Core Brand Mark:** Monogram **MQ** inside a squircle badge (`#1E1C1A` surface with `#D4A84B` gold outline), featuring an integrated 45° upward growth arrow vector (`↗`).

---

## 2. Color Palette & Design Tokens

Token | Hex Value | Semantic Usage
:--- | :--- | :---
`--bg` | `#FAFAF8` | Page canvas (warm fine-press paper tone)
`--fg` | `#1A1A1A` | High-contrast editorial ink (headlines & titles)
`--card` | `#FFFFFF` | Primary surface background for cards
`--card-accent` | `#FDFBF7` | Warm ivory highlight cards (education & specialized badges)
`--muted` | `#F5F3F0` | Subdued surface tint (footer, quote containers)
`--muted-foreground` | `#6B6B6B` | Secondary descriptive text (high legibility, WCAG AAA compliant)
`--border` | `#E8E5DF` | Hairline editorial division rules
`--accent` | `#B8860B` | Deep goldenrod for primary data highlights & giant section numbers
`--accent-secondary` | `#D4A84B` | Metallic gold for tags, pill borders, and badge outlines
`--btn-brown` | `#8C6226` | Deep warm bronze for company labels, category headers, and CTAs
`--green-kpi` | `#2E7D32` / `#E8F5E9` | Positive growth indicators (`▲ 3,3× ROAS`, `▲ 3,9× Qualified`)

---

## 3. Typography Stack

Role | Font Family | Fallback | Sizing & Weight
:--- | :--- | :--- | :---
**Headlines / Titles** | `Playfair Display` | Georgia, serif | `700` / `800`, `line-height: 1.15–1.28`, `letter-spacing: -0.01em`
**Body & Descriptions** | `Source Sans 3` | -apple-system, sans-serif | `400` / `500`, `line-height: 1.65–1.75`
**Data / KPIs / Tags** | `IBM Plex Mono` | monospace | `600` / `700`, `letter-spacing: 0.08em–0.14em`, uppercase

---

## 4. Anti-Slop Rules & Guardrails

1. **Desktop View is Locked:** Any CSS modifications must be strictly scoped to mobile media queries (`@media (max-width: 768px)` or `640px`).
2. **Snug Tags Only:** All tags (`.editorial-tag`, `.editorial-pill`) must use `display: inline-flex; width: fit-content; white-space: nowrap;`. Never allow full-width boxes that create empty dead space.
3. **Section 05 Milestone Hierarchy:**
   * Line 1: Job / Role Title (`Playfair Display`, bold)
   * Line 2: Company / Institution (`IBM Plex Mono`, `--btn-brown`, bold)
   * Never merge them onto a single line with ` · ` that causes awkward mobile wrapping.
4. **Mobile Layout Harmony:**
   * Sections 01, 03, 04, 05: Clean left-aligned editorial hierarchy.
   * Section 02 (KPIs): Centered dashboard widgets.
   * Section 06 (Contact): Centered CTA conclusion.
