---
title: Kbd
description: A key or a chord.
---

# Kbd

A key or a chord.

<div class="fui-preview"><a href="../previews/kbd.html">Open the Kbd preview</a></div>

## Installation

```bash
fui add kbd
```

## Usage

```pudu
H.div().css("display", "flex").css("flex-direction", "column").css("align-items", "center").css("gap", "var(--fui-space-4)").holding([
  Kbd.group().holding([Kbd.key("⌘"), Kbd.key("⇧"), Kbd.key("⌥"), Kbd.key("⌃")]),
  Kbd.group().holding([Kbd.key("Ctrl"), H.span().says("+"), Kbd.key("B")])
])
```

## API

```pudu
/// One key with the given caption.
export fn key(caption: Str) -> H.Node

/// Keys pressed together.
export fn group() -> H.Node

/// The styles of a key.
export fn style() -> Css.Block
```
