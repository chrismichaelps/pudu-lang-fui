---
title: Drawer
description: A panel dragged on native scrolling.
---

# Drawer

A panel dragged on native scrolling.

<div class="fui-preview"><a href="../previews/drawer.html">Open the Drawer preview</a></div>

## Installation

```bash
fui add drawer
```

## Usage

```pudu
H.div().holding([
    Drawer.trigger("goal", Button.props().variant(Button.Outline)).says("Open drawer"),
    Drawer.drawer("goal", "Move goal", Drawer.props().snapPoints(["40dvh"]), [
        Drawer.header().holding([Drawer.title().says("Move goal"), Drawer.description().says("Drag down to settle, or further to dismiss.")]),
        Drawer.footer().holding([Button.button(Button.props()).says("Submit"), Drawer.close("goal", Button.props().variant(Button.Outline)).says("Cancel")])
      ])
  ])
```

## API

```pudu
export type Direction = Bottom | Top | Start | End
export type Props = direction: Direction, dismissible: Bool, scalesBackground: Bool, snapPoints: Array[Str], handle: Bool }
export fn props() -> Props
export trait Configuring
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn close(id: Str, given: Button.Props) -> H.Node
export fn drawer(id: Str, name: Str, given: Props, content: Array[H.Node]) -> H.Node
export fn wrapper() -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
