# @mts241alikhlash/web-shared

## 0.1.1

### Patch Changes

- 54e3f1c: Fix `./*` export wildcard so deep subpath imports (e.g. `@mts241alikhlash/web-shared/utils/error-handler`) resolve under TypeScript's `bundler` module resolution. The previous `"./*": "./src/*"` target had no extension, which TypeScript could not reliably resolve for non-`index.ts` files; also adds an explicit `./env.d.ts` export entry.
