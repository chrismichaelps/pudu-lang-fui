---
title: Switch
description: An on and off control.
---

# Switch

An on and off control.

<div class="fui-preview"><a href="../previews/switch.html">Open the Switch preview</a></div>

## Installation

```bash
fui add switch
```

## Usage

```pudu
Field.oriented(Field.Horizontal, false).css("inline-size", "fit-content").holding([Switch.switcher("airplane", true), Label.label("airplane").says("Airplane mode")])
```

## API

```pudu
export fn switcher(name: Str, on: Bool = false, disabled: Bool = false) -> H.Node
export fn style() -> Css.Block
```
