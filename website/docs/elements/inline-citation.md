---
title: Inline Citation
description: A source inside a sentence.
---

# Inline Citation

A source inside a sentence.

<div class="fui-preview"><a href="../previews/inline-citation.html">Open the Inline Citation preview</a></div>

## Installation

```bash
fui add inline-citation
```

## Usage

```pudu
H.p().holding([H.words("Fixed in the fixture"), InlineCitation.inlineCitation(1, "#", "The fixture", "Stale data caused the failure."), H.words(".")])
```

## API

```pudu
export fn inlineCitation(number: Int, target: Str, title: Str, summary: Str) -> H.Node
export fn style() -> Css.Block
```
