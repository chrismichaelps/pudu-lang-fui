---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/SectionHeader.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.SectionHeader]
---

# PuduLangFui.Components.Primitives.SectionHeader

## Purpose

A small heading over a group.

## Interface

### Signatures

```pudu
export fn header() -> H.Node

export fn title() -> H.Node

export fn action() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A row with the title at the start and an optional action at the end, aligned to the group's inset.

## Negative Logic (Prohibited Paths)

- ❌ Do not use it as a page title.

## Edge Cases

- A long title truncates before the action wraps.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** A heading level prop?
  **A:** No, level three. _Rationale:_ it always sits under a page or panel title. _Rejected:_ a level parameter.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
