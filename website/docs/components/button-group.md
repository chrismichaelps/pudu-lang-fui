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

ButtonGroup.group(ButtonGroup.Horizontal).holding([Button.button(outline).says("Archive"), Button.button(outline).says("Report"), Button.button(outline).label("More").holding([Icon.icon(Icon.ChevronDown)])])
```

## API

```pudu
export type Orientation = Horizontal | Vertical
export fn group(orientation: Orientation) -> H.Node
export fn text() -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
