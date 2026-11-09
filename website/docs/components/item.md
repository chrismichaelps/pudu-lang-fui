---
title: Item
description: A row of media, text, actions.
---

# Item

A row of media, text, actions.

<div class="fui-preview"><a href="../previews/item.html">Open the Item preview</a></div>

## Installation

```bash
fui add item
```

## Usage

```pudu
Row.item(Row.Outline).css("inline-size", "24rem").holding([Row.content().holding([Row.title().says("Basic item"), Row.description().says("A simple item with a title and description.")]), Row.actions().holding([Button.button(Button.props().variant(Button.Outline).size(Button.Small)).says("Action")])])
```

## API

```pudu
export type Variant = Plain | Outline | Muted
export fn item(variant: Variant) -> H.Node of(H.div(), variant) }
export fn small(variant: Variant) -> H.Node of(H.div(), variant).data("size", "small") }
export fn of(element: H.Node, variant: Variant) -> H.Node element.slot("item").data("variant", Core.spelled(variant)) }
export fn media() -> H.Node
export fn content() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn actions() -> H.Node
export fn group() -> H.Node
export fn header() -> H.Node
export fn footer() -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
