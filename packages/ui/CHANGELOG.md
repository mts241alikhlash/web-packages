# @241/ui

## 0.3.0

### Minor Changes

- 112f142: Add `ErrorBoundary` component: catches descendant render/lifecycle errors and shows a full-screen fallback with a reload action instead of a blank page.

## 0.2.1

### Patch Changes

- Updated dependencies [54e3f1c]
  - @mts241alikhlash/web-shared@0.1.1

## 0.2.0

### Minor Changes

- 96bfac3: Add `SafeHtml` component (DOMPurify-based sanitized v-html renderer), ported from portal-web's local copy so all consumers can share the same sanitization allowlist.
