---
title: Turn
description: One person-and-agent exchange.
---

# Turn

One person-and-agent exchange.

<div class="fui-preview"><a href="../previews/turn.html">Open the Turn preview</a></div>

## Installation

```bash
fui add turn
```

## Usage

```pudu
column("30rem", [Turn.turn("How do I add a settings dialog?", [H.p().css("margin", "0").says("Run fui add dialog, then open it from the gear icon in the header.")])])
```

## API

```pudu
export fn turn(asked: Str, reply: Array[H.Node]) -> H.Node
export fn style() -> Css.Block Css.block("turn", [Css.base("display: flex; flex-direction: column; gap: $space-4")]) }
```
