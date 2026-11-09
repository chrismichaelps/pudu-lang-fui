---
title: Chain Of Thought
description: A summary expanding into steps.
---

# Chain Of Thought

A summary expanding into steps.

<div class="fui-preview"><a href="../previews/chain-of-thought.html">Open the Chain Of Thought preview</a></div>

## Installation

```bash
fui add chain-of-thought
```

## Usage

```pudu
column("24rem", [ChainOfThought.chainOfThought("Thought through 2 steps", [line(Trace.Done, "Read the file"), line(Trace.Done, "Compared the results")], true)])
```

## API

```pudu
export fn chainOfThought(summary: Str, steps: Array[H.Node], open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
