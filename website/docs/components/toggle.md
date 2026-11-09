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
/// How a toggle is drawn.
export type Variant = Plain | Outline

/// How much room a toggle takes.
export type Size = Small | Medium | Large

/// A toggle of the given size.
export fn sized(toggled: H.Node, size: Size) -> H.Node

/// A toggle submitting `value` under `name` while pressed.
export fn toggle(name: Str, value: Str, pressed: Bool = false, variant: Variant) -> H.Node

/// The styles of a toggle.
export fn style() -> Css.Block
```
