# @mts241alikhlash/ui

## 1.2.0

### Minor Changes

- 8444e80: Add `SearchInput`, the one search field for every list: a search icon, a 32px input that keeps the base text size so iOS does not zoom on focus, `type="search"` without the browser's clear button, an `aria-label` from `label`, and the placeholder "Cari". `DataTable`'s built-in `filter-column` field now renders it instead of a floating-label input.

## 1.1.0

### Minor Changes

- 3532c8e: Icons come from `@lucide/vue`, which replaces the deprecated `lucide-vue-next`. web-shared now depends on `@lucide/vue` itself instead of asking apps for a `lucide-vue-next` peer.

### Patch Changes

- Updated dependencies [3532c8e]
  - @mts241alikhlash/web-shared@1.1.0

## 1.0.1

### Patch Changes

- e239fa0: Update reka-ui and @unovis/vue to their latest patch releases.

## 1.0.0

### Major Changes

- First stable release.

### Patch Changes

- Updated dependencies
  - @mts241alikhlash/web-shared@1.0.0
