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
column("28rem", [Turn.turn("Fix the failing test", [H.p().says("Fixed in the fixture.")])])
```

## API

```pudu
export fn turn(asked: Str, reply: Array[H.Node]) -> H.Node
export fn style() -> Css.Block Css.block("turn", [Css.base("display: flex; flex-direction: column; gap: $space-4")]) }
```
