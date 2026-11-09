# Security

Report a vulnerability through a private
[security advisory](https://github.com/chrismichaelps/pudu-lang-fui/security/advisories/new). Do not
open a public issue. Expect a first answer within a week.

## In scope

- Text a caller passes to a component being rendered as markup rather than escaped.
- The generator writing outside the project's source directory.
- A component's script acting on content it did not create.

## Out of scope

- Markup a caller deliberately passes through `.raw`, which is a named escape hatch.
- Destinations passed to `.href`; check untrusted ones with `hrefChecked`.
