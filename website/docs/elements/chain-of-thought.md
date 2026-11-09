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
Turn.turn("Why is the checkout deploy so slow?", [ChainOfThought.chainOfThought("Researched in 3 steps", [Trace.step(Trace.Done, "Read the build log"), Trace.step(Trace.Done, "Compared the last two deploys"), Trace.step(Trace.Done, "Traced the slow step")], true), H.p().css("margin", "0").says("Image optimization takes almost four minutes because its cache key includes the commit hash. Key it on the image directory instead.")]).css("inline-size", "30rem")
```

## API

```pudu
export fn chainOfThought(summary: Str, steps: Array[H.Node], open: Bool = false) -> H.Node
export fn style() -> Css.Block Css.block("chain-of-thought", [Css.base("display: block")]) }
```
