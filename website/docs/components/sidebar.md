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
export type Side = Start | End
export type Variant = Plain | Floating | Inset
export fn provider(id: Str, collapsed: Bool = false) -> H.Node
export fn trigger(id: Str) -> H.Node
export fn overlay(id: Str) -> H.Node
export fn sidebar() -> H.Node
export fn header() -> H.Node
export fn content() -> H.Node
export fn footer() -> H.Node
export fn group() -> H.Node
export fn groupLabel() -> H.Node
export fn menu() -> H.Node
export fn menuItem() -> H.Node
export fn menuButton(target: Str, active: Bool = false) -> H.Node
export fn menuBadge() -> H.Node
export fn inset() -> H.Node
export fn groupContent() -> H.Node
export fn groupAction() -> H.Node
export fn menuAction() -> H.Node
export fn menuSkeleton() -> H.Node
export fn menuSub() -> H.Node
export fn menuSubItem() -> H.Node
export fn menuSubButton(target: Str, active: Bool) -> H.Node
export fn separator() -> H.Node
export fn rail(id: Str) -> H.Node
export fn styled(side: Side, variant: Variant, icons: Bool) -> H.Node
export fn style() -> Css.Block
```
