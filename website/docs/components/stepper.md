---
title: Stepper
description: A number moved by a step.
---

# Stepper

A number moved by a step.

<div class="fui-preview"><a href="../previews/stepper.html">Open the Stepper preview</a></div>

## Installation

```bash
fui add stepper
```

## Usage

```pudu
Stepper.stepper("guests", 2, 1, 8)
```

## API

```pudu
/// A stepper with the given name, between `minimum` and `maximum`, moving by `step`.
export fn stepper(name: Str, value: Int, minimum: Int = 0, maximum: Int = 100, step: Int = 1) -> H.Node

/// The styles of a stepper.
export fn style() -> Css.Block
```
