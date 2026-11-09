---
type: module
path: "@root/src/PuduLangFui/Elements/Turn.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Turn]
---

# PuduLangFui.Elements.Turn

## Purpose

One turn: the person's message and the agent's reply with its actions.

## Interface

### Signatures

```pudu
export fn turn(asked: Str, reply: Array[H.Node]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Message]] · [[src/PuduLangFui/Components/Primitives/Bubble]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A sent bubble, then a received message holding the steps and reply.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Reply may be empty while streaming.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Name?
  **A:** Turn, since Message is the component. _Rationale:_ one meaning per name. _Rejected:_ a second Message.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
