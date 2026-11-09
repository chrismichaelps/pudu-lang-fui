---
type: module
path: "@root/src/PuduLangFui/Cli/Dispatch/Router.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Cli.Dispatch.Router]
---

# PuduLangFui.Cli.Dispatch.Router

## Purpose

Runs a command line.

## Interface

### Signatures

```pudu
export type Command = { summary: Str, run: fn(&Context.Context) -> Outcome.Outcome }

export fn usage() -> Array[Str]

export fn run(arguments: &Array[Str], workingDirectory: Str) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. A factory table maps each command word to its run function and summary
2. unknown words print usage.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the command word.

## Edge Cases

- Aliases are table entries.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** One file per command?
  **A:** Yes, behind one table. _Rationale:_ adding a command is one line here. _Rejected:_ one large module.

## Referenced by

[[src/PuduLangFui/Cli/Dispatch/_MOC]] · [[tools/Fui]]
