---
title: Generator
description: Every command of fui.
---

# Generator

| Command | Does |
| --- | --- |
| `fui init [items] [--root R] [--preset P] [--force]` | Sets a project up, optionally adding items. `create` is the same. |
| `fui add [items] [--all] [--overwrite] [--dry-run] [--from dir]` | Copies items and what they need. Your edits are kept unless you pass `--overwrite`. |
| `fui new <name> [--layer primitive\|composite\|pattern]` | Scaffolds a component of your own. |
| `fui apply <preset>` | Applies a preset name or code. |
| `fui preset list\|decode <code>\|resolve` | Lists, decodes, or reports presets. |
| `fui view <items>` | Prints an item's source. |
| `fui search [-q text] [--json]` | Searches items. `list` is the same. |
| `fui docs <item> [--json]` | Prints an item's reference. |
| `fui diff [item]` | Compares your files with upstream. |
| `fui info [--json]` | Reports the project's setup. |
| `fui icons search\|add\|library\|libraries` | Finds and adds [icons](icons.md), singly or by whole library. |
| `fui doctor` | Audits tokens, contrast, and layout. |
| `fui build [--output path]` | Writes the registry index. |

Every command takes `--cwd <dir>`.
