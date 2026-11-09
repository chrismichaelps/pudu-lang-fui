---
title: Card
description: A surface with named parts.
---

# Card

A surface with named parts.

<div class="fui-preview"><a href="../previews/card.html">Open the Card preview</a></div>

## Installation

```bash
fui add card
```

## Usage

```pudu
Card.card().css("inline-size", "22rem").holding([
    Card.header().holding([Card.title().says("Create project"), Card.description().says("Deploy your new project in one click.")]),
    Card.content().holding([Field.field().holding([Field.label("project").says("Name"), Input.input("project", Input.props()).placeholder("Name of your project")])]),
    Card.footer().css("justify-content", "space-between").holding([Button.button(Button.props().variant(Button.Outline)).says("Cancel"), Button.button(Button.props()).says("Deploy")])
  ])
```

## API

```pudu
export type Size = Regular | Compact
export fn card() -> H.Node sized(Regular) }
export fn sized(size: Size) -> H.Node
export fn header() -> H.Node
export fn title() -> H.Node
export fn titled(heading: H.Node) -> H.Node heading.slot("card-title") }
export fn description() -> H.Node
export fn action() -> H.Node
export fn content() -> H.Node
export fn footer() -> H.Node
export fn style() -> Css.Block
```
