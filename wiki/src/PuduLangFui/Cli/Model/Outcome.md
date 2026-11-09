---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Outcome.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.88
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Outcome]
---

# PuduLangFui.Cli.Model.Outcome

## Purpose

What a command answers: an exit status and lines to print.

## Interface

### Signatures

```pudu
export type Outcome = { status: Int, lines: Array[Str], problems: Array[Str] }

export fn done(lines: Array[Str]) -> Outcome

export fn failed(problems: Array[Str]) -> Outcome
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Records and constructors.

## Negative Logic (Prohibited Paths)

- ❌ Do not print from a pure module.

## Edge Cases

- None.

## Depth

DEPTH 0.88 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Print as commands go?
  **A:** Answer lines. _Rationale:_ suites compare them. _Rejected:_ writing inside commands.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Dispatch/Router]] · [[src/PuduLangFui/Cli/Model/_MOC]]
