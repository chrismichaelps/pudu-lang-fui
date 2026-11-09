import { CODE_PARAMETER, DATA_URL, FIELDS, HOME_ITEM } from "./constants.js";
import { createGetCode, createOpenPreset } from "./dialogs.js";
import { copied, element } from "./dom.js";
import { decode, encode, initialState, isValid, optionsFor, shuffled, titleOf } from "./model.js";
import { createControl } from "./picker.js";
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
  const frame = element("iframe", { title: "Design preview", src: previewUrl(item) });
  const stage = element("div", { class: "fui-design-stage is-loading" }, [frame]);
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
    controls[field] = createControl({ label, kind, onPick: (value) => change({ ...state, [field]: value }) });
  }));

  const getCode = createGetCode(() => encode(state));
  const openPreset = createOpenPreset(openCode);
  const codeButton = element("button", { type: "button", class: "fui-design-code", title: "Copy design code", on: { click: (event) => copied(event.currentTarget, encode(state)) } });
  const modeButton = element("button", { type: "button", class: "fui-design-tool", text: "Light / Dark", on: { click: () => {
    mode = mode === "dark" ? "light" : "dark";
    refresh();
  } } });
  const itemSelect = element("select", { class: "fui-design-items", "aria-label": "Previewed item", on: { change: (event) => {
    item = event.target.value;
    stage.classList.add("is-loading");
    frame.src = previewUrl(item);
  } } }, [HOME_ITEM, ...data.items].map((name) => element("option", { value: name, text: titleOf(name) })));
  const step = (by) => {
    const count = itemSelect.options.length;

    itemSelect.selectedIndex = (itemSelect.selectedIndex + by + count) % count;
    itemSelect.dispatchEvent(new Event("change"));
  };

  const toolbar = element("nav", { class: "fui-design-toolbar", "aria-label": "Preview" }, [
    element("button", { type: "button", class: "fui-design-tool", "aria-label": "Previous item", text: "‹", on: { click: () => step(-1) } }),
    itemSelect,
    element("button", { type: "button", class: "fui-design-tool", "aria-label": "Next item", text: "›", on: { click: () => step(1) } }),
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

  holder.replaceChildren(
    element("div", { class: "fui-design-canvas" }, [toolbar, stage]),
    inspector,
    getCode.node,
    openPreset.node,
  );

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
    if (event.target.matches("input, textarea, select") || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "r") change(shuffled(data));
    if (event.key === "d") modeButton.click();
  });
  refresh();
}

const holder = document.querySelector(".fui-create");

if (holder) {
  fetch(DATA_URL)
    .then((answer) => answer.json())
    .then((data) => start(holder, data))
    .catch(() => { holder.textContent = "The design data could not be loaded."; });
}
