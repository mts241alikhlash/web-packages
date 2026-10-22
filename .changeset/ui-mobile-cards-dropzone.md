---
'@mts241alikhlash/ui': minor
---

Phone cards for `DataTable`, a shared file drop area and a few standards.

- `DataTable` gets `mobile="cards"` and `rowClickable`: on phones every row becomes a card (title column, label and value rows, row actions, optional select cell at the left). Column meta adds `mobile` (`'hide'` or `'title'`), `mobileLabel` and `mobileValue`. New slots `mobile-toolbar`, `mobile-filter`, `mobile-chips` and `empty`; the phone toolbar keeps the filter centered and the footer is one row.
- New `FileDropzone`: click or drop a file, shows the chosen file name or a removable row, and reports `change` with the native event.
- Card header and footer (`standard`), dialog header and footer, line tabs and table heads share the 32 px control token; card title `md` uses the control text size; `CardContent standard` is `p-4`.
- Every radius step above `md` now maps to `md`, so cards, dialogs and badges use the same 8 px corner; the sidebar inset follows.
- The selection check moves to the left in `Select`, `Combobox`, `AppCombobox` and the dropdown and context menus.
- Tooltip text wraps with `text-pretty` so the box fits the text.
- The floating field label zone is 12 px (was 20 px), so fields sit closer to the content above them.
