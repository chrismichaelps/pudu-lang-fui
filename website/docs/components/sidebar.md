---
title: Sidebar
description: An application shell's navigation.
---

# Sidebar

An application shell's navigation.

<div class="fui-preview"><a href="../previews/sidebar.html">Open the Sidebar preview</a></div>

## Installation

```bash
fui add sidebar
```

## Usage

```pudu
Sidebar.provider("demo-sidebar").css("margin", "calc(var(--fui-space-6) * -1)").css("inline-size", "calc(100% + var(--fui-space-12))").css("min-block-size", "100dvh").css("overflow", "hidden").holding([
  Sidebar.sidebar().holding([
    Sidebar.content().holding([Sidebar.group().holding([Sidebar.groupLabel().says("Planning"), Sidebar.menu().holding([
      Sidebar.menuItem().holding([Sidebar.menuButton("#", true).holding([Icon.icon(Icon.File), H.words("Documents")])]),
      Sidebar.menuItem().holding([Sidebar.menuButton("#").holding([Icon.icon(Icon.Calendar), H.words("Calendar")])])
    ])])])
  ]),
  Sidebar.inset().css("padding", "var(--fui-space-4)").holding([
    Sidebar.trigger("demo-sidebar"),
    H.div().css("display", "grid").css("grid-template-columns", "repeat(3, 1fr)").css("gap", "var(--fui-space-4)").css("margin-block-start", "var(--fui-space-4)").holding([Skeleton.skeleton().css("block-size", "8rem"), Skeleton.skeleton().css("block-size", "8rem"), Skeleton.skeleton().css("block-size", "8rem")]),
    Skeleton.skeleton().css("block-size", "20rem").css("margin-block-start", "var(--fui-space-4)")
  ])
])
```

## API

```pudu
/// Which edge the panel sits on.
export type Side = Start | End

/// How the panel is drawn.
export type Variant = Plain | Floating | Inset

/// An application shell; `collapsed` renders it closed.
export fn provider(id: Str, collapsed: Bool = false) -> H.Node

/// A control that opens and closes the sidebar `id`.
export fn trigger(id: Str) -> H.Node

/// What sits behind an open sidebar on a small screen; pressing it closes the sidebar `id`.
export fn overlay(id: Str) -> H.Node

/// The side panel.
export fn sidebar() -> H.Node

/// The sidebar's opening.
export fn header() -> H.Node

/// The sidebar's scrolling middle.
export fn content() -> H.Node

/// The sidebar's closing.
export fn footer() -> H.Node

/// A titled run of entries.
export fn group() -> H.Node

/// A group's caption.
export fn groupLabel() -> H.Node

/// The entries of a group.
export fn menu() -> H.Node

/// One entry.
export fn menuItem() -> H.Node

/// An entry's link; `active` marks the page being viewed.
export fn menuButton(target: Str, active: Bool = false) -> H.Node

/// A count at the end of an entry.
export fn menuBadge() -> H.Node

/// The main area beside the sidebar.
export fn inset() -> H.Node

/// The body of a group.
export fn groupContent() -> H.Node

/// A control at the end of a group's caption.
export fn groupAction() -> H.Node

/// A control at the end of an entry.
export fn menuAction() -> H.Node

/// A placeholder entry while the menu loads.
export fn menuSkeleton() -> H.Node

/// Entries nested under an entry.
export fn menuSub() -> H.Node

/// One nested entry.
export fn menuSubItem() -> H.Node

/// A nested entry's link.
export fn menuSubButton(target: Str, active: Bool) -> H.Node

/// A line between groups.
export fn separator() -> H.Node

/// The sidebar's edge, which toggles it when pressed.
export fn rail(id: Str) -> H.Node

/// A panel on a side, in a treatment, optionally shrinking to icons when collapsed.
export fn styled(side: Side, variant: Variant, icons: Bool) -> H.Node

/// The styles of a sidebar.
export fn style() -> Css.Block
```
