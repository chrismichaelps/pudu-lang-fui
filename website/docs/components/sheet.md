---
title: Sheet
description: A panel from an edge.
---

# Sheet

A panel from an edge.

<div class="fui-preview"><a href="../previews/sheet.html">Open the Sheet preview</a></div>

## Installation

```bash
fui add sheet
```

## Usage

```pudu
H.div().holding([
    Sheet.trigger("filters", Button.props().variant(Button.Outline)).says("Open"),
    Sheet.sheet("filters", "Filters", Sheet.End).holding([Sheet.header().holding([Sheet.title().says("Filters"), Sheet.description().says("Narrow the list.")]), Sheet.footer().holding([Sheet.close("filters", Button.props()).says("Close")])])
  ])
```

## API

```pudu
export type Side = Start | End | Top | Bottom
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn close(id: Str, given: Button.Props) -> H.Node
export fn sheet(id: Str, name: Str, side: Side) -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn footer() -> H.Node
export fn header() -> H.Node
export fn style() -> Css.Block
```
