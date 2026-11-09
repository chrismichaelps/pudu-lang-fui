---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Form.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Form]
---

# PuduLangFui.Components.Patterns.Form

## Purpose

Fields bound to refusal messages by name.

## Interface

### Signatures

```pudu
export type Problems = Map[Str, Array[Str]]

export fn clean() -> Problems

export fn form(action: Str) -> H.Node

export fn item(problems: &Problems, name: Str, caption: Str, control: H.Node, hint: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Each item looks its name up in the problems map
2. a field with messages marks its control invalid and lists them.

## Negative Logic (Prohibited Paths)

- ❌ Do not validate here.

## Edge Cases

- A field with no problems renders no error region.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Tie to one validator?
  **A:** No, a map of name to messages. _Rationale:_ any validator can produce one. _Rejected:_ importing a validator package.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
