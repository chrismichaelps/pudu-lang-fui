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
column("20rem", [Textarea.textarea("message").placeholder("Type your message here.")])
```

## API

```pudu
/// A text area with the given name, identified by that name.
export fn textarea(name: Str, invalid: Bool = false) -> H.Node

/// The styles of a text area.
export fn style() -> Css.Block
```
