# Design Spec

Last updated: 2026-04-25

## Scope

This file captures the current visual rules implemented from screenshot references.

- Root landing page (`/`) has no top header and uses hero + shared footer.
- Localized pages (`/[locale]`, `/[locale]/about`, `/[locale]/work`, `/[locale]/contact`) use shared header/footer layout.
- Primary references: `screenshots/home.png`, `screenshots/Hi.png`, `screenshots/Work.PNG`, `screenshots/About.png`, `screenshots/Contact.png`, `screenshots/navButtonStates.png`.

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

- Header container and `#header-frame` use fixed 165px height with `max-w-[1440px]` centered in page.
- Header main row target: 108px height, `justify-between`, padding `16px 36px 8px 36px`.
- Header main row owns the white background; the locale row remains transparent so page hero imagery can sit behind EN/ES chips.
- Header no longer renders bottom separator `hr`.
- Brand block target: fixed 248x84.
- Nav button row: desktop/tablet visible, hidden at `<=500px`.
- Nav row uses fixed 800px width.

### Nav Button States

- Base: 57px height, content-fit width, padding 16px 24px, radius 8px, border 1px.
- Hover: same size/padding/radius with border 1.5px.
- Active/current: same size/padding/radius with border 1px and dark fill.

## Locale Switch (EN/ES)

- Header locale switch: 158x37 with 8px gap.
- Home hero locale switch: 343x70, stacked vertically.
- Home hero locale label: `Choose language`, 16px regular, 140% line-height.
- Home hero locale buttons row: 96px wide, `justify-between`.
- Under `500px`: wrapper restores fixed sizing (`150px` width, `36px` side paddings).
- Each chip: 40x40 with 6px padding, underlined text, 18px regular.
- Locale chips route to localized roots: `/en` and `/es`.

## Footer

- Footer sits outside localized content padding wrapper, so top separator can span full page width with normal `w-full`.
- Footer top separator is real full-width `hr`, pinned to top edge.
- Outer footer block: full width, 164px height, vertically centered content.
- Inner content block: fixed 259x132 with 24px padding.
- Icon row: 64x28 with two 28px icons and 8px center gap.
- Mail icon: 28 x 22.4
- LinkedIn icon: 28 x 28
- Footer icons use black fill.
- Inner divider between icon row and copy block is a real 1px `hr`.
- Bottom text block: 211x48 with padding-top 8px; inner `<p>` width is 212px.
- Footer helper label (`mail · linkedin`) is intentionally removed.

## Width Rules

- Outermost visible shell uses `w-full`, not `w-screen`, to avoid scrollbar-induced horizontal overflow.
- `SiteShell` provides vertical padding only (`py-4`).
- Localized site layout applies horizontal padding on the `Header` + `main` wrapper (`px-6 sm:px-9`).
- Shared localized `main` uses fixed `max-w-[1440px]` and is centered.
- Root `/` main also uses fixed `max-w-[1440px]` and is centered.

## Work Page

- Localized root Work hero uses centered typography: title 30px bold, subtitle 30px regular.
- Work intro uses title 30px bold and body 28px light italic.
- `#work-intro`, `#work-image-grid`, and `#work-project-meta` use `px-9` to align horizontally with `#header-main-row`.
- `#work-project-card` has no outer border or shadow.
- Image strip uses real assets in left-to-right order: `abc`, `telefono`, `persona`.
- Image strip has no gaps between images; whole strip is inset to header alignment using `px-9`.
- On hover, `#work-image-grid` slightly blurs its images and reveals a bottom-centered CTA button (`View project`) positioned 32px from the bottom edge.
- `/{locale}/work` is now a dedicated case-study page based on `screenshots/Work.PNG` plus `screenshots/Work1.png` through `screenshots/Work9.png`, not the same layout as localized root.
- Case-study page uses a full-bleed classroom hero (`aula.png`) pulled up to meet the bottom of `#header-main-row`.
- Case-study hero image preserves the original 1536×1024 ratio (`3:2`) with `w-full h-auto`, not `fill/object-cover` cropping.
- Case-study hero overlay centers the all-white `abcComunidad.svg` logo above the blurb card.
- Case-study hero tagline text is removed.
- `#work-case-hero-blurb`: max width 800px, 28px text, white rounded card, teal text.
- Case-study content uses a dynamic turquoise left rail plus section-driven content from `messages/*.json`.
- `caseStudy.sections[]` is the source for numbered sections and supports `heading`, `subheading`, `paragraph`, `bullets`, `definitionList`, and `callout` blocks.
- Case-study section numbers use Inter 700, 35px, 120% line-height, `#424343`.
- Case-study `heading` blocks use Inter 600, 30px, 120% line-height, `-0.022em` tracking, `#075E65`.
- Case-study `subheading` blocks use Inter 700, 18px, 145% line-height.
- Current implemented case-study sections: Context, Users, MVP, Information Architecture, User Flows, Interface, Conclusion.
- Screenshot diagrams/interface images are not yet wired as production assets; original images should be added separately and referenced by stable image IDs when available.

## Selector Hooks

- Stable ids/classes were added for layout and sections to simplify QA and CSS targeting.
- Key hooks include: `#site-shell`, `#site-page-frame`, `#site-main`, `#site-header`, `#header-frame`, `#header-main-row`, `#header-nav-buttons`, `#site-footer`, `#home-hero`, `#about-page`, `#work-page`, `#work-case-hero`, `#work-case-hero-blurb`, `#work-case-section-*`, `#contact-page`, `#contact-form`, `#contact-links`.

## Contact Page

- `#contact-page-intro`: 446×81px. Title: Inter 700, 30px, 140% line-height, 2% tracking. Subtitle: Inter 400 italic, 28px, 140% line-height, 2% tracking.
- `#contact-content-grid`: 1372px wide, `mx-auto`, `justify-items-center`.
- `#contact-form` (`ContactForm`): 500×485px, max-w-500px, gap 40px, px 36px.
- Submit button: 107×66, background `#00B2C1`, radius 8px, shadow `6px 6px 4px #075E65`, white 24px semibold text.
- `#contact-links-wrap`: 415×168px, gap 8px, px 40px, py 44px.
- Contact links use dedicated mail/linkedin SVGs with `#333333` icon fill.
- Font rule: Inter only — ignore any other font specs, they are outdated.

## Tailwind Setup

- Tailwind v4 (`tailwindcss@4.2.2`) with `@tailwindcss/postcss@4.2.2`.
- CSS entrypoint: `@import "tailwindcss"` in `app/globals.css` (v3-style `@tailwind` directives removed).
- `app/globals.css` now acts as import hub for `app/styles/base.css`, `components.css`, and `pages.css`.
- `tailwind.config.ts` is a legacy artifact and has no effect in v4; config lives in CSS via `@theme`.

## Notes

- Keep visual updates screenshot-faithful first; then perform responsive polish.
- If a new state/value is introduced, update this file and `docs/progress.md` together.
