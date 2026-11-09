---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Audit.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Audit]
---

# PuduLangFui.Cli.Model.Audit

## Purpose

Static checks over owned source: tokens that do not exist and physical properties.

## Interface

### Signatures

```pudu
export const PHYSICAL: Array[Str]

export fn audit(path: Str, source: Str, known: &Set[Str]) -> Array[Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Scan string literals' `$name` occurrences against the known tokens
2. scan for physical property names as whole words.

## Negative Logic (Prohibited Paths)

- ❌ Do not parse CSS.

## Edge Cases

- Words inside comments are ignored.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why physical properties?
  **A:** They break right-to-left layout. _Rationale:_ easy to catch, costly to find. _Rejected:_ review only.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Model/_MOC]]
