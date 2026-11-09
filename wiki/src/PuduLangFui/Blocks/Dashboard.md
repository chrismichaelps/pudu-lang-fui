---
type: module
path: "@root/src/PuduLangFui/Blocks/Dashboard.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Blocks.Dashboard]
---

# PuduLangFui.Blocks.Dashboard

## Purpose

An application home with sidebar, stats, chart, and table.

## Interface

### Signatures

```pudu
export type Stat =

export type Link =

export fn stat(caption: Str, figure: Str) -> Stat

export fn link(caption: Str, target: Str, active: Bool = false) -> Link

export fn linked(glyph: Icon.Glyph, caption: Str, target: Str, active: Bool = false) -> Link

export fn dashboard(title: Str, links: Array[Link], stats: Array[Stat], trend: Array[Chart.Series], content: H.Node) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Patterns/Chart]] · [[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Composition only.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Narrow windows overlay the sidebar.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Real data?
  **A:** Parameters. _Rationale:_ a block is a starting point. _Rejected:_ hard-coded figures.

## Referenced by

[[src/PuduLangFui/Blocks/_MOC]] · [[src/PuduLangFui/Catalog/Catalog]]
