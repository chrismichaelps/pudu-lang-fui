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
Turn.turn("Why is the checkout deploy so slow?", [Reasoning.reasoning(Reasoning.Finished, H.p().css("margin", "0").says("The deploy log has three phases. Install takes 38 seconds and the next build 52, both normal. Image optimization takes three and a half minutes because its cache key includes the commit hash."), "for 5s", true), H.p().css("margin", "0").says("Image optimization is the bottleneck. Key its cache on the lockfile and the image directory.")]).css("inline-size", "30rem")
```

## API

```pudu
export type State = Thinking | Finished
export fn reasoning(state: State, thought: H.Node, duration: Str = "", open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
