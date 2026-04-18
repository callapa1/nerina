# Nerina Portfolio

Bilingual portfolio scaffold built with Next.js App Router, TypeScript, Tailwind CSS and `next-intl`.

## Current Status

- Done: Project scaffold (Next.js + TypeScript + Tailwind)
- Done: Locale routing (`/en`, `/es`) with `next-intl`
- Done: Shared component system (layout/sections/ui)
- In progress: Screenshot-based page composition and responsive polish
- Done: Next.js 16 warning cleanup (`proxy.ts` migration + ESLint flat config)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (locale routes)

## Routes

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
npm run build
npm run lint
```

## Project Structure

```txt
app/
  [locale]/
    (site)/
      page.tsx
      about/page.tsx
      work/page.tsx
      contact/page.tsx
    layout.tsx
  globals.css
  layout.tsx

components/
  layout/
    SiteShell.tsx
    Header.tsx
    MobileMenu.tsx
    Footer.tsx
  sections/
    Hero.tsx
    PageIntro.tsx
    ProjectGrid.tsx
    ContactLinks.tsx
    WorkFeature.tsx
    ContactForm.tsx
  ui/
    SectionHeading.tsx
    ProjectCard.tsx
    RichTextBlock.tsx

i18n/
  routing.ts
  request.ts

messages/
  en.json
  es.json

proxy.ts
next.config.ts
eslint.config.mjs

docs/
  portfolio-build-plan.md
  agents.md
  progress.md

agents/
  architect.md
  ui-builder.md
  i18n-curator.md
  qa-guardian.md
```

## Agent Workflow

This repository uses role-based working guides in `agents/`.

- `architect`: keeps structure consistent with the plan
- `ui-builder`: implements visual layout and reusable components
- `i18n-curator`: keeps EN/ES copy in sync and clean
- `qa-guardian`: validates routes, build and quality gates

The active decisions and status log are tracked in:

- `docs/agents.md`
- `docs/progress.md`

## Definition Of Done Per Step

- Build passes (`npm run build`)
- Lint passes (`npm run lint`)
- Locale routes work for EN and ES
- No hardcoded bilingual copy inside reusable components
- Progress and agent docs updated
