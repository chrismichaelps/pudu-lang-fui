---
title: Button Group
description: Related buttons joined as one.
---

# Button Group

Related buttons joined as one.

<div class="fui-preview"><a href="../previews/button-group.html">Open the Button Group preview</a></div>

## Installation

```bash
fui add button-group
```

## Usage

```pudu
let outline = Button.props().variant(Button.Outline)
let square = outline.size(Button.IconMedium)

H.div().css("display", "flex").css("gap", "var(--fui-space-2)").holding([
  ButtonGroup.group(ButtonGroup.Horizontal).holding([Button.button(square).label("Go back").holding([Icon.icon(Icon.ArrowLeft)])]),
  ButtonGroup.group(ButtonGroup.Horizontal).holding([Button.button(outline).says("Archive"), Button.button(outline).says("Report")]),
  ButtonGroup.group(ButtonGroup.Horizontal).holding([Button.button(outline).says("Snooze"), Button.button(square).label("More options").holding([Icon.icon(Icon.More)])])
])
```

## API

```pudu
export type Orientation = Horizontal | Vertical
export fn group(orientation: Orientation) -> H.Node
export fn text() -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
