---
title: Textarea
description: Multi-line text that grows.
---

# Textarea

Multi-line text that grows.

<div class="fui-preview"><a href="../previews/textarea.html">Open the Textarea preview</a></div>

## Installation

```bash
fui add textarea
```

## Usage

```pudu
column("20rem", [Textarea.textarea("message").placeholder("Message")])
```

## API

```pudu
export fn textarea(name: Str, invalid: Bool = false) -> H.Node
export fn style() -> Css.Block
```
