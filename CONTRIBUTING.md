# Contributing to pudu-lang-fui

The wiki vault under `wiki/` is the source of truth. Read `wiki/00-INDEX.md`,
`wiki/architecture/SPECIFICATION.md`, and the grammar page before changing code, and write or
update a module's mirrored page under `wiki/src/` before its code.

## Branches

- `main` holds released versions only. It changes through a pull request from `dev`.
- `dev` is the integration branch.
- Work happens on `feature/<issue>-<slug>`, `fix/<issue>-<slug>`, or `docs/<issue>-<slug>`, branched
  from `dev` and merged back through a pull request.

## Commits

Semantic commits that name the issue: `feat(button): add a hover treatment refs #12`. Types are
`feat`, `fix`, `perf`, `refactor`, `test`, `docs`, `ci`, and `chore`. Code, tests, and the matching
wiki pages move together.

## Code

- Folders are dependency layers, listed in `tools/Layers/Catalog.pudu`. A module imports only what
  its folder is allowed to.
- Magic values live in `Constants/`, helpers in `Utils/`.
- A closed set of kinds is dispatched through a `const` table, never a ladder of conditions.
- A component takes its props and answers an open node. Styles are a flat array of steps.
- Every style uses tokens and logical properties.
- No default argument other than a literal, and no method chain beyond about six links.
- Follow `wiki/architecture/CODE_STYLE.md` for spacing.
- Every file and exported type starts with a one-line `/** @Namespace.Entity.Role — intent */`
  anchor, and every function and constant carries a short `///` comment.
- No dead code. Keep files under 500 lines.

## Checks

```bash
pudu check $(find src test tools examples -name '*.pudu')
pudu fmt --check src test tools examples
pudu lint src test tools examples
pudu test test
pudu run tools/Layers.pudu
pudu test tools/LayersTest.pudu
```

Changes to logic also run mutation testing:

```bash
pudu run tools/Mutate.pudu --pure --threshold 80
```

## Pull requests

Open the pull request against `dev`, describe the behaviour and how it was verified, and link the
issue with `Closes #N`.
