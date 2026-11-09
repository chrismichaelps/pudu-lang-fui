---
type: grammar
language: Pudu
version: "0.1.3"
tags: [grammar]
aliases: [Grammar — Pudu, Pudu Grammar]
---

# Grammar — Pudu

The Pudu surface this repository is written against, pinned to compiler `0.1.3` as published in its
release archive. Where this page and the compiler disagree, the compiler wins and this page is
corrected in the same change.

## SDK Discovery Map

| Need | Module | Entry points |
| --- | --- | --- |
| HTML nodes | `Std.Html.Build` | `H.div()`, `.at`, `.data`, `.says`, `.holding`, `H.render`, `H.document` |
| HTML values | `Std.Html` | `Html`, `Element`, `Text`, `Fragment`, `Trusted` |
| Reflection in derives | `Std.Meta` | `Meta.collect`, `Field.get`, `Field.attributeOr`, `Meta.nameOf` |
| Math | `Std.Math` | `sin`, `cos`, `pi` |
| Files | `Std.Io`, `Std.Fs`, `Std.Path` | `read`, `write`, `exists`, `listPaths`, `makeDirectory`, `withTemporaryDirectory` |
| Lines compared | `Std.Diff` | line differences for `fui diff` |
| Tests | `Std.Test` | `suite`, `equals`, `that`, `run`, `failuresOf`, `report` |

## Imports / Namespaces

- One module per file; the module name is the path under its source root with `/` as `.`.
- Every import is qualified and aliased: `import Std.Html.Build as H`.
- **A trait's methods are callable only where the trait's module is imported directly.** A program
  calling `.classes(...)` imports `PuduLangFui.Core`. Importing a component does not bring it along.
- A trait is implemented for a type another module declares by the module that declares the trait.

## Core Primitives

- Records: `Props{variant: Primary}`, updated as `Props{..*self, variant: value}`.
- Sum types without payload render through `show`: `show(IconSmall)` is `IconSmall`.
- A trait method takes `self: &Self` and answers `Self` for a chain.
- Default arguments are positional and hold literals only (see Prohibited Patterns). There are no
  named arguments at a call site; a chain or a record does that job.
- Derives: `export derive Tokens for T: Record { fn tokens(self: &T) -> ... }`, the field type
  bound with `Meta.collect[T](fn(field: Meta.Field[T, F]) -> Option[E] where F: Trait { ... })`.
- A field is renamed for a derive with `@token("name")`, read by `field.attributeOr`.
- Module scope holds only `const`. Lookup tables are `const` built with `mapOf([...])`.

## Architectural Laws

- Dependencies point inward; see [[architecture/LANGUAGE]].
- A component is one file and answers an open `H.Node`, so a caller keeps chaining. See
  [[decisions/ADR-0001-open-nodes-and-props]].
- Files are touched only by `PuduLangFui.Cli.Workspace` and `.Cli.Commands`. See [[seams/FileSystem]].
- Kinds dispatch through `const` tables. See [[decisions/ADR-0007-factories-for-kinds]].
- Spacing follows [[architecture/CODE_STYLE]].
- Every module the package ships is `PuduLangFui` or lives under `src/PuduLangFui/`.

## Syntax Rules / Naming

- Types, traits, modules, and variants are `PascalCase`; values `camelCase`; constants
  `UPPER_SNAKE_CASE`.
- Every file header and exported type carries `/** @Namespace.Entity.Role — intent */`.
- Every `fn`, `export fn`, and `const` carries a one- or two-line `///` comment stating what it
  answers. Rationale belongs in the page's Grill Log.

## Prohibited Patterns (verified against the 0.1.3 compiler)

- **A brace inside a string literal is interpolation.** A literal brace is `\{` or `\}`.
- **`.class` on a component's node writes a second `class` attribute,** and a browser keeps the
  first. Add classes with `.classes(...)` from `PuduLangFui.Core`.
- **`scope`, `module`, `where`, `task`, `type`, `match`, `with`, `macro`, `dynamic`, `in`, `for`,
  and `enum` are keywords** and cannot name a binding, a field, or a function.
