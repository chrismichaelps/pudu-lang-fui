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
export type Direction = Bottom | Top | Start | End
export type Props =
export fn props() -> Props
export trait Configuring
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn opensBeside(id: Str, given: Button.Props) -> H.Node
export fn close(id: Str, given: Button.Props) -> H.Node
export fn drawer(id: Str, name: Str, given: Props, content: Array[H.Node]) -> H.Node
export fn wrapper() -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
