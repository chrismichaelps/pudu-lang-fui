---
title: Input
description: A single-line field.
---

# Input

A single-line field.

<div class="fui-preview"><a href="../previews/input.html">Open the Input preview</a></div>

## Installation

```bash
fui add input
```

## Usage

```pudu
column("18rem", [Input.input("name", Input.props()).placeholder("Name")])
```

## API

```pudu
export type Props = kind: Str, invalid: Bool, disabled: Bool, required: Bool }
export fn props() -> Props
export trait Configuring
export fn input(name: Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
