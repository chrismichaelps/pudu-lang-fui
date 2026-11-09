---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Invocation.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Invocation]
---

# PuduLangFui.Cli.Model.Invocation

## Purpose

A command line as positional words, flags, and options.

## Interface

### Signatures

```pudu
export type Invocation = { command: Str, words: Array[Str], flags: Set[Str], options: Map[Str, Str] }

export fn parse(arguments: &Array[Str]) -> Invocation

export fn has(invocation: &Invocation, flag: Str) -> Bool

export fn optionOr(invocation: &Invocation, name: Str, fallback: Str) -> Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. The first word is the command
2. a word starting with a dash is an option when the table says it takes a value, otherwise a flag.

## Negative Logic (Prohibited Paths)

- ❌ Do not read the process here.

## Edge Cases

- A value-taking option at the end takes no value.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Use `Std.Args`?
  **A:** A smaller parser. _Rationale:_ each command wants different words, and one table is simpler than a spec per command. _Rejected:_ twelve specs.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Dispatch/Router]] · [[src/PuduLangFui/Cli/Model/_MOC]]
