---
type: module
path: "@root/src/PuduLangFui/Elements/Checkpoint.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Checkpoint]
---

# PuduLangFui.Elements.Checkpoint

## Purpose

A point in the conversation that can be returned to.

## Interface

### Signatures

```pudu
export fn checkpoint(caption: Str, action: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Marker]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A divider marker with a form posting a restore.

## Negative Logic (Prohibited Paths)

- ❌ Do not restore on a link
- ❌ it changes state.

## Edge Cases

- None.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Link or form?
  **A:** Form. _Rationale:_ restoring is a state change. _Rejected:_ a link.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
