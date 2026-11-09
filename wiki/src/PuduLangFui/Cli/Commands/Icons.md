---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Icons.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Icons]
---

# PuduLangFui.Cli.Commands.Icons

## Purpose

Searches every icon library, and adds named icons to the project.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Icons]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. A table dispatches the subcommand
2. adding groups names by library, fetches each group, and merges with what the owned module records.

## Negative Logic (Prohibited Paths)

- ❌ Do not write when any requested icon is missing.

## Edge Cases

- The service being unreachable answers a plain refusal.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why one module for all icons?
  **A:** A page imports one thing and names icons as text. _Rationale:_ the table holds only what was added. _Rejected:_ one module per icon.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
