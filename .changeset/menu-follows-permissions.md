---
'@mts241alikhlash/web-shared': minor
---

The sidebar menu now follows permissions only. `SUPER_ADMIN` no longer sees every item regardless of its permissions: an item shows exactly when the user holds its `requiredPermission` (or one of `requiredAnyPermission`), the same rule the router guards and `can()` use, so a visible menu item always opens. The super admin role keeps working because it is granted every permission code.
