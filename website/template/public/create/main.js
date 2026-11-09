import { CODE_PARAMETER, DATA_URL, FIELDS, HOME_ITEM } from "./constants.js";
import { createGetCode, createOpenPreset } from "./dialogs.js";
import { copied, element } from "./dom.js";
import { decode, encode, initialState, isValid, optionsFor, shuffled, titleOf } from "./model.js";
import { createPicker } from "./picker.js";
import { applyDesign, previewUrl } from "./preview.js";

const LABELS = { look: "Style", base: "Base Color", theme: "Theme", chart: "Chart Color", heading: "Heading", font: "Font", icons: "Icon Library", radius: "Radius", menu: "Menu", accent: "Menu Accent" };
const GROUPS = [["look"], ["base", "theme", "chart"], ["heading", "font"], ["icons", "radius"], ["menu", "accent"]];

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
  const panel = element("aside", { class: "fui-create-panel", "aria-label": "Design choices" });
  const pickers = {};

  function refresh() {
    const options = optionsFor(data, state);

    FIELDS.forEach((field) => pickers[field].update(options[field], state[field]));
    codeButton.textContent = `--preset ${encode(state)}`;
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

  FIELDS.forEach((field) => {
    pickers[field] = createPicker({ label: LABELS[field], panel, onPick: (value) => change({ ...state, [field]: value }) });
  });

  const getCode = createGetCode(() => encode(state));
  const openPreset = createOpenPreset(openCode);
  const codeButton = element("button", { type: "button", class: "fui-create-button fui-create-code", title: "Copy design code", on: { click: (event) => copied(event.currentTarget, encode(state)) } });
  const modeButton = element("button", { type: "button", class: "fui-create-icon", "aria-label": "Toggle light and dark", text: "◐", on: { click: () => {
    mode = mode === "dark" ? "light" : "dark";
    refresh();
  } } });
  const itemSelect = element("select", { class: "fui-create-items", "aria-label": "Previewed item", on: { change: (event) => {
    item = event.target.value;
    frame.src = previewUrl(item);
  } } }, [HOME_ITEM, ...data.items].map((name) => element("option", { value: name, text: titleOf(name) })));
  const step = (by) => {
    const count = itemSelect.options.length;

    itemSelect.selectedIndex = (itemSelect.selectedIndex + by + count) % count;
    itemSelect.dispatchEvent(new Event("change"));
  };

  panel.append(
    element("header", {}, [element("span", { class: "fui-create-title", text: "Create" }), modeButton]),
    element("div", { class: "fui-create-fields" }, GROUPS.flatMap((group, index) => [
      ...(index ? [element("hr")] : []),
      ...group.flatMap((field) => pickers[field].nodes),
    ])),
    element("footer", {}, [
      codeButton,
      element("button", { type: "button", class: "fui-create-button", text: "Open Preset", on: { click: () => openPreset.open() } }),
      element("button", { type: "button", class: "fui-create-button", text: "Shuffle", on: { click: () => change(shuffled(data)) } }),
      element("button", { type: "button", class: "fui-create-button", text: "Reset", on: { click: () => change(decode(data.code)) } }),
      element("button", { type: "button", class: "fui-create-button fui-create-primary", text: "Get Code", on: { click: () => getCode.open() } }),
    ]),
  );

  holder.replaceChildren(
    panel,
    element("div", { class: "fui-create-stage" }, [
      frame,
      element("nav", { class: "fui-create-switcher", "aria-label": "Preview" }, [
        element("button", { type: "button", class: "fui-create-icon", "aria-label": "Previous item", text: "‹", on: { click: () => step(-1) } }),
        itemSelect,
        element("button", { type: "button", class: "fui-create-icon", "aria-label": "Next item", text: "›", on: { click: () => step(1) } }),
      ]),
    ]),
    getCode.node,
    openPreset.node,
  );

  frame.addEventListener("load", () => applyDesign(data, state, frame, mode));
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
