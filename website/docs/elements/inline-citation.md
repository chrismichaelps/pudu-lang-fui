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
column("30rem", [
  H.p().css("margin", "0").css("font-size", "var(--fui-text-sm)").css("line-height", "1.625").holding([H.words("A page streams a route in chunks, so it shows up before every request finishes "), InlineCitation.inlineCitation("pudu-lang.org", "#", "Streaming a page", "How a route is sent in chunks."), H.words(".")]),
  H.p().css("margin", "0").css("font-size", "var(--fui-text-sm)").css("line-height", "1.625").holding([H.words("A loading file does the same for a whole route segment "), InlineCitation.inlineCitation("guides", "#", "Loading states", "What a segment shows while it waits."), H.words(".")])
])
```

## API

```pudu
export fn inlineCitation(label: Str, target: Str, title: Str, summary: Str) -> H.Node
export fn style() -> Css.Block
```
