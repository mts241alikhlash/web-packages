# @mts241alikhlash/web-shared

## 1.3.1

### Patch Changes

- 8281596: Ejaan Amerika di nama test (`honours` menjadi `honors`).

## 1.3.0

### Minor Changes

- 0a2c1ae: Card, CardHeader, CardTitle dan CardContent mendapat prop opt-in untuk satu standar tata letak; CardTabs, HorizontalStepper, AttachmentName dan formatAttachmentName baru; skrip check-card-overrides mencari class penimpa lama. Tampilan bawaan tidak berubah.

## 1.2.0

### Minor Changes

- 89faf31: The sidebar menu now follows permissions only. `SUPER_ADMIN` no longer sees every item regardless of its permissions: an item shows exactly when the user holds its `requiredPermission` (or one of `requiredAnyPermission`), the same rule the router guards and `can()` use, so a visible menu item always opens. The super admin role keeps working because it is granted every permission code.

## 1.1.0

### Minor Changes

- 3532c8e: Icons come from `@lucide/vue`, which replaces the deprecated `lucide-vue-next`. web-shared now depends on `@lucide/vue` itself instead of asking apps for a `lucide-vue-next` peer.

## 1.0.0

### Major Changes

- First stable release.
