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
export type Kind = One | Many
export type Variant = Plain | Outline
export fn group(caption: Str) -> H.Node styled(caption, Plain) }
export fn styled(caption: Str, variant: Variant) -> H.Node
export fn item(kind: Kind, name: Str, value: Str, pressed: Bool = false) -> H.Node
export fn style() -> Css.Block
```
