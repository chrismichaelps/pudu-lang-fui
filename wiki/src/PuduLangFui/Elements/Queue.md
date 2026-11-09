---
type: module
path: "@root/src/PuduLangFui/Elements/Queue.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Queue]
---

# PuduLangFui.Elements.Queue

## Purpose

An agent's todo list, split into left and done.

## Interface

### Signatures

```pudu
export type Entry = { title: Str, done: Bool }

export fn entry(title: Str, done: Bool = false) -> Entry

export fn queue(entries: Array[Entry]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Partition the entries and write two traces.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- An empty section is omitted.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Sort?
  **A:** Keep the given order. _Rationale:_ the agent's order carries meaning. _Rejected:_ alphabetical.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
