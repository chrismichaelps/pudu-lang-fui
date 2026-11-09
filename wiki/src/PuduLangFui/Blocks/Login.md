---
type: module
path: "@root/src/PuduLangFui/Blocks/Login.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Blocks.Login]
---

# PuduLangFui.Blocks.Login

## Purpose

A sign-in page section.

## Interface

### Signatures

```pudu
export fn login(action: Str, errors: &Array[Str]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A card with email and password fields and a submit.

## Negative Logic (Prohibited Paths)

- ❌ Do not post secrets with GET.

## Edge Cases

- Errors show through the field.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Own validation?
  **A:** None. _Rationale:_ the server decides. _Rejected:_ client checks.

## Referenced by

[[src/PuduLangFui/Blocks/_MOC]] · [[src/PuduLangFui/Catalog/Catalog]]
