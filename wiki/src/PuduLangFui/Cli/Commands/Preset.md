---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Preset.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Preset]
---

# PuduLangFui.Cli.Commands.Preset

## Purpose

Lists, decodes, and resolves presets.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Theme/Presets/Preset]]

## Algorithm

1. A subcommand table dispatches.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the subcommand.

## Edge Cases

- Unknown subcommands print usage.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** JSON?
  **A:** `--json` on decode. _Rationale:_ scripts need it. _Rejected:_ text only.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
