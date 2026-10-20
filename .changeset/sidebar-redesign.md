---
"@mts241alikhlash/ui": minor
---

Restyle the sidebar to the new design: inactive items and sub-items are muted until active, the inset variant becomes a bordered 12px card, NavUser uses a muted email, chevron and avatar, and sidebar tooltips are more compact. Apps get the full look by setting `--sidebar` to `--background` and using `variant="inset"` with `SidebarInset`.

Breadcrumb is smaller: 12px text, 4px gaps, a 12px separator and a medium-weight current page. Added `SidebarToggle`, a "Collapse sidebar" row for the bottom of the sidebar that replaces the topbar `SidebarTrigger` on desktop.

The sidebar follows the compact Mira scale: menu items h-7 with 12px text and 14px icons, sub-items h-6, group labels h-7, collapsed buttons size-7. Sidebar tooltips keep the default padding.

`NavUser` gets a `compact` prop (avatar-only trigger, menu opens downward) for a topbar profile menu, and `Sidebar` reads an optional `--sidebar-offset` CSS variable so it can sit below a full-width header.

Added `AppSwitcher`, a dropdown that switches between apps by logo and name. The mobile sidebar sheet is rounded for the `inset` and `floating` variants. Tab triggers and sidebar menu buttons keep a solid focus outline.
