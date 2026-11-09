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
H.div().css("display", "flex").css("align-items", "center").css("gap", "var(--fui-space-12)").holding([
    Avatar.initials("CN", "Ada", Avatar.Medium),
    Avatar.initials("ER", "Grace", Avatar.Medium).holding([Avatar.badge().css("background", "var(--fui-success)")]),
    Avatar.group().holding([Avatar.initials("CN", "Ada", Avatar.Medium), Avatar.initials("LR", "Bob", Avatar.Medium), Avatar.initials("ER", "Grace", Avatar.Medium), Avatar.count("+3")])
  ])
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
