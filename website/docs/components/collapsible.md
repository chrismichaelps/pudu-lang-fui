---
title: Collapsible
description: Content opened and closed natively.
---

# Collapsible

Content opened and closed natively.

<div class="fui-preview"><a href="../previews/collapsible.html">Open the Collapsible preview</a></div>

## Installation

```bash
fui add collapsible
```

## Usage

```pudu
Collapsible.collapsible(true).css("inline-size", "20rem").holding([Collapsible.trigger().says("Three repositories"), Collapsible.content().says("pudu-lang, pudu-lang-fui, pudu-lang-docgen")])
```

## API

```pudu
export fn collapsible(open: Bool = false) -> H.Node
export fn trigger() -> H.Node
export fn content() -> H.Node
export fn style() -> Css.Block
```
