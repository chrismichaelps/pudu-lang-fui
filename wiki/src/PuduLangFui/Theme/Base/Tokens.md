---
type: module
path: "@root/src/PuduLangFui/Theme/Base/Tokens.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Base.Tokens]
---

# PuduLangFui.Theme.Base.Tokens

## Purpose

The derive that turns any aspect record into custom-property declarations.

## Interface

### Signatures

```pudu
export trait Spelled {
  fn spelled(self: &Self) -> Str
}

impl Spelled for Str

impl Spelled for Color.Pair

export trait Tokens {
  fn tokens(self: &Self) -> Array[(Str, Str)]
}

export derive Tokens for T: Record
```

### Linkage

- **Requires:** [[src/PuduLangFui/Domain/Color]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. For each field, spell the name in kebab case, or use its `@token` attribute, and spell the value through `Spelled`.

## Negative Logic (Prohibited Paths)

- ❌ Do not read a field's value through a static call on its type (pudu-lang#457).

## Edge Cases

- A record with no fields answers nothing.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Hand-written lists or a derive?
  **A:** A derive. _Rationale:_ adding a field adds a token and nothing can be forgotten. _Rejected:_ one function per aspect.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/Elevation]] · [[src/PuduLangFui/Theme/Aspects/Iconography]] · [[src/PuduLangFui/Theme/Aspects/Motion]] · [[src/PuduLangFui/Theme/Aspects/Palette]] · [[src/PuduLangFui/Theme/Aspects/Shape]] · [[src/PuduLangFui/Theme/Aspects/Spacing]] · [[src/PuduLangFui/Theme/Aspects/Typography]] · [[src/PuduLangFui/Theme/Base/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
