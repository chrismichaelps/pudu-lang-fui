---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Kbd.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Kbd]
---

# PuduLangFui.Components.Primitives.Kbd

## Purpose

A keyboard key or chord.

## Interface

### Signatures

```pudu
export fn key(caption: Str) -> H.Node

export fn group() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `kbd` element
2. a group sets the gap.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- None.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Separate chord component?
  **A:** A `group` part. _Rationale:_ a chord is keys in a row. _Rejected:_ parsing `Ctrl+K` text.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
