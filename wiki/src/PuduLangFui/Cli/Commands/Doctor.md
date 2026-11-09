---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Doctor.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Doctor]
---

# PuduLangFui.Cli.Commands.Doctor

## Purpose

Audits a project.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Audit]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Theme/Audit/Contrast]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Presets/Preset]]

## Algorithm

1. Config reads
2. the preset passes contrast
3. every owned file names only known tokens and no physical properties.

## Negative Logic (Prohibited Paths)

- ❌ Do not change a file.

## Edge Cases

- Reports everything, then fails if anything was found.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Fail fast?
  **A:** Report all. _Rationale:_ one pass shows the whole job. _Rejected:_ first error only.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
