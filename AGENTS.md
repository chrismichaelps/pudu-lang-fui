# Operating contract

Every change to this repository, by any contributor, human or automated, is governed by the vault
at `wiki/`. The local governance input `fmcf.md` sits at the repository root for local alignment.
It stays ignored and is never staged or committed. Its method is distilled into
[`wiki/architecture/SPECIFICATION.md`](wiki/architecture/SPECIFICATION.md), which is the shareable
statement of how this project is built.

## Re-anchor before acting

1. `wiki/00-INDEX.md` and the relevant maps of content.
2. `wiki/architecture/SPECIFICATION.md`.
3. The active page under `wiki/handoffs/`, if any.
4. `wiki/grammar/pudu.md` before writing Pudu.
5. The mirrored page under `wiki/src/` of every file in scope.

No source file is created or changed before its mirrored page is complete, including a resolved
Grill Log.

## Rules

- Follow `CONTRIBUTING.md` for branches, commits, and checks.
- Commits, pull requests, reviews, and documents name no tool that helped write them.
- No other design system or vendor technology is named anywhere in the repository.
- No dead code, no ASCII-art diagrams, and comments in the neutral voice the grammar page sets.
- Code and wiki match at the end of every change; update backlinks, maps of content, and
  `wiki/CHANGELOG.md`. Work left unfinished gets a handoff page with one exact next action.
