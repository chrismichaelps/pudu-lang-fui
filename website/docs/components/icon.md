---
title: Icon
description: A built-in stroke icon set.
---

# Icon

A built-in stroke icon set.

<div class="fui-preview"><a href="../previews/icon.html">Open the Icon preview</a></div>

## Installation

```bash
fui add icon
```

## Usage

```pudu
H.div().css("display", "flex").css("gap", "var(--fui-space-3)").holding([Icon.icon(Icon.Search), Icon.icon(Icon.Settings), Icon.icon(Icon.User), Icon.sized(Icon.Star, Icon.Large)])
```

## API

```pudu
export type Glyph
export type Size = Small | Medium | Large
export const GLYPHS: Map[Str, Str] = mapOf([
export fn icon(glyph: Glyph) -> H.Node
export fn sized(glyph: Glyph, size: Size) -> H.Node
export fn style() -> Css.Block
```
