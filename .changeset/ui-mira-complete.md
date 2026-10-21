---
'@mts241alikhlash/ui': minor
---

Align the components with shadcn-vue's `mira` style and add the shared pieces the apps were hand-rolling.

- Mira values from `style-mira.css`: card (`rounded-lg`, `ring-1`, `gap-4 py-4`, `size="sm"`), badge pill, dialog (`sm:max-w-sm`, ghost icon close button), table head `h-10`, sheet `p-6`, popover, command, alert dialog, menus (`rounded-lg`, check on the right), breadcrumb, pagination, field, tabs (`default` is the pill list, `line` keeps the underline), text and icon sizes. Selects and inputs use `text-sm` below `md`.
- New `DialogContent size="md" | "xl"`, `DialogHeader standard`, `DialogFooter standard`, `DialogBody` and the `dialog-body` utility.
- New `DateRangePicker` and `FormattedNumberInput` (`prefix`, `suffix`, `thousands`, `numeric`, `max-digits`).
- `DataTable`: `header-left` slot, rows per page moved to the footer (three columns on `lg`), tighter gaps, `meta: { strong: true }` for the main column, outline pagination for the active page.
- `FloatingLabelField`: label and text align, filled text sits lower, rules target `role="combobox"`.
- Toasts, tabs, select items and the pagination icon buttons follow the Mira sizes.
