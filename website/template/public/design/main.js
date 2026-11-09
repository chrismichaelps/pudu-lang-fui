import { CODE_PARAMETER, DATA_ELEMENT, FIELDS, HOME_ITEM } from "./constants.js";
import { createGetCode, createOpenPreset } from "./dialogs.js";
import { copied, element } from "./dom.js";
import { decode, encode, initialState, isValid, optionsFor, shuffled, titleOf } from "./model.js";
import { createControl, createPicker, icon } from "./picker.js";
import { applyDesign, previewUrl } from "./preview.js";

const SECTIONS = [
  ["Foundation", [["look", "Look", "tiles"], ["radius", "Corners", "segments"]]],
  ["Color", [["base", "Neutral", "swatches"], ["theme", "Accent", "swatches"], ["chart", "Charts", "swatches"]]],
  ["Type", [["heading", "Headings", "select"], ["font", "Body", "select"], ["icons", "Icons", "select"]]],
  ["Menus", [["menu", "Surface", "segments"], ["accent", "Highlight", "segments"]]],
];

function currentSiteMode() {
  const chosen = document.documentElement.getAttribute("data-theme");

  if (chosen === "dark" || chosen === "light") return chosen;

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function start(holder, data) {
  let state = initialState(data);
  let item = HOME_ITEM;
  let mode = currentSiteMode();
  const stage = holder.querySelector(".fui-design-stage");
  const frame = stage.querySelector("iframe");
  const controls = {};

  function refresh() {
    const options = optionsFor(data, state);

    FIELDS.forEach((field) => controls[field].update(options[field], state[field]));
    codeButton.textContent = encode(state);
    applyDesign(data, state, frame, mode);
  }

  function change(next, remember = true) {
    state = next;

    if (!optionsFor(data, state).theme.some((option) => option.value === state.theme)) state.theme = state.base;
    if (!optionsFor(data, state).chart.some((option) => option.value === state.chart)) state.chart = state.base;

    const url = new URL(location.href);

    url.searchParams.set(CODE_PARAMETER, encode(state));

    if (remember) history.pushState(null, "", url);

    refresh();
  }

  function openCode(code) {
    const parsed = decode(code);

    if (!parsed || !isValid(data, parsed)) return false;

    change(parsed);

    return true;
  }

  SECTIONS.forEach(([, fields]) => fields.forEach(([field, label, kind]) => {
    controls[field] = createControl({ label, kind, icons: data.icons, onPick: (value) => change({ ...state, [field]: value }) });
  }));

  const getCode = createGetCode(() => encode(state));
  const openPreset = createOpenPreset(openCode);
  const codeButton = element("button", { type: "button", class: "fui-design-code", title: "Copy design code", on: { click: (event) => copied(event.currentTarget, encode(state)) } });
  const modeButton = element("button", { type: "button", class: "fui-design-tool", text: "Light / Dark", on: { click: () => {
    mode = mode === "dark" ? "light" : "dark";
    refresh();
  } } });
  const itemOptions = [HOME_ITEM, ...data.items].map((name) => ({ value: name, label: titleOf(name) }));
  const showItem = (next) => {
    item = next;
    itemPicker.update(itemOptions, item);
    stage.classList.add("is-loading");
    frame.removeAttribute("srcdoc");
    frame.src = previewUrl(item);
  };
  const itemPicker = createPicker({ label: "Previewed item", icons: data.icons, onPick: showItem });
  const step = (by) => {
    const count = itemOptions.length;

    showItem(itemOptions[(itemOptions.findIndex((option) => option.value === item) + by + count) % count].value);
  };

  itemPicker.update(itemOptions, item);

  const toolbar = element("nav", { class: "fui-design-toolbar", "aria-label": "Preview" }, [
    element("button", { type: "button", class: "fui-design-tool", "aria-label": "Previous item", on: { click: () => step(-1) } }, [icon(data.icons.left)]),
    itemPicker.node,
    element("button", { type: "button", class: "fui-design-tool", "aria-label": "Next item", on: { click: () => step(1) } }, [icon(data.icons.right)]),
    element("span", { class: "fui-design-spacer" }),
    modeButton,
  ]);
  const inspector = element("aside", { class: "fui-design-inspector", "aria-label": "Design choices" }, [
    element("header", {}, [
      element("div", {}, [element("h2", { text: "Your design" }), element("p", { text: "Every change shows at once." })]),
      element("div", { class: "fui-design-header-actions" }, [
        element("button", { type: "button", class: "fui-design-tool", text: "Surprise me", on: { click: () => change(shuffled(data)) } }),
        element("button", { type: "button", class: "fui-design-tool", text: "Start over", on: { click: () => change(decode(data.code)) } }),
      ]),
    ]),
    element("div", { class: "fui-design-sections" }, SECTIONS.map(([heading, fields]) => element("section", {}, [
      element("h3", { text: heading }),
      ...fields.map(([field]) => controls[field].node),
    ]))),
    element("footer", {}, [
      element("label", { class: "fui-design-code-label", text: "Design code" }),
      codeButton,
      element("div", { class: "fui-design-footer-actions" }, [
        element("button", { type: "button", class: "fui-design-action", text: "Paste a code", on: { click: () => openPreset.open() } }),
        element("button", { type: "button", class: "fui-design-action fui-design-action-primary", text: "Use this design", on: { click: () => getCode.open() } }),
      ]),
    ]),
  ]);

  holder.querySelector(".fui-design-toolbar").replaceWith(toolbar);
  holder.querySelector(".fui-design-inspector").replaceWith(inspector);
  holder.append(getCode.node, openPreset.node);

  frame.addEventListener("load", () => {
    applyDesign(data, state, frame, mode);
    stage.classList.remove("is-loading");
  });
  new MutationObserver(() => {
    mode = currentSiteMode();
    refresh();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  addEventListener("popstate", () => {
    state = initialState(data);
    refresh();
  });
  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea, [role=listbox]") || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "r") change(shuffled(data));
    if (event.key === "d") modeButton.click();
  });
  refresh();
}

const holder = document.querySelector(".fui-create");

if (holder) start(holder, JSON.parse(document.getElementById(DATA_ELEMENT).textContent));
