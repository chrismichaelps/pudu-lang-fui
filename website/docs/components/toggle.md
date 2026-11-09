---
title: Toggle
description: A two-state button.
---

# Toggle

A two-state button.

<div class="fui-preview"><a href="../previews/toggle.html">Open the Toggle preview</a></div>

## Installation

```bash
fui add toggle
```

## Usage

```pudu
Toggle.toggle("bookmark", "on", false, Toggle.Outline).holding([Icon.sized(Icon.Bookmark, Icon.Small), H.words("Bookmark")])
```

## API

```pudu
export type Variant = Plain | Outline
export type Size = Small | Medium | Large
export fn sized(toggled: H.Node, size: Size) -> H.Node toggled.data("size", Core.spelled(size)) }
export fn toggle(name: Str, value: Str, pressed: Bool = false, variant: Variant) -> H.Node
export fn style() -> Css.Block
```
