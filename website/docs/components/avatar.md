---
title: Avatar
description: An image with initials behind.
---

# Avatar

An image with initials behind.

<div class="fui-preview"><a href="../previews/avatar.html">Open the Avatar preview</a></div>

## Installation

```bash
fui add avatar
```

## Usage

```pudu
H.div().css("display", "flex").css("gap", "var(--fui-space-4)").holding([Avatar.initials("AL", "Ada", Avatar.Medium), Avatar.initials("GH", "Grace", Avatar.Large), Avatar.group().holding([Avatar.initials("A", "Ada", Avatar.Small), Avatar.initials("B", "Bob", Avatar.Small), Avatar.count("+3")])])
```

## API

```pudu
export type Size = Small | Medium | Large
export fn avatar(source: Str, description: Str, letters: Str, size: Size) -> H.Node
export fn initials(text: Str, description: Str, size: Size) -> H.Node
export fn group() -> H.Node
export fn badge() -> H.Node
export fn count(text: Str) -> H.Node
export fn style() -> Css.Block
```
