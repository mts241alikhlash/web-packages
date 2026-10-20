---
"@mts241alikhlash/ui": minor
---

Restyle the sidebar to the new design: inactive items and sub-items are muted until active, the inset variant becomes a bordered 12px card, NavUser uses a muted email, chevron and avatar, and sidebar tooltips are more compact. Apps get the full look by setting `--sidebar` to `--background` and using `variant="inset"` with `SidebarInset`.

Breadcrumb is smaller: 12px text, 4px gaps, a 12px separator and a medium-weight current page. Added `SidebarToggle`, a "Collapse sidebar" row for the bottom of the sidebar that replaces the topbar `SidebarTrigger` on desktop.
