---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Apply.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Apply]
---

# PuduLangFui.Cli.Commands.Apply

## Purpose

Applies a preset to an initialized project.

## Interface

### Signatures

```pudu
export fn withPreset(text: Str, preset: Str) -> Str

export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Config]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Constants/Cli]] · [[src/PuduLangFui/Theme/Presets/Design]]

## Algorithm

1. Validate the name or code
2. rewrite the preset line of the owned theme and the config.

## Negative Logic (Prohibited Paths)

- ❌ Do not touch the rest of the theme file.

## Edge Cases

- An unknown preset changes nothing.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Rewrite how?
  **A:** One line. _Rationale:_ the project's tuning stays. _Rejected:_ regenerating the theme.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
