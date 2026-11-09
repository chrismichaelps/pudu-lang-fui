---
type: module
path: "@root/src/PuduLangFui/Blocks/Signup.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Blocks.Signup]
---

# PuduLangFui.Blocks.Signup

## Purpose

An account creation section.

## Interface

### Signatures

```pudu
export fn signup(action: Str, errors: &Array[Str]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A card with name, email, and password fields.

## Negative Logic (Prohibited Paths)

- ❌ Do not post secrets with GET.

## Edge Cases

- None.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Confirm password?
  **A:** No. _Rationale:_ a reveal control is better than retyping. _Rejected:_ a second field.

## Referenced by

[[src/PuduLangFui/Blocks/_MOC]] · [[src/PuduLangFui/Catalog/Catalog]]
