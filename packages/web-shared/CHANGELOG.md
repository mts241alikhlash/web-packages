# @mts241alikhlash/web-shared

## 1.2.0

### Minor Changes

- 89faf31: The sidebar menu now follows permissions only. `SUPER_ADMIN` no longer sees every item regardless of its permissions: an item shows exactly when the user holds its `requiredPermission` (or one of `requiredAnyPermission`), the same rule the router guards and `can()` use, so a visible menu item always opens. The super admin role keeps working because it is granted every permission code.

## 1.1.0

### Minor Changes

- 3532c8e: Icons come from `@lucide/vue`, which replaces the deprecated `lucide-vue-next`. web-shared now depends on `@lucide/vue` itself instead of asking apps for a `lucide-vue-next` peer.

## 1.0.0

### Major Changes

- First stable release.
