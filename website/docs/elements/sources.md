---
title: Sources
description: Links a reply used.
---

# Sources

Links a reply used.

<div class="fui-preview"><a href="../previews/sources.html">Open the Sources preview</a></div>

## Installation

```bash
fui add sources
```

## Usage

```pudu
Turn.turn("How do I start a project with pudu?", [H.p().css("margin", "0").says("Run pudu new and follow the prompts. It scaffolds the project and installs the dependencies."), Sources.sources([Sources.source("Installation | pudu-lang.org", "#"), Sources.source("Project layout | pudu-lang.org", "#"), Sources.source("The pudu command | guides", "#")], true)]).css("inline-size", "30rem")
```

## API

```pudu
export type Source = title: Str, target: Str }
export fn source(title: Str, target: Str) -> Source Source{title: title, target: target} }
export fn sources(all: Array[Source], open: Bool = false) -> H.Node
export fn style() -> Css.Block
```
