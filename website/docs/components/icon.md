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
/// Every icon the set draws.
export type Glyph

/// How large an icon sits.
export type Size = Small | Medium | Large

/// Each glyph's drawing on a 24-unit square.
export const GLYPHS: Map[Str, Str] = mapOf([

/// A glyph at the size running text and controls use.
export fn icon(glyph: Glyph) -> H.Node

/// A glyph, hidden from assistive software, at the given size.
export fn sized(glyph: Glyph, size: Size) -> H.Node

/// The styles of an icon.
export fn style() -> Css.Block
```
