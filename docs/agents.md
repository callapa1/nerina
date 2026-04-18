# Agent Registry

Last updated: 2026-04-18

## Purpose

Define stable agent roles so implementation stays consistent while we iterate quickly.

## Active Agents

### 1) architect

- Owns folder structure, boundaries and naming consistency.
- Checks that new code aligns with `docs/portfolio-build-plan.md`.
- Prevents duplicate patterns before they spread.

### 2) ui-builder

- Implements pages and shared components from visual references.
- Applies responsive behavior and visual polish.
- Keeps visual decisions intentional and reusable.

### 3) i18n-curator

- Owns translation keys and message-file consistency.
- Ensures EN and ES are equivalent in meaning and tone.
- Avoids hardcoded user-facing copy in shared components.

### 4) qa-guardian

- Runs build/lint checks and route sanity checks.
- Tracks regressions introduced by new changes.
- Confirms done criteria before pushing.

## Update Rules

- Update this file when a role changes scope.
- Update `docs/progress.md` after each completed milestone.
- Keep role names stable unless there is a strong reason to rename.

## Current Assignment

- Step 1 (Scaffold): architect + qa-guardian
- Step 2 (Locale routes): architect + i18n-curator + qa-guardian
- Step 3 (Shared components): ui-builder + architect + i18n-curator
- Step 4 (Page composition): ui-builder + architect + qa-guardian
- Step 5 (Design-spec lock): ui-builder + architect + qa-guardian
- Next step (Responsive + QA closeout): ui-builder + i18n-curator + qa-guardian
