# Issue #222 — Add a full search experience documentation and setup

Working draft for the docs change requested in issue #222.

## Planned doc location

- `docs/guides/search.mdx`

## Scope

- Describe client-side search via Contentlayer `allDocs` and `SearchDialog`
- Document configuration in `contentlayer.config.ts` and `src/app/docs/layout.tsx`
- Explain indexing requirements (`title`, `description`, MDX body under `docs/`)
- Include local verification steps (`pnpm build:content`, `pnpm dev`, Cmd/Ctrl+K)

## Validation

- `pnpm build:content`
- `pnpm check:links`
- Manual search smoke test in dev
