---
title: Checkpoint
description: A point to return to.
---

# Checkpoint

A point to return to.

<div class="fui-preview"><a href="../previews/checkpoint.html">Open the Checkpoint preview</a></div>

## Installation

```bash
fui add checkpoint
```

## Usage

```pudu
column("24rem", [Checkpoint.checkpoint("Checkpoint 2", "#")])
```

## API

```pudu
export fn checkpoint(caption: Str, action: Str) -> H.Node
export fn style() -> Css.Block Css.block("checkpoint", [Css.base("display: block; margin: 0")]) }
```
