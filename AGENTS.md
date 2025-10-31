# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Nuxt 4 source (Vue 3 + TS). Key folders: `pages/` (routes, e.g., `index.vue`, `login.vue`), `components/` (PascalCase), `layouts/`, `middleware/`, `plugins/` (e.g., `api.ts`), `stores/` (Pinia), `assets/css` and `assets/img`, `utils/`.
- `public/`: Static files served as-is.
- `nuxt.config.ts`: App/modules, Tailwind, UI, ECharts config.
- `.nuxt/` and `.output/`: Generated/build artifacts — do not edit.
- Tooling: `eslint.config.mjs`, `tsconfig.json`, `package.json`, `pnpm-lock.yaml`.

## Build, Test, and Development Commands

- Install deps: `pnpm install` (Node 24+, see `devEngines`).
- Dev server: `pnpm dev` → http://localhost:3000
- Build production: `pnpm build` → emits to `.output/`.
- Preview build: `pnpm preview`.
- Generate static: `pnpm generate` (SSG use-cases).
- Lint/fix: `pnpm lint` (runs `oxlint` then `eslint --fix`).

## Coding Style & Naming Conventions

- Language: TypeScript + Vue SFCs using `<script setup lang="ts">`.
- Indentation: 2 spaces. Components in PascalCase; page files in kebab-case (e.g., `user-profile.vue`).
- Stores: Pinia composables named `useXxxStore` with string ids (e.g., `'user'`) under `app/stores/`.
- Styles: Tailwind via `app/assets/css/main.css`; prefer utility classes; use `@nuxt/ui` tokens when possible.
- Linting: `eslint-plugin-better-tailwindcss` enabled; address warnings before PRs.

## Testing Guidelines

- No test runner is configured yet. If adding tests, prefer Vitest + Vue Test Utils. Place specs alongside components as `Component.spec.ts` or under `app/**/__tests__/`.

## Commit & Pull Request Guidelines

- Commits: follow Conventional Commits seen in history (e.g., `feat: add login form`, `chore: update deps`). Keep subjects imperative and concise; add scope when helpful.
- PRs: include purpose, linked issues, screenshots for UI changes, and notes on breaking changes. Ensure `pnpm lint` passes and the app builds locally.

## Security & Configuration Tips

- Do not commit secrets. Use `.env` and read via Nuxt runtime config if needed.
- `$fetch` client is provided in `app/plugins/api.ts` (default `baseURL: '/'`); adjust per environment.
- Never edit `.nuxt/` directly; regenerate via `pnpm dev`/`pnpm build`.
