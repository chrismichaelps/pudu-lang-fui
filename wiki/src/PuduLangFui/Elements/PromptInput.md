---
type: module
path: "@root/src/PuduLangFui/Elements/PromptInput.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.PromptInput]
---

# PuduLangFui.Elements.PromptInput

## Purpose

A message field with attachments and a send button.

## Interface

### Signatures

```pudu
export type State = Idle | Running

export fn promptInput(action: Str, hint: Str, state: State, attachments: Array[H.Node] = []) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Textarea]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A form: a growing text area, attached files, and a send or stop button chosen by a table of states.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the state.

## Edge Cases

- Stop replaces send while running.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Enter to send?
  **A:** Native form behaviour only. _Rationale:_ a textarea needs newlines. _Rejected:_ a key handler.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
