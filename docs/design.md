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

- Header main row target: 108px height, border-bottom 1px, `justify-between`, padding `16px 36px 8px 36px`.
- Brand block target: 248x84 only under `500px`; fluid above.
- Nav button row: desktop/tablet visible, hidden at `<=500px`.
- Nav row uses fluid width on larger screens; fixed width constraints were removed.

### Nav Button States

- Base: 106x57, padding 16px 24px, radius 8px, border 1px.
- Hover: same size/padding/radius with border 1.5px.
- Active/current: same size/padding/radius with border 1px and dark fill.

## Locale Switch (EN/ES)

- Wrapper base: fluid width (`auto`), 37px height, 6px gap.
- Under `500px`: wrapper restores fixed sizing (`150px` width, `36px` side paddings).
- Each chip: 40x40 with 6px padding, underlined text, 18px regular.
- On Home, EN/ES routes go to `/en/work` and `/es/work` (Hi page flow).

## Footer

- Outer footer block: full width, 164px height, border-top 1px, vertically centered content.
- Inner content block: Home uses fixed 211x84; internal pages are fluid, with 211x84 only under `500px`.
- Icon row: 64x28 with two 28px icons and 8px center gap.
  - Mail icon: 28 x 22.4
  - LinkedIn icon: 28 x 28
- Bottom text block: Home fixed 211x48; internal pages fluid with 211x48 under `500px`; top border 1px, padding-top 8px, gap 10px.
- Footer helper label (`mail · linkedin`) is intentionally removed.

## Selector Hooks

- Stable ids/classes were added for layout and sections to simplify QA and CSS targeting.
- Key hooks include: `#site-header`, `#header-nav-buttons`, `#site-footer`, `#home-hero`, `#about-page`, `#work-page`, `#contact-page`, `#contact-form`, `#contact-links`.

## Contact Page

- `#contact-page-intro`: 446×81px. Title: Inter 700, 30px, 140% line-height, 2% tracking. Subtitle: Inter 400 italic, 28px, 140% line-height, 2% tracking.
- `#contact-content-grid`: 1372px wide, `mx-auto`, `justify-items-center`.
- `#contact-form` (`ContactForm`): 500×485px, max-w-500px, gap 40px, px 36px.
- `#contact-links-wrap`: 415×168px, gap 8px, px 40px, py 44px.
- Font rule: Inter only — ignore any other font specs, they are outdated.

## Tailwind Setup

- Tailwind v4 (`tailwindcss@4.2.2`) with `@tailwindcss/postcss@4.2.2`.
- CSS entrypoint: `@import "tailwindcss"` in `app/globals.css` (v3-style `@tailwind` directives removed).
- `tailwind.config.ts` is a legacy artifact and has no effect in v4; config lives in CSS via `@theme`.

## Notes

- Keep visual updates screenshot-faithful first; then perform responsive polish.
- If a new state/value is introduced, update this file and `docs/progress.md` together.
