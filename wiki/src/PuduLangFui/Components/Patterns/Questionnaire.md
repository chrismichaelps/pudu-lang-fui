---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Questionnaire.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Questionnaire]
---

# PuduLangFui.Components.Patterns.Questionnaire

## Purpose

Multi-step questions in one form.

## Interface

### Signatures

```pudu
export type Kind = Single | Multiple | Freeform

export type Question = { name: Str, prompt: Str, kind: Kind, choices: Array[Str], skippable: Bool }

export fn question(name: Str, prompt: Str, kind: Kind, choices: Array[Str]) -> Question

export fn questionnaire(questions: &Array[Question], step: Int, action: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Checkbox]] · [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Components/Primitives/RadioGroup]] · [[src/PuduLangFui/Components/Primitives/Textarea]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. The server renders the current question
2. a factory table maps its kind to a control
3. progress and navigation submit the form.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the kind.

## Edge Cases

- A skippable question offers skip.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Client steps?
  **A:** No, each step posts. _Rationale:_ answers survive and validate on the server. _Rejected:_ a client wizard.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
