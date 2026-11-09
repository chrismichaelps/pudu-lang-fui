---
title: Hover Card
description: A preview shown over a link.
---

# Hover Card

A preview shown over a link.

<div class="fui-preview"><a href="../previews/hover-card.html">Open the Hover Card preview</a></div>

## Installation

```bash
fui add hover-card
```

## Usage

```pudu
HoverCard.hoverCard(Button.link("#", Button.props().variant(Button.Plain)).says("Hover Here"), H.div().holding([H.div().css("font-weight", "500").says("@pudu"), H.p().css("margin", "0").says("A statically typed language.")]))
```

## API

```pudu
/// A link with a card revealed on hover or keyboard focus.
export fn hoverCard(link: H.Node, card: H.Node) -> H.Node

/// The styles of a hover card.
export fn style() -> Css.Block
```
