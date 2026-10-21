# @mts241alikhlash/ui

## 1.10.1

### Patch Changes

- 5def10f: `DateRangePicker` passes its attributes (`aria-label`, `aria-invalid`, `id` from `FormControl`) to the trigger button.

## 1.10.0

### Minor Changes

- 4a1176a: Align the components with shadcn-vue's `mira` style and add the shared pieces the apps were hand-rolling.
  
  - Mira values from `style-mira.css`: card (`rounded-lg`, `ring-1`, `gap-4 py-4`, `size="sm"`), badge pill, dialog (`sm:max-w-sm`, ghost icon close button), table head `h-10`, sheet `p-6`, popover, command, alert dialog, menus (`rounded-lg`, check on the right), breadcrumb, pagination, field, tabs (`default` is the pill list, `line` keeps the underline), text and icon sizes. Selects and inputs use `text-sm` below `md`.
  - New `DialogContent size="md" | "xl"`, `DialogHeader standard`, `DialogFooter standard`, `DialogBody` and the `dialog-body` utility.
  - New `DateRangePicker` and `FormattedNumberInput` (`prefix`, `suffix`, `thousands`, `numeric`, `max-digits`).
  - `DataTable`: `header-left` slot, rows per page moved to the footer (three columns on `lg`), tighter gaps, `meta: { strong: true }` for the main column, outline pagination for the active page.
  - `FloatingLabelField`: label and text align, filled text sits lower, rules target `role="combobox"`.
  - Toasts, tabs, select items and the pagination icon buttons follow the Mira sizes.

## 1.9.0

### Minor Changes

- a368181: Restyle the sidebar to the new design: inactive items and sub-items are muted until active, the inset variant becomes a bordered 12px card, NavUser uses a muted email, chevron and avatar, and sidebar tooltips are more compact. Apps get the full look by setting `--sidebar` to `--background` and using `variant="inset"` with `SidebarInset`.
  
  Breadcrumb is smaller: 12px text, 4px gaps, a 12px separator and a medium-weight current page. Added `SidebarToggle`, a "Collapse sidebar" row for the bottom of the sidebar that replaces the topbar `SidebarTrigger` on desktop.
  
  The sidebar follows the compact Mira scale: menu items h-7 with 12px text and 14px icons, sub-items h-6, group labels h-7, collapsed buttons size-7. Sidebar tooltips keep the default padding.
  
  `NavUser` gets a `compact` prop (avatar-only trigger, menu opens downward) for a topbar profile menu, and `Sidebar` reads an optional `--sidebar-offset` CSS variable so it can sit below a full-width header.
  
  Added `AppSwitcher`, a dropdown that switches between apps by logo and name. The mobile sidebar sheet is rounded for the `inset` and `floating` variants. Tab triggers and sidebar menu buttons keep a solid focus outline.
- a368181: Restyle every shadcn-vue component to the Mira scale and ship the theme as `@mts241alikhlash/ui/theme.css`. An app replaces the copy of its tokens in `src/style.css` with `@import '@mts241alikhlash/ui/theme.css';` (after `tailwindcss` and `tw-animate-css`). The theme holds the colors (primary is now the logo navy `oklch(0.37 0.105 261)`, ring and sidebar primary follow it, `--sidebar` follows `--background`, new `--brand-gold`, and `--destructive` is a deeper red `oklch(0.48 0.17 27)` that sits next to the navy, 7:1 against white), the radius scale and new size tokens: `--control-h-xs|sm|md|lg` (20, 24, 28, 32 px on desktop, 24, 32, 36, 40 px below `md`), `--text-control` and `--icon-control`. Components read them with a Mira fallback, so an app still on its old `style.css` renders at the Mira desktop sizes everywhere, phones included (28 px controls). Bump `ui` and switch `style.css` to `theme.css` in the same app change so phones get the larger sizes.
  
  Tabs have one style, the underline strip: `variant` is still accepted, but `default` and `line` now render the same (the pill style is gone). The `FloatingField` label floats 0.5 rem from the left edge, away from the rounded corner, and rests in line with the text; its floated line height is 12 px so it no longer covers the first pixels of the value.
  
  Visible changes: buttons, inputs, selects and tab strips are 28 px high on desktop (was 36 to 40 px) with 12 px text (inputs and textareas stay 16 px on phones so iOS does not zoom), badges are 20 px high with the `rounded-sm` radius of the Mira `xs` button, the `ActionCell` menu is a plain compact dropdown (no fixed 190 px width, 12 px text rows), dialog padding goes from `p-6` to `p-4` and dialog titles from 18 px semibold to 14 px medium, dropdown rows are tighter, tables, alerts and helper text use the control text size, progress is a 4 px bar, buttons get a 2 px `ring-ring/30` on keyboard focus, while fields (input, textarea, select and the like) only change their border color, with no ring or shadow, also when invalid. `DatePicker` and `AppCombobox` triggers are transparent with the input border (no gray fill), icons in fields, menus, calendars and pagers use `--icon-control` (14 px, was 16 px), and a `DatePicker` inside a `FloatingField` hides its placeholder text while empty so it no longer overlaps the label. `FloatingField` and `FloatingLabelField` use the same 28 px control with a 10 px floated label. Fields stay transparent (no Mira fill). `Button` gets the `xs` and `icon-xs` sizes; destructive buttons and badges stay solid red and the outline button keeps the page background with a muted hover. `Dialog`, `AlertDialog` and `Popover` keep their default width. `SelectContent` keeps `position="popper"` and `Checkbox` keeps the indeterminate state.
  
  Added the shadcn-vue components that were missing: accordion, aspect-ratio, attachment, bubble, button-group, carousel, code-block, combobox, context-menu, drawer, empty, hover-card, input-group, input-otp, item, kbd, marker, menubar, message, message-scroller, navigation-menu, number-field, pin-input, questionnaire, radio-group, resizable, slider, spinner, tags-input, toggle, toggle-group and trace. They are exported from `@mts241alikhlash/ui/<name>` and from the package root, except `code-block`, which pulls `shiki` and is import-only by path. New dependencies: `embla-carousel-vue`, `shiki`, `vue-input-otp`.

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
