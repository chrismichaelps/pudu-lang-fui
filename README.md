<p align="center">
  <img src="public/pudu-lang-short.png" alt="Pudu" width="120">
</p>

<p align="center">
  <a href="https://www.pudu-lang.org/">Pudu</a> |
  <a href="website/docs/guides/introduction.md">Documentation</a> |
  <a href="wiki/00-INDEX.md">Design vault</a> |
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

# Pudu Lang - Foundation UI

A component system for Pudu. Typed props, one file per component holding its markup and its styles,
a theme built from seven design aspects, and a generator that puts the source in your project.

**This is not a component library. It is how you build yours.**

```pudu
import Std.Html.Build as H
import Ui.Composites.Dialog as Dialog
import Ui.Primitives.Button as Button

fn confirm() -> H.Node {
  H.div().holding([
    Dialog.trigger("erase", Button.props().variant(Button.Outline)).says("Delete"),
    Dialog.dialog("erase", "Delete project").holding([
      Dialog.title().says("Delete this project?"),
      Dialog.footer().holding([Dialog.close("erase", Button.props()).says("Delete")])
    ])
  ])
}
```

## Installing

```bash
pudu install @chrismichaelps/pudu-lang-fui@0.1.0
pudu build deps/@chrismichaelps/pudu-lang-fui/tools/Fui.pudu -o fui
./fui init
./fui add dialog
```

It needs [Pudu 0.1.3 or later](https://www.pudu-lang.org/download).

## What you get

| Area | Contents |
| --- | --- |
| Components | 70 components, from buttons and fields to data tables, charts, sidebars, and command menus. |
| Elements | 21 patterns for agent interfaces: turns, reasoning, tools, plans, terminals, and more. |
| Blocks | Ready-made login, signup, dashboard, settings, and pricing sections. |
| Theming | Seven aspects as tokens: color, typography, spacing, shape, elevation, motion, iconography. |
| Generator | `init`, `add`, `new`, `apply`, `preset`, `view`, `search`, `docs`, `diff`, `info`, `icons`, `doctor`, `build`. |

## How it differs

- **The code is yours.** `fui add` copies a component into your project and keeps your edits. The
  core stays a dependency, so fixes still arrive through `pudu update`.
- **Typed props.** A misspelled variant is a compile error.
- **No framework runtime and no build step.** Interaction comes from the platform, with a short
  script only for the parts that need one. A page ships what it rendered, and nothing else.
- **No specificity fights.** Library rules sit in a cascade layer, so a rule of yours always wins.
- **Audited themes.** Every text and surface pairing is checked for contrast in both color modes.
- **Right to left and dark mode** need no extra code.

## Customizing

| Reach | How |
| --- | --- |
| One instance | `.classes("cta")`, `.token("radius", "0")` |
| Every instance | a plain rule on `[data-slot="button"]` |
| The whole system | `Theme.defaults().brand(264.0, 0.14).radius("0.75rem")`, or `fui apply harbor` |
| The component | edit the file in your project |

See the [guides](website/docs/guides/introduction.md) and every component's page under
[`website/docs`](website/docs).

## Developing

```bash
pudu test test
pudu run tools/Layers.pudu
pudu run examples/Gallery.pudu > gallery.html
```

Everything is designed in the vault at [`wiki/`](wiki/00-INDEX.md) before it is written.

## License

[Apache-2.0](LICENSE).
