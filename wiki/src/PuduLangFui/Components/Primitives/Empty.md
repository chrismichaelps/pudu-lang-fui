---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Empty.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.58
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Empty]
---

# PuduLangFui.Components.Primitives.Empty

## Purpose

What a view shows when it has nothing.

## Interface

### Signatures

```pudu
export fn empty() -> H.Node

export fn media() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn content() -> H.Node

export fn header() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Centered parts: media, title, description, content.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Works in any container.

## Depth

DEPTH 0.58 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should it pick a default message?
  **A:** No. _Rationale:_ an empty state says what to do next, which only the page knows. _Rejected:_ default copy.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
