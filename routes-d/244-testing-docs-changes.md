# Issue #244 — Create a comprehensive testing guide for docs changes

Working draft for the docs change requested in issue #244.

## Planned doc location

- `docs/guides/testing-docs-changes.mdx`

## Scope

- Cover content build, link, sidebar, format, lint, and full build checks
- Document visual and search smoke tests
- Note failure remediation per check type
- Distinguish from Vitest guide at `docs/guides/testing.mdx`

## Validation

- `pnpm build:content`
- `pnpm check:links`
