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
column("20rem", [Field.field().holding([Field.label("api-key").says("API Key"), Input.input("api-key", Input.props().kind("password")).placeholder("sk-..."), Field.description().says("Your API key is encrypted and stored securely.")])])
```

## API

```pudu
export type Props = { kind: Str, invalid: Bool, disabled: Bool, required: Bool }
export fn props() -> Props
export trait Configuring
export fn input(name: Str, given: Props) -> H.Node
export fn style() -> Css.Block
```