- **`print` takes `Str`.** A value of any other type goes through `show`.
- **`Array.get(i)` and `items[i]` stop the program when `i` is out of range.** Guard the index.
- **A unit value is matched as `Ok(_)`, not `Ok(())`.**
- **A default argument that names anything but a literal** compiles and then fails at run time with
  E7001 when called from another module, since defaults are evaluated in the caller's module
  ([pudu-lang#639](https://github.com/chrismichaelps/pudu-lang/issues/639)). Literals are safe. Every
  component therefore takes its props explicitly.
- **`return` as a match arm needs a block:** `case Err(e) => { return Err(e) }`.
- **`Array` has no `first`, `last`, or `any`.** Use `Std.List` with a borrowed array.
- **A long method chain.** On 0.1.3 the cost of a chain roughly doubles per link, so thirty links do
  not finish. Keep a chain under about six links and hold anything longer as a flat array, as
  style blocks do.
- **A static call through a type parameter inside `Meta.collect`** fails at run time on 0.1.3
  ([pudu-lang#457](https://github.com/chrismichaelps/pudu-lang/issues/457)).
- **A style declaration naming `left`, `right`, `margin-left`, and the like** breaks right-to-left
  layout. Use logical properties; the catalog suite refuses the physical ones.

## Senior Definition Needed

(none open)

## Referenced by

[[00-INDEX]] · [[CHANGELOG]] · [[architecture/SPECIFICATION]] · [[grammar/_MOC]] · [[src/PuduLangFui]] · [[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Dispatch/Router]] · [[src/PuduLangFui/Cli/Model/Audit]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/Config]] · [[src/PuduLangFui/Cli/Model/IconLibrary]] · [[src/PuduLangFui/Cli/Model/Icons]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Model/Rewrite]] · [[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]] · [[src/PuduLangFui/Components/Composites/AlertDialog]] · [[src/PuduLangFui/Components/Composites/Attachment]] · [[src/PuduLangFui/Components/Composites/Breadcrumb]] · [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/Carousel]] · [[src/PuduLangFui/Components/Composites/CodeBlock]] · [[src/PuduLangFui/Components/Composites/Combobox]] · [[src/PuduLangFui/Components/Composites/ContextMenu]] · [[src/PuduLangFui/Components/Composites/Dialog]] · [[src/PuduLangFui/Components/Composites/Drawer]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Composites/InputGroup]] · [[src/PuduLangFui/Components/Composites/InputOtp]] · [[src/PuduLangFui/Components/Composites/Message]] · [[src/PuduLangFui/Components/Composites/MessageScroller]] · [[src/PuduLangFui/Components/Composites/NavigationMenu]] · [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Composites/Select]] · [[src/PuduLangFui/Components/Composites/Sheet]] · [[src/PuduLangFui/Components/Composites/Spinner]] · [[src/PuduLangFui/Components/Composites/Toast]] · [[src/PuduLangFui/Components/Composites/ToggleGroup]] · [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Patterns/Chart]] · [[src/PuduLangFui/Components/Patterns/Command]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Patterns/Form]] · [[src/PuduLangFui/Components/Patterns/Menubar]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Components/Composites/Accordion]] · [[src/PuduLangFui/Components/Primitives/Alert]] · [[src/PuduLangFui/Components/Primitives/AspectRatio]] · [[src/PuduLangFui/Components/Primitives/Avatar]] · [[src/PuduLangFui/Components/Primitives/Badge]] · [[src/PuduLangFui/Components/Primitives/Bubble]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/ButtonGroup]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Checkbox]] · [[src/PuduLangFui/Components/Primitives/Collapsible]] · [[src/PuduLangFui/Components/Primitives/Direction]] · [[src/PuduLangFui/Components/Primitives/Effects]] · [[src/PuduLangFui/Components/Primitives/Empty]] · [[src/PuduLangFui/Components/Primitives/HoverCard]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/Item]] · [[src/PuduLangFui/Components/Primitives/Kbd]] · [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Components/Primitives/Marker]] · [[src/PuduLangFui/Components/Primitives/NativeSelect]] · [[src/PuduLangFui/Components/Primitives/Popover]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Components/Primitives/RadioGroup]] · [[src/PuduLangFui/Components/Primitives/Resizable]] · [[src/PuduLangFui/Components/Primitives/ScrollArea]] · [[src/PuduLangFui/Components/Primitives/Separator]] · [[src/PuduLangFui/Components/Primitives/Skeleton]] · [[src/PuduLangFui/Components/Primitives/Slider]] · [[src/PuduLangFui/Components/Primitives/Switch]] · [[src/PuduLangFui/Components/Primitives/Table]] · [[src/PuduLangFui/Components/Primitives/Tabs]] · [[src/PuduLangFui/Components/Primitives/Textarea]] · [[src/PuduLangFui/Components/Primitives/Toggle]] · [[src/PuduLangFui/Components/Primitives/Tooltip]] · [[src/PuduLangFui/Components/Primitives/Typeset]] · [[src/PuduLangFui/Components/Primitives/Typography]] · [[src/PuduLangFui/Constants/Accessibility]] · [[src/PuduLangFui/Constants/Calendar]] · [[src/PuduLangFui/Constants/Cli]] · [[src/PuduLangFui/Constants/Css]] · [[src/PuduLangFui/Constants/DesignOptions]] · [[src/PuduLangFui/Constants/DrawerScript]] · [[src/PuduLangFui/Constants/Fonts]] · [[src/PuduLangFui/Constants/Hues]] · [[src/PuduLangFui/Constants/LookBase]] · [[src/PuduLangFui/Constants/Presets]] · [[src/PuduLangFui/Constants/SidebarScript]] · [[src/PuduLangFui/Constants/Swatches]] · [[src/PuduLangFui/Constants/Templates]] · [[src/PuduLangFui/Constants/ToastScript]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Color]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Domain/Slots]] · [[src/PuduLangFui/Elements/ChainOfThought]] · [[src/PuduLangFui/Elements/Chat]] · [[src/PuduLangFui/Elements/Checkpoint]] · [[src/PuduLangFui/Elements/Confirmation]] · [[src/PuduLangFui/Elements/Context]] · [[src/PuduLangFui/Elements/FileTree]] · [[src/PuduLangFui/Elements/InlineCitation]] · [[src/PuduLangFui/Elements/ModelSelector]] · [[src/PuduLangFui/Elements/Plan]] · [[src/PuduLangFui/Elements/PromptInput]] · [[src/PuduLangFui/Elements/Queue]] · [[src/PuduLangFui/Elements/Reasoning]] · [[src/PuduLangFui/Elements/Sources]] · [[src/PuduLangFui/Elements/StackTrace]] · [[src/PuduLangFui/Elements/Subagent]] · [[src/PuduLangFui/Elements/Suggestion]] · [[src/PuduLangFui/Elements/Task]] · [[src/PuduLangFui/Elements/Terminal]] · [[src/PuduLangFui/Elements/TestResults]] · [[src/PuduLangFui/Elements/Tool]] · [[src/PuduLangFui/Elements/Turn]] · [[src/PuduLangFui/Theme/Aspects/Elevation]] · [[src/PuduLangFui/Theme/Aspects/Iconography]] · [[src/PuduLangFui/Theme/Aspects/Motion]] · [[src/PuduLangFui/Theme/Aspects/Palette]] · [[src/PuduLangFui/Theme/Aspects/Shape]] · [[src/PuduLangFui/Theme/Aspects/Spacing]] · [[src/PuduLangFui/Theme/Aspects/Typography]] · [[src/PuduLangFui/Theme/Audit/Contrast]] · [[src/PuduLangFui/Theme/Base/Tokens]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Theme/Looks/Classic]] · [[src/PuduLangFui/Theme/Looks/Compact]] · [[src/PuduLangFui/Theme/Looks/Editorial]] · [[src/PuduLangFui/Theme/Looks/Gentle]] · [[src/PuduLangFui/Theme/Looks/Round]] · [[src/PuduLangFui/Theme/Looks/Sharp]] · [[src/PuduLangFui/Theme/Looks/Soft]] · [[src/PuduLangFui/Theme/Looks/Standard]] · [[src/PuduLangFui/Theme/Presets/Design]] · [[src/PuduLangFui/Theme/Presets/Preset]] · [[src/PuduLangFui/Utils/Numbers]] · [[src/PuduLangFui/Utils/Spelling]] · [[tools/Fui]] · [[tools/Layers]] · [[tools/Layers/Catalog]] · [[tools/Layers/Graph]] · [[tools/LayersTest]] · [[tools/Mutate]] · [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Constants/WidgetScripts]]
