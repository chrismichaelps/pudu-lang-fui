---
title: Tooltip
description: A short hint on hover or focus.
---

# Tooltip

A short hint on hover or focus.

<div class="fui-preview"><a href="../previews/tooltip.html">Open the Tooltip preview</a></div>

## Installation

```bash
fui add tooltip
```

## Usage

```pudu
Tooltip.tooltip("Add to library", Button.button(Button.props().variant(Button.Outline)).says("Hover"))
```

## API

```pudu
export fn tooltip(hint: Str, control: H.Node) -> H.Node
export fn style() -> Css.Block
```
