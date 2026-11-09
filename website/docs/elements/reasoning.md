---
title: Reasoning
description: Thinking as it streams.
---

# Reasoning

Thinking as it streams.

<div class="fui-preview"><a href="../previews/reasoning.html">Open the Reasoning preview</a></div>

## Installation

```bash
fui add reasoning
```

## Usage

```pudu
column("24rem", [Reasoning.reasoning(Reasoning.Thinking, H.p().says("Comparing the two approaches."))])
```

## API

```pudu
export type State = Thinking | Finished
export fn reasoning(state: State, thought: H.Node, duration: Str = "") -> H.Node
export fn style() -> Css.Block
```
