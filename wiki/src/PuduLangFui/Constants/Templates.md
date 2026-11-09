---
type: module
path: "@root/src/PuduLangFui/Constants/Templates.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.66
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Templates]
---

# PuduLangFui.Constants.Templates

## Purpose

The source text the generator writes for a new project and a new component.

## Interface

### Signatures

```pudu
export const THEME: Array[Str]

export const COMPONENT: Array[Str]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Lines of text with `__NAME__` placeholders.

## Negative Logic (Prohibited Paths)

- ❌ Do not build source by concatenation in commands.

## Edge Cases

- None.

## Depth

DEPTH 0.66 (MEDIUM). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** A template language?
  **A:** Placeholder replacement. _Rationale:_ nothing conditional is needed. _Rejected:_ a templating engine.

## Referenced by

[[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Constants/_MOC]]
