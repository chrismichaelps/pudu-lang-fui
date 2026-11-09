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
/// How large an avatar sits.
export type Size = Small | Medium | Large

/// An avatar showing the image over the initials; a broken image reveals them.
export fn avatar(source: Str, description: Str, letters: Str, size: Size) -> H.Node

/// An avatar with initials alone, named for assistive software.
export fn initials(text: Str, description: Str, size: Size) -> H.Node

/// Avatars overlapping in a row.
export fn group() -> H.Node

/// A small status mark at the avatar's corner.
export fn badge() -> H.Node

/// A count of avatars not shown.
export fn count(text: Str) -> H.Node

/// The styles of an avatar.
export fn style() -> Css.Block
```
