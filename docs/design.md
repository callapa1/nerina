# Design Spec

Last updated: 2026-04-18

## Scope

This file captures the current visual rules implemented from screenshot references.

- Home page (`/[locale]`) has no top header and uses full-width hero + full-width footer.
- Internal pages (`/[locale]/about`, `/work`, `/contact`) use the shared header/footer layout.
- Primary references: `screenshots/home.png`, `screenshots/Hi.png`, `screenshots/About.png`, `screenshots/Contact.png`, `screenshots/navButtonStates.png`.

## Typography

- Global font: Inter local variable font (normal + italic), loaded in `app/layout.tsx`.
- Hero title line (`Nerina Berthelot`): 40px, weight 600, line-height 140%, letter-spacing 2%.
- Hero role line (`UX/UI`): 40px, weight 400, line-height 140%, letter-spacing 2%.
- Footer copyright text: 14px, weight 400, line-height 140%, letter-spacing 0%, centered.

## Color And Surfaces

- Page background is always flat white.
- No `border-x` rails are used anywhere.
- Locale chips use pale teal background (`#D3ECEE`) and teal drop shadow.

## Header

- Desktop/tablet: fixed nav button row is always visible on internal pages.
- Mobile: collapsible menu only.
- Nav button container target (desktop):
  - width 566px
  - height 57px
  - min-width 550px
  - gap 124px
  - positioned with top/left offsets of 20px

### Nav Button States

- Base: 106x57, padding 16px 24px, radius 8px, border 1px.
- Hover: same size/padding/radius with border 1.5px.
- Active/current: same size/padding/radius with border 1px and dark fill.

## Locale Switch (EN/ES)

- Wrapper: 96x40 with 16px gap.
- Each chip: 40x40 with 6px padding, underlined text, 18px regular.
- On Home, EN/ES routes go to `/en/work` and `/es/work` (Hi page flow).

## Footer

- Outer footer block: full width, 164px height, border-top 1px, vertically centered content.
- Inner content block: 211x84.
- Icon row: 64x28 with two 28px icons and 8px center gap.
  - Mail icon: 28 x 22.4
  - LinkedIn icon: 28 x 28
- Bottom text block: 211x48, top border 1px, padding-top 8px, gap 10px.
- Footer helper label (`mail · linkedin`) is intentionally removed.

## Notes

- Keep visual updates screenshot-faithful first; then perform responsive polish.
- If a new state/value is introduced, update this file and `docs/progress.md` together.
