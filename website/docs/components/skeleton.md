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
column("16rem", [Skeleton.skeleton().css("block-size", "1rem"), Skeleton.skeleton().css("block-size", "1rem").css("inline-size", "60%")])
```

## API

```pudu
export fn skeleton() -> H.Node
export fn style() -> Css.Block
```
