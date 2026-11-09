---
title: Popover
description: Content floating beside its trigger.
---

# Popover

Content floating beside its trigger.

<div class="fui-preview"><a href="../previews/popover.html">Open the Popover preview</a></div>

## Installation

```bash
fui add popover
```

## Usage

```pudu
H.div().holding([
    Popover.opens(Button.button(Button.props().variant(Button.Outline)), "dimensions").says("Open popover"),
    Popover.content("dimensions", Popover.Below).holding([Popover.header().holding([Popover.title().says("Dimensions"), Popover.description().says("Set the dimensions for the layer.")]), Field.group().css("gap", "var(--fui-space-3)").holding([sizeField("width", "Width", "100%"), sizeField("max-width", "Max. width", "300px"), sizeField("height", "Height", "25px"), sizeField("max-height", "Max. height", "none")])])
  ])
```

## API

```pudu
export type Side = Above | Below | Start | End
export fn opens(control: H.Node, id: Str) -> H.Node control.at("popovertarget", id).anchors(id) }
export fn content(id: Str, side: Side) -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn style() -> Css.Block
```
