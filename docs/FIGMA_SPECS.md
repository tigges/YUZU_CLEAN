# Figma frame specs — Yuzu Hair & Beauty

Use these alongside `src/app/globals.css` (`@theme`) and `src/lib/site.ts` for parity between design and build.

## Breakpoints (frames)

| Name | Width | Notes |
|------|-------|--------|
| Mobile | 390 | Primary touch QA |
| Tablet | 768 | Nav collapses below `md` in code |
| Desktop | 1440 | Content max-width 1280 (`max-w-7xl`) + page margins |

## Colour styles (create as Figma variables)

| Token | Hex | Usage |
|-------|-----|--------|
| Charcoal | `#1A1A1A` | Headings, dark sections, footer |
| Cream | `#FAF8F5` | Page background |
| Cream dark | `#F5F3EF` | Cards, borders, subtle bands |
| Yuzu gold | `#C4A35A` | Primary CTA, accents |
| Gold hover | `#B39550` | Button hover |
| Sage | `#8B9A8B` | Secondary accent, labels |
| Body | `#3D3D3D` | Paragraph text |
| Muted | `#6B6560` | Supporting text |

## Typography

- **Display / H1–H2:** Fraunces (Google) — weights used in UI: medium for headlines.
- **Body / UI:** DM Sans — regular/medium for nav, buttons, body.

Suggested scale (desktop): H1 60px / tight, H2 36–40px, body 18px hero sub, 16px default, small 14px.

## Components to library-ise

1. **Header** — logo, inline nav, Book pill, mobile drawer.
2. **Buttons** — primary (gold fill), secondary (outline on dark/light), ghost link.
3. **Service card** — title, blurb, “from” line, 16px radius.
4. **Quote card** — border, light fill, attribution.
5. **Footer** — two-column contact + legal strip.

## Spacing

- Section padding: 64 / 80 / 96px vertical (mobile / md / lg).
- Horizontal page gutter: 16 → 24 → 32px.
- Grid: services 4 columns desktop, 2 tablet, 1 mobile; gallery 3×2 desktop, 2-col mobile.

## Accessibility checklist in Figma

- Primary buttons minimum 44×44pt touch targets (annotated in mobile frame).
- Text on cream vs body/muted: aim for WCAG AA; gold text only on charcoal or large display type.
