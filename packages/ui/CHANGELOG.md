# @mts241alikhlash/ui

## 1.8.1

### Patch Changes

- Updated dependencies [8281596]
  - @mts241alikhlash/web-shared@1.3.1

## 1.8.0

### Minor Changes

- 3d6e32c: `ActionCell` menerima prop `items` (label, ikon, `destructive`, `disabled`, `onClick`) untuk aksi khusus di menu, ditampilkan sebelum Ubah dan Hapus.
- 3d6e32c: Bin `check-field-style` menandai field teks, pilihan, dan area teks yang memakai `FormLabel`; field harus memakai `FloatingField`.
  
  `FloatingLabelField`: label dan batas merah muncul untuk setiap kontrol (teks, area teks, pilihan, tanggal) saat ada error, tanpa bergantung pada `aria-invalid`.

### Patch Changes

- bd5654d: `check-card-overrides` melapor juga saat dijalankan lewat symlink `node_modules`; sebelumnya diam dan exit 0.

## 1.7.0

### Minor Changes

- 5c79867: CardHeader standard berlatar bg-muted/30, CardFooter mendapat prop standard dengan latar yang sama, dan bar tab pada CardTabs memakai latar itu juga. check-card-overrides ikut menandai latar yang ditimpa pada header dan footer. Tampilan bawaan tidak berubah.

## 1.6.0

### Minor Changes

- 2aa4426: DataTable menerima pinnedColumns untuk menempelkan beberapa kolom di kiri dan kanan tanpa saling menimpa. Tanpa prop, perilakunya sama seperti sebelumnya.

## 1.5.0

### Minor Changes

- 0a2c1ae: Card, CardHeader, CardTitle dan CardContent mendapat prop opt-in untuk satu standar tata letak; CardTabs, HorizontalStepper, AttachmentName dan formatAttachmentName baru; skrip check-card-overrides mencari class penimpa lama. Tampilan bawaan tidak berubah.

### Patch Changes

- Updated dependencies [0a2c1ae]
  - @mts241alikhlash/web-shared@1.3.0

## 1.4.1

### Patch Changes

- Updated dependencies [89faf31]
  - @mts241alikhlash/web-shared@1.2.0

## 1.4.0

### Minor Changes

- 63f145e: `Tabs` accepts `variant="line"`: a thin bottom border on the list and a thick primary underline on the active trigger, without the pill background, scrollable sideways on a phone. The default variant is unchanged.

## 1.3.1

### Patch Changes

- f8d0778: `DatePicker` takes an `id` and puts it on its trigger button, so a field label can point at it with `for`.

## 1.3.0

### Minor Changes

- 86a9719: Add `BackButton`, the one way a sub-page goes back to its parent: an outline icon button with `ArrowLeft`, 32px, whose `label` becomes the `aria-label` and tooltip. Pages place it left of the card title and handle `@click`.

## 1.2.1

### Patch Changes

- b038e22: `Badge` uses `rounded-md` instead of `rounded-full`, the same radius as buttons, inputs and selects.

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
