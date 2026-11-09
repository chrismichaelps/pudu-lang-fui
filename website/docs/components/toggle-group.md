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
ToggleGroup.group("Alignment").holding([ToggleGroup.item(ToggleGroup.One, "align", "start", true).holding([H.words("Start")]), ToggleGroup.item(ToggleGroup.One, "align", "end").holding([H.words("End")])])
```

## API

```pudu
export type Kind = One | Many
export fn group(caption: Str) -> H.Node
export fn item(kind: Kind, name: Str, value: Str, pressed: Bool = false) -> H.Node
export fn style() -> Css.Block
```
