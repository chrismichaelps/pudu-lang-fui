---
type: module
path: "@root/src/PuduLangFui/Utils/Spelling.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Utils.Spelling]
---

# PuduLangFui.Utils.Spelling

## Purpose

Spellings between the code's PascalCase and camelCase and the kebab-case the markup and the generator use.

## Interface

### Signatures

```pudu
export fn kebab(name: Str) -> Str

export fn pascal(name: Str) -> Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Walk the characters
2. before an uppercase letter or a digit run that follows a letter, write a hyphen
3. lower every letter. Reverse by capitalizing each hyphen-separated piece.

## Negative Logic (Prohibited Paths)

- ❌ Do not split a run of digits.

## Edge Cases

- Empty text answers empty text. `Text2xl` is `text-2xl`.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should a choice's markup value be declared per variant?
  **A:** No, it comes from the variant's name. _Rationale:_ one spelling cannot drift from another. _Rejected:_ a table per sum type.

## Referenced by

[[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Theme/Base/Tokens]] · [[src/PuduLangFui/Theme/Presets/Preset]] · [[src/PuduLangFui/Utils/_MOC]]
