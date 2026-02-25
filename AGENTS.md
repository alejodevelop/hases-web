# AGENTS.md
Repository guidance for autonomous coding agents.

## Scope And Intent
- This file defines build/test commands and coding conventions for this repo.
- Apply these rules unless a user request explicitly overrides them.
- Keep changes minimal, targeted, and consistent with nearby code.

## Project Snapshot
- Stack: SvelteKit 2, Svelte 5, TypeScript, Vite 5.
- Styling: Tailwind CSS v4 (`@tailwindcss/postcss`) plus tokens in `src/app.css`.
- Unit tests: Vitest.
- Integration tests: Playwright.
- Package manager: npm (`package-lock.json` exists).
- Linting/formatting: ESLint flat config + Prettier + `prettier-plugin-svelte`.

## Canonical Paths
- `package.json` - scripts and dependency source of truth.
- `eslint.config.js` - lint rules and ignores.
- `tsconfig.json` - strict TypeScript settings.
- `vite.config.ts` - Vite and Vitest include settings.
- `playwright.config.ts` - Playwright server and test matching.
- `src/routes/+layout.svelte` - app shell.
- `src/routes/+page.svelte` - landing page composition.
- `src/lib/components/*` - active component set.
- `src/lib/index.ts` and `src/lib/{navbar,carousel,...}` - legacy exports/components.
- `src/app.css` - global styles and design tokens.
- `src/index.test.ts` - unit example.
- `tests/test.ts` - integration example.

## Active vs Legacy UI Folders
- Prefer `src/lib/components/*` for new UI work.
- Treat `src/lib/navbar`, `src/lib/carousel`, `src/lib/nosotros`, etc. as legacy unless task says otherwise.
- Do not migrate legacy areas opportunistically; only when requested.

## Build, Lint, And Test Commands
Use these commands exactly as written unless there is a reason to deviate.

### Install And Dev
- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Preview production build: `npm run preview`

### Static Analysis
- Type/sync check: `npm run check`
- Watch check: `npm run check:watch`
- Lint (Prettier check + ESLint): `npm run lint`
- Auto-format: `npm run format`

### Full Test Runs
- Run everything (integration then unit): `npm test`
- Run all integration tests: `npm run test:integration`
- Run all unit tests: `npm run test:unit`

### Single-Test Runs (Important)
- Single Vitest file: `npm run test:unit -- src/index.test.ts`
- Single Vitest test name: `npm run test:unit -- -t "adds 1 + 2 to equal 3"`
- Single Playwright file: `npm run test:integration -- tests/test.ts`
- Single Playwright test by title: `npm run test:integration -- --grep "home page has expected h1"`

### Test Discovery Rules
- Vitest includes: `src/**/*.{test,spec}.{js,ts}`.
- Playwright test dir: `tests`.
- Playwright name pattern: `(.+\.)?(test|spec)\.[jt]s`.

## Code Style: Baseline Rules

### Formatting
- Keep files Prettier-compatible; do not hand-format against formatter output.
- Run `npm run format` when touching multiple files.
- Run `npm run lint` before final handoff when feasible.

### Imports
- Keep imports grouped at file top.
- Prefer type-only imports where applicable (`import type { Foo } from '...'`).
- Use `$lib/...` alias for shared library imports in routes/components.
- Use relative imports for true local siblings when clearer.
- Remove unused imports and stale references during edits.

### TypeScript And Typing
- Respect `strict: true`; avoid `any` unless unavoidable.
- Prefer explicit interfaces/types for structured data and props.
- Type public function inputs/outputs where ambiguity exists.
- Keep null/undefined handling explicit with guards.
- Do not disable type checks to bypass errors.

### Svelte 5 Conventions
- Follow existing rune usage patterns (`$state`, `$props`) in active files.
- Use `lang="ts"` in script blocks when adding typed logic.
- Keep side effects in lifecycle-safe places (for example `onMount` for browser-only work).
- Clean up timers/listeners in teardown callbacks.
- Keep route composition in `src/routes`; reusable blocks in `src/lib/components`.

### Naming
- Components: PascalCase (`Hero.svelte`, `Testimonials.svelte`).
- Variables/functions: camelCase.
- Avoid single-letter names except tiny loop indices.
- Prefer descriptive state names (`mobileMenuOpen`, `currentSlide`).
- Keep filenames aligned with exported/default component names.

### CSS And Tailwind
- Prefer Tailwind utility classes over large custom CSS blocks.
- Keep design token definitions centralized in `src/app.css` (`@theme`).
- Reuse existing token names before introducing new tokens.
- Avoid one-off inline style attributes unless dynamic values require it.
- Preserve responsive behavior (mobile + desktop) when editing layout classes.

### Accessibility
- Use semantic HTML for structure and interaction.
- Interactive controls must be keyboard reachable and labeled.
- Provide `aria-label` when visual labels are insufficient.
- Keep heading hierarchy coherent.
- If UI text/structure changes, update related test selectors.

### Error Handling And Resilience
- Prefer explicit guard clauses for invalid or missing data.
- Do not silently swallow exceptions.
- In UI logic, degrade gracefully when target elements are absent.
- For async flows, handle failures and present a safe fallback state.
- Add minimal logging only when it helps diagnose real failures.

### Comments And Docs
- Keep comments concise and only for non-obvious logic.
- Remove comments that restate obvious code behavior.
- Update docs/tests when behavior or command usage changes.

## Testing And Change Discipline
- For behavior changes, add or update tests in same change when possible.
- Prefer focused test execution first, then broader suites.
- If selectors/headings change, adjust Playwright tests in `tests/`.
- Do not leave knowingly broken tests without noting why.
- Avoid unrelated refactors during task-focused changes.

## Agent Workflow Checklist
- Read nearby files before editing to match local patterns.
- Make the smallest safe change that satisfies the request.
- Validate with relevant commands (targeted test + lint/check when feasible).
- Summarize what changed, where, and what validation ran.
- Call out follow-up risks if full validation could not be executed.

## Git Hygiene For Agents
- Never revert unrelated user changes.
- Do not perform destructive git operations unless explicitly requested.
- Stage only relevant files.
- Avoid amending commits unless explicitly requested.

## Cursor And Copilot Rule Files
Checked during AGENTS generation:
- `.cursorrules`: not present.
- `.cursor/rules/`: not present.
- `.github/copilot-instructions.md`: not present.

If any of these files are added later, update this AGENTS.md to include and follow them.
