---
type: module
path: "@root/src/PuduLangFui/Elements/Reasoning.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Reasoning]
---

# PuduLangFui.Elements.Reasoning

## Purpose

The agent's thinking as it streams.

## Interface

### Signatures

```pudu
export type State = Thinking | Finished

export fn reasoning(state: State, thought: H.Node, duration: Str = "") -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Primitives/Effects]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A table maps thinking and done to captions
2. thinking shimmers and renders open.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the state.

## Edge Cases

- The duration is optional.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Show while thinking?
  **A:** Open while thinking, closed after. _Rationale:_ it is interesting only in the moment. _Rejected:_ always open.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
