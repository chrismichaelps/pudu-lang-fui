---
title: Skeleton
description: A placeholder while content loads.
---

# Skeleton

A placeholder while content loads.

<div class="fui-preview"><a href="../previews/skeleton.html">Open the Skeleton preview</a></div>

## Installation

```bash
fui add skeleton
```

## Usage

```pudu
H.div().css("display", "flex").css("align-items", "center").css("gap", "var(--fui-space-4)").holding([
  Skeleton.skeleton().css("inline-size", "3rem").css("block-size", "3rem").css("border-radius", "9999px"),
  H.div().css("display", "flex").css("flex-direction", "column").css("gap", "var(--fui-space-2)").holding([Skeleton.skeleton().css("block-size", "1rem").css("inline-size", "15.625rem"), Skeleton.skeleton().css("block-size", "1rem").css("inline-size", "12.5rem")])
])
```

## API

```pudu
/// A placeholder, sized by the caller with `.css` or a class.
export fn skeleton() -> H.Node

/// The styles of a placeholder.
export fn style() -> Css.Block
```
