# Nerina Portfolio

Bilingual UX/UI portfolio built with Next.js App Router, TypeScript, Tailwind CSS and `next-intl`.

## Current Status

- Done: Next.js 16 app scaffold with TypeScript, Tailwind CSS v4 and ESLint flat config.
- Done: Locale routing for `/en` and `/es` with `next-intl`.
- Done: Shared layout, section and UI component system.
- Done: Header, footer, home, about, work and contact page composition from screenshot references.
- Done: Dedicated localized Work case-study route with full-bleed hero, left rail, smooth top link, section-driven copy and production image assets.
- Done: Local CV PDF linked from the `Ver CV` / `Resume` nav button in a new tab.
- Remaining: final responsive QA pass and final screenshot comparison.

## Stack

- Node `v22.13.0` (`.nvmrc`)
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl

## Routes

- `/`
- `/en`
- `/en/about`
- `/en/work`
- `/en/contact`
- `/es`
- `/es/about`
- `/es/work`
- `/es/contact`

## Commands

```bash
npm install
npm run dev
npm run dev:turbo
npm run build
npm run lint
```

## Project Structure

```txt
app/
  page.tsx
  [locale]/
    (site)/
      page.tsx
      about/page.tsx
      work/page.tsx
      contact/page.tsx
    layout.tsx
  globals.css
  layout.tsx
  styles/
    base.css
    components.css
    pages.css

components/
  layout/
    SiteShell.tsx
    Header.tsx
    Footer.tsx
  sections/
    Hero.tsx
    PageIntro.tsx
    ProjectGrid.tsx
    ContactLinks.tsx
    WorkFeature.tsx
    WorkCaseStudy.tsx
    ContactForm.tsx
  ui/
    ProjectCard.tsx
    RichTextBlock.tsx
    SectionHeading.tsx
    SmoothHashLink.tsx

i18n/
  routing.ts
  request.ts

messages/
  en.json
  es.json

public/
  documents/
    NerinaCV.pdf
  icons/
    top.svg
  illustrations/
    abcComunidad.svg
    maestra.svg
  images/
    portfolio/
      abc.png
      aula.png
      persona.jpg
      telefono.png
    work/
      01_EN.png ... 05_EN.png
      01_ES.png ... 05_ES.png
      07.png
      08.png
      Concept_board.png

proxy.ts
next.config.ts
eslint.config.mjs

docs/
  agents.md
  design.md
  portfolio-build-plan.md
  progress.md

agents/
  architect.md
  ui-builder.md
  i18n-curator.md
  qa-guardian.md
```

## Work Case Study

- `/{locale}/work` renders `Work.caseStudy` from `messages/*.json`.
- Supported block types: `heading`, `subheading`, `paragraph`, `bullets`, `definitionList`, and `callout`.
- Work IA diagrams use localized assets from `public/images/work/*_EN.png` and `*_ES.png`.
- Interface images use shared assets `07.png`, `08.png` and `Concept_board.png`.
- The left rail uses `SmoothHashLink` for reliable animated scrolling back to `#work-case-hero`.

## Agent Workflow

This repository uses role-based working guides in `agents/`.

- `architect`: keeps structure consistent with the plan.
- `ui-builder`: implements visual layout and reusable components.
- `i18n-curator`: keeps EN/ES copy in sync and clean.
- `qa-guardian`: validates routes, build and quality gates.

Active decisions and status log live in:

- `docs/agents.md`
- `docs/design.md`
- `docs/progress.md`

## Definition Of Done

- `npm run build` passes.
- `npm run lint` passes.
- Root route stays at `/` and locale routes work for EN and ES.
- No hardcoded bilingual copy inside reusable components unless it is asset metadata or accessibility-only fallback text.
- Before any push, check whether docs need updating.
