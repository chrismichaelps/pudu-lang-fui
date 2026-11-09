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
column("28rem", [
  Row.item(Row.Outline).holding([Row.content().holding([Row.title().says("Basic Item"), Row.description().says("A simple item with title and description.")]), Row.actions().holding([Button.button(Button.props().variant(Button.Outline).size(Button.Small)).says("Action")])]),
  Row.small(Row.Outline).holding([Row.media().holding([Icon.icon(Icon.BadgeCheck)]), Row.content().holding([Row.title().says("Your profile has been verified.")]), Row.actions().holding([Icon.sized(Icon.ChevronRight, Icon.Small)])])
])
```

## API

```pudu
/// How a row is drawn.
export type Variant = Plain | Outline | Muted

/// A row as a `div`.
export fn item(variant: Variant) -> H.Node

/// A row with tighter padding.
export fn small(variant: Variant) -> H.Node

/// A row built on the given element, such as a link.
export fn of(element: H.Node, variant: Variant) -> H.Node

/// The row's leading icon or image.
export fn media() -> H.Node

/// The row's text.
export fn content() -> H.Node

/// The row's headline.
export fn title() -> H.Node

/// The row's supporting text.
export fn description() -> H.Node

/// The row's trailing controls.
export fn actions() -> H.Node

/// Rows stacked together.
export fn group() -> H.Node

/// The row's top line, across its full width.
export fn header() -> H.Node

/// The row's bottom line, across its full width.
export fn footer() -> H.Node

/// A line between rows.
export fn separator() -> H.Node

/// The styles of a row.
export fn style() -> Css.Block
```
