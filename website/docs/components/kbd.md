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
Kbd.group().holding([Kbd.key("⌘"), Kbd.key("K")])
```

## API

```pudu
export fn key(caption: Str) -> H.Node
export fn group() -> H.Node
export fn style() -> Css.Block
```
