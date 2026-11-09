---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Message.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.58
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Message]
---

# PuduLangFui.Components.Composites.Message

## Purpose

One message in a thread, with author and actions.

## Interface

### Signatures

```pudu
export type Side = Received | Sent

export fn message(side: Side) -> H.Node

export fn author(initials: Str, description: Str) -> H.Node

export fn content() -> H.Node

export fn actions() -> H.Node

export fn group() -> H.Node

export fn header() -> H.Node

export fn footer() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Avatar]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A row that reverses for the sender.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Long content wraps.

## Depth

DEPTH 0.58 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who owns alignment?
  **A:** The message. _Rationale:_ it knows the speaker. _Rejected:_ the thread.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Elements/Turn]]
