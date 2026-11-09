# Website

The documentation site. `Previews.pudu` renders one live preview and one reference page for every
item in the package, reading the item's description and exported surface from its source file, so a
page cannot drift from the component it documents.

```bash
pudu run website/Previews.pudu
website/build.sh ../pudu-lang-docgen
```

| Path | Purpose |
| --- | --- |
| `Previews.pudu` | Demonstrations of every item, and the generator for `docs/components`, `docs/elements`, `docs/blocks`, and `docs/previews`. |
| `Finish.pudu` | Colors every code sample and folds each preview into its page after the site is built. |
| `docs/index.md` | The home page. |
| `docs/guides/` | Written guides. |
| `docgen.json` | Site configuration. |
| `template/public/` | The site's stylesheet and the script that sizes previews. |
