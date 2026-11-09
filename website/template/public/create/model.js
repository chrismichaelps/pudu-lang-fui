import { CODE_PARAMETER, CODE_SEPARATOR, FIELDS, INHERIT, LOOK_MARKS, LOOK_TITLES } from "./constants.js";

export function titleOf(value) {
  return value.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

function plain(values) {
  return values.map((value) => ({ value, label: titleOf(value) }));
}

function colored(data, values) {
  return values.map((value) => ({ value, label: titleOf(value), swatch: swatchColor(data, value) }));
}

function swatchColor(data, name) {
  const row = data.swatches[name].find((entry) => entry[0] === "primary");

  return row ? row[2] : "transparent";
}

function fontChoices(data) {
  return data.fonts.map(([value, label]) => ({ value, label, family: label }));
}

export function optionsFor(data, state) {
  const hues = colored(data, [state.base, ...data.accents]);

  return {
    look: data.looks.map((value) => ({ value, label: LOOK_TITLES[value] || titleOf(value), mark: LOOK_MARKS[value] || "" })),
    base: colored(data, data.bases),
    theme: hues,
    chart: hues,
    heading: [{ value: INHERIT, label: "Inherit" }, ...fontChoices(data)],
    font: fontChoices(data),
    icons: data.libraries.map(([value, label]) => ({ value, label })),
    radius: plain(data.radii.map((entry) => entry[0])),
    menu: plain(Object.keys(data.menus)),
    accent: plain(Object.keys(data.menuAccents)),
  };
}

export function decode(code) {
  const words = code.split(CODE_SEPARATOR);

  if (words.length !== FIELDS.length) return null;

  return Object.fromEntries(FIELDS.map((field, index) => [field, words[index]]));
}

export function encode(state) {
  return FIELDS.map((field) => state[field]).join(CODE_SEPARATOR);
}

export function isValid(data, state) {
  const options = optionsFor(data, state);

  return FIELDS.every((field) => options[field].some((option) => option.value === state[field]));
}

export function initialState(data) {
  const asked = new URLSearchParams(location.search).get(CODE_PARAMETER);
  const parsed = asked ? decode(asked) : null;

  return parsed && isValid(data, parsed) ? parsed : decode(data.code);
}

function pick(values) {
  return values[Math.floor(Math.random() * values.length)];
}

export function shuffled(data) {
  const base = pick(data.bases);
  const color = Math.random() < 0.5 ? base : pick(data.accents);

  return {
    ...decode(data.code),
    look: pick(data.looks),
    base,
    theme: color,
    chart: color,
    font: pick(data.fonts)[0],
    radius: pick(data.radii)[0],
    icons: pick(data.libraries)[0],
  };
}

export function tokensOf(data, state) {
  const merged = new Map();
  const add = (rows) => rows.forEach(([name, light, dark]) => merged.set(name, `light-dark(${light}, ${dark})`));
  const isChart = (row) => row[0].startsWith("chart-");

  add(data.swatches[state.base]);
  add(data.swatches[state.theme].filter((row) => !isChart(row)));
  add(data.swatches[state.chart].filter(isChart));

  return merged;
}
