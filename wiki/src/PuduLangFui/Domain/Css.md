---
type: module
path: "@root/src/PuduLangFui/Domain/Css.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Domain.Css]
---

# PuduLangFui.Domain.Css

## Purpose

Typed style blocks: the rules a component declares, the `$token` shorthand they use, and their rendering into a cascade layer.

## Interface

### Signatures

```pudu
export type Rule = { selector: Str, declarations: Str, within: Str }

export type Frames = { name: Str, steps: Array[(Str, Str)] }

export type Block = { name: Str, slots: Array[Str], rules: Array[Rule], frames: Array[Frames], behaviors: Array[Str] }

export fn selectorOf(name: Str) -> Str

export type Step = fn(Block) -> Block

export fn block(name: Str, steps: Array[Step]) -> Block

export fn base(declarations: Str) -> Step

export fn when(condition: Str, declarations: Str) -> Step

export fn variant(attribute: Str, value: Str, declarations: Str) -> Step

export fn hover(declarations: Str) -> Step

export fn focusRing() -> Step

export fn disabled(declarations: Str) -> Step

export fn inside(selector: Str, declarations: Str) -> Step

export fn slot(name: Str, declarations: Str) -> Step

export fn slotWhen(name: Str, condition: Str, declarations: Str) -> Step

export fn rule(selector: Str, declarations: Str) -> Step

export fn within(condition: Str, selector: Str, declarations: Str) -> Step

export fn keyframes(name: Str, steps: Array[(Str, Str)]) -> Step

export fn behavior(script: Str) -> Step

export fn expand(declarations: Str) -> Str

export fn tokensIn(declarations: Str) -> Array[Str]

export fn unknownTokens(held: &Block, known: &Set[Str]) -> Array[Str]

export fn render(blocks: &Array[Block]) -> Str

export type LookRule = (Str, Str, Str, Str)

export fn renderLook(rules: &Array[LookRule], slots: &Set[Str], everything: Bool) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Css]]

## Algorithm

1. A block starts with its own slot. Each authoring method appends a rule whose selector is the slot's attribute selector plus a condition. Rendering expands `$name` to `var(--fui-name)` and writes keyframes first, then every rule inside `@layer fui.components`.

## Negative Logic (Prohibited Paths)

- ❌ Do not expand a dollar sign that no lowercase letter follows.
- ❌ Do not emit an empty rule.
- ❌ Do not let a slot be styled outside the block that declares it.

## Edge Cases

- A `$` at the end of a declaration stays literal. An unknown token is found by `unknownTokens`, and the catalog suite refuses it.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Where do token typos get caught?
  **A:** In `unknownTokens`, run by the catalog suite and `fui doctor`. _Rationale:_ declarations stay pasteable CSS text. _Rejected:_ a typed function per token, which makes every declaration unreadable.

## Referenced by

[[src/PuduLangFui]] · [[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Cli/Model/Audit]] · [[src/PuduLangFui/Components/Composites/AlertDialog]] · [[src/PuduLangFui/Components/Composites/Attachment]] · [[src/PuduLangFui/Components/Composites/Breadcrumb]] · [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/Carousel]] · [[src/PuduLangFui/Components/Composites/CodeBlock]] · [[src/PuduLangFui/Components/Composites/Combobox]] · [[src/PuduLangFui/Components/Composites/ContextMenu]] · [[src/PuduLangFui/Components/Composites/Dialog]] · [[src/PuduLangFui/Components/Composites/Drawer]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Composites/InputGroup]] · [[src/PuduLangFui/Components/Composites/InputOtp]] · [[src/PuduLangFui/Components/Composites/Message]] · [[src/PuduLangFui/Components/Composites/MessageScroller]] · [[src/PuduLangFui/Components/Composites/NavigationMenu]] · [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Composites/Select]] · [[src/PuduLangFui/Components/Composites/Sheet]] · [[src/PuduLangFui/Components/Composites/Spinner]] · [[src/PuduLangFui/Components/Composites/Toast]] · [[src/PuduLangFui/Components/Composites/ToggleGroup]] · [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Patterns/Chart]] · [[src/PuduLangFui/Components/Patterns/Command]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Patterns/Form]] · [[src/PuduLangFui/Components/Patterns/Menubar]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Components/Primitives/Accordion]] · [[src/PuduLangFui/Components/Primitives/Alert]] · [[src/PuduLangFui/Components/Primitives/AspectRatio]] · [[src/PuduLangFui/Components/Primitives/Avatar]] · [[src/PuduLangFui/Components/Primitives/Badge]] · [[src/PuduLangFui/Components/Primitives/Bubble]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/ButtonGroup]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Checkbox]] · [[src/PuduLangFui/Components/Primitives/Collapsible]] · [[src/PuduLangFui/Components/Primitives/Direction]] · [[src/PuduLangFui/Components/Primitives/Effects]] · [[src/PuduLangFui/Components/Primitives/Empty]] · [[src/PuduLangFui/Components/Primitives/HoverCard]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/Item]] · [[src/PuduLangFui/Components/Primitives/Kbd]] · [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Components/Primitives/Marker]] · [[src/PuduLangFui/Components/Primitives/NativeSelect]] · [[src/PuduLangFui/Components/Primitives/Popover]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Components/Primitives/RadioGroup]] · [[src/PuduLangFui/Components/Primitives/Resizable]] · [[src/PuduLangFui/Components/Primitives/ScrollArea]] · [[src/PuduLangFui/Components/Primitives/Separator]] · [[src/PuduLangFui/Components/Primitives/Skeleton]] · [[src/PuduLangFui/Components/Primitives/Slider]] · [[src/PuduLangFui/Components/Primitives/Switch]] · [[src/PuduLangFui/Components/Primitives/Table]] · [[src/PuduLangFui/Components/Primitives/Tabs]] · [[src/PuduLangFui/Components/Primitives/Textarea]] · [[src/PuduLangFui/Components/Primitives/Toggle]] · [[src/PuduLangFui/Components/Primitives/Tooltip]] · [[src/PuduLangFui/Components/Primitives/Typeset]] · [[src/PuduLangFui/Components/Primitives/Typography]] · [[src/PuduLangFui/Domain/_MOC]] · [[src/PuduLangFui/Elements/ChainOfThought]] · [[src/PuduLangFui/Elements/Chat]] · [[src/PuduLangFui/Elements/Checkpoint]] · [[src/PuduLangFui/Elements/Confirmation]] · [[src/PuduLangFui/Elements/Context]] · [[src/PuduLangFui/Elements/FileTree]] · [[src/PuduLangFui/Elements/InlineCitation]] · [[src/PuduLangFui/Elements/ModelSelector]] · [[src/PuduLangFui/Elements/Plan]] · [[src/PuduLangFui/Elements/PromptInput]] · [[src/PuduLangFui/Elements/Queue]] · [[src/PuduLangFui/Elements/Reasoning]] · [[src/PuduLangFui/Elements/Sources]] · [[src/PuduLangFui/Elements/StackTrace]] · [[src/PuduLangFui/Elements/Subagent]] · [[src/PuduLangFui/Elements/Suggestion]] · [[src/PuduLangFui/Elements/Task]] · [[src/PuduLangFui/Elements/Terminal]] · [[src/PuduLangFui/Elements/TestResults]] · [[src/PuduLangFui/Elements/Tool]] · [[src/PuduLangFui/Elements/Turn]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Theme/Presets/Design]]
