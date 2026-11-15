---
title: Chip
description: A compact label that may be chosen or removed.
---

# Chip

A compact label that may be chosen or removed.

<div class="fui-preview"><a href="../previews/chip.html">Open the Chip preview</a></div>

## Installation

```bash
fui add chip
```

## Usage

```pudu
H.div().css("display", "flex").css("flex-wrap", "wrap").css("gap", "var(--fui-space-2)").holding([
  Chip.chip().says("Draft"),
  Chip.choice("filter", "unread", true).says("Unread"),
  Chip.choice("filter", "flagged").says("Flagged"),
  Chip.chip().holding([H.words("Design"), Chip.remove("Remove Design")])
])
```

## API

```pudu
/// A chip that is only read.
export fn chip() -> H.Node

/// A chip of the group `name` that can be chosen.
export fn choice(name: Str, value: Str, chosen: Bool = false) -> H.Node

/// The button at a chip's end that removes it, named for assistive software.
export fn remove(caption: Str) -> H.Node

/// The styles of a chip.
export fn style() -> Css.Block
```
