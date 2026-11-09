---
title: Toggle Group
description: Toggles allowing one or many.
---

# Toggle Group

Toggles allowing one or many.

<div class="fui-preview"><a href="../previews/toggle-group.html">Open the Toggle Group preview</a></div>

## Installation

```bash
fui add toggle-group
```

## Usage

```pudu
ToggleGroup.styled("Text formatting", ToggleGroup.Outline).css("gap", "var(--fui-space-2)").holding([ToggleGroup.item(ToggleGroup.Many, "format", "bold").label("Toggle bold").holding([Icon.sized(Icon.Bold, Icon.Small)]), ToggleGroup.item(ToggleGroup.Many, "format", "italic").label("Toggle italic").holding([Icon.sized(Icon.Italic, Icon.Small)]), ToggleGroup.item(ToggleGroup.Many, "format", "underline").label("Toggle underline").holding([Icon.sized(Icon.Underline, Icon.Small)])])
```

## API

```pudu
/// How many may be pressed.
export type Kind = One | Many

/// How the group's toggles are drawn.
export type Variant = Plain | Outline

/// Toggles pressed together.
export fn group(caption: Str) -> H.Node

/// Toggles pressed together, drawn the given way.
export fn styled(caption: Str, variant: Variant) -> H.Node

/// A toggle of the group `name`.
export fn item(kind: Kind, name: Str, value: Str, pressed: Bool = false) -> H.Node

/// The styles of a toggle group.
export fn style() -> Css.Block
```
