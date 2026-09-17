# 241 Web Packages

Publishes the shared frontend packages for 241 Apps, a school platform:
`@mts241alikhlash/ui` (Vue 3 component library, built on reka-ui and
Tailwind) and `@mts241alikhlash/web-shared` (framework-agnostic utilities).
Both are installed as ordinary npm dependencies from GitHub Packages by all
seven web apps — never vendored or copied.

`packages/platform` and `packages/reference-data` are deliberately **not**
published from here: each app keeps its own copy, aliased directly into its
build, so no import statement needs to change when either is edited locally.

Versioned and released with [Changesets](https://github.com/changesets/changesets):

```bash
pnpm changeset          # record a change
# merge the generated "Release" PR to publish
```

```bash
pnpm install
pnpm run check           # typecheck every package
```
