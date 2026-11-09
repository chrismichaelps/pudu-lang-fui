---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Chart.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.66
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Chart]
---

# PuduLangFui.Components.Patterns.Chart

## Purpose

Bar, line, area, and donut charts as inline SVG.

## Interface

### Signatures

```pudu
export type Kind = Bars | Lines | Areas | Donut | Pie

export type Series = { name: Str, values: Array[Float64] }

export fn series(name: Str, values: Array[Float64]) -> Series

export fn labelled(kind: Kind, caption: Str, labels: Array[Str], all: Array[Series]) -> H.Node

export fn chart(kind: Kind, caption: Str, all: Array[Series]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Utils/Numbers]]

## Algorithm

1. Columns grow from the baseline, lines and areas reveal from the start edge, and circles sweep clockwise, each once as the page loads.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the kind.

## Edge Cases

- Under reduced motion every drawing appears at rest.

## Depth

DEPTH 0.66 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Library?
  **A:** None; SVG on the server. _Rationale:_ no script. _Rejected:_ a canvas runtime.

## Referenced by

[[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
