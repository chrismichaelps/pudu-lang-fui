---
title: Drawer
description: A panel dragged from any edge.
---

# Drawer

A panel dragged from any edge.

<div class="fui-preview"><a href="../previews/drawer.html">Open the Drawer preview</a></div>

## Installation

```bash
fui add drawer
```

## Usage

```pudu
H.div().holding([
  Drawer.trigger("goal", Button.props().variant(Button.Outline)).says("Open Drawer"),
  Drawer.drawer("goal", "Move goal", Drawer.props().snapPoints(["0.4", "1"]), [
    Drawer.header().holding([Drawer.title().says("Move Goal"), Drawer.description().says("Set your daily activity goal.")]),
    H.div().css("display", "flex").css("flex-direction", "column").css("align-items", "center").css("gap", "var(--fui-space-2)").css("padding", "var(--fui-space-4)").holding([H.div().css("font-size", "4.5rem").css("font-weight", "700").css("line-height", "1").says("350"), H.div().css("font-size", "0.75rem").css("color", "var(--fui-muted-foreground)").says("CALORIES/DAY")]),
    Drawer.footer().holding([Button.button(Button.props()).says("Submit"), Drawer.close("goal", Button.props().variant(Button.Outline)).says("Cancel")])
  ])
])
```

## API

```pudu
/// Which edge a drawer comes from.
export type Direction = Bottom | Top | Start | End

/// How a drawer behaves.
export type Props =

/// A bottom modal drawer that can be dismissed, with a handle and no stops.
export fn props() -> Props

/// One method per prop.
export trait Configuring

/// A button that opens the drawer `id`; a non-modal drawer takes `opensBeside`.
export fn trigger(id: Str, given: Button.Props) -> H.Node

/// A button that opens the non-modal drawer `id`.
export fn opensBeside(id: Str, given: Button.Props) -> H.Node

/// A button that closes the drawer `id`.
export fn close(id: Str, given: Button.Props) -> H.Node

/// A drawer named for assistive software, holding the given content.
export fn drawer(id: Str, name: Str, given: Props, content: Array[H.Node]) -> H.Node

/// What the page sits in, when a drawer shrinks it.
export fn wrapper() -> H.Node

/// The drawer's opening.
export fn header() -> H.Node

/// The drawer's headline.
export fn title() -> H.Node

/// What the drawer is about.
export fn description() -> H.Node

/// The drawer's closing row.
export fn footer() -> H.Node

/// The styles of a drawer.
export fn style() -> Css.Block
```
