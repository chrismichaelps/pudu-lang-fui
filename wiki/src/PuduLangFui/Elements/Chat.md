---
type: module
path: "@root/src/PuduLangFui/Elements/Chat.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Chat]
---

# PuduLangFui.Elements.Chat

## Purpose

The thread and the field under it.

## Interface

### Signatures

```pudu
export fn chat(caption: Str, turns: Array[H.Node], prompt: H.Node) -> H.Node

export fn header(title: Str, note: Str, actions: Array[H.Node] = []) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/MessageScroller]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A message scroller over the turns, the prompt below.

## Negative Logic (Prohibited Paths)

- ❌ Do not scroll with a script.

## Edge Cases

- An empty thread still pins the prompt to the bottom.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who owns the height?
  **A:** The caller, by placing it in a sized region. _Rationale:_ layouts differ. _Rejected:_ fixed viewport height.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
