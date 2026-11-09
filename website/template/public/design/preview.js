import { FONT_SERVICE, FONT_WEIGHTS, HOME_ITEM, INHERIT, PREVIEW_ROOT } from "./constants.js";
import { tokensOf } from "./model.js";

const SHAPES = new Set(["g", "path", "circle", "ellipse", "line", "polyline", "polygon", "rect"]);
const originals = new WeakMap();
const fetchedSets = new Map();

function familyOf(data, value) {
  const found = data.fonts.find((font) => font[0] === value);

  return found ? found[1] : "";
}

function stackOf(data, value) {
  const found = data.fonts.find((font) => font[0] === value);

  if (!found) return "sans-serif";

  return `'${found[1]}', ${found[2] === "mono" ? "monospace" : found[2] === "serif" ? "serif" : "sans-serif"}`;
}

function ensureElement(page, tag, id) {
  let element = page.getElementById(id);

  if (!element) {
    element = page.createElement(tag);
    element.id = id;
    page.head.appendChild(element);
  }

  return element;
}

function applyFonts(data, state, page) {
  const heading = state.heading === INHERIT ? state.font : state.heading;
  const families = [...new Set([familyOf(data, state.font), familyOf(data, heading)])];
  const query = families.map((family) => `family=${family.replaceAll(" ", "+")}:${FONT_WEIGHTS}`).join("&");
  const link = ensureElement(page, "link", "fui-fonts");

  link.rel = "stylesheet";
  link.href = `${FONT_SERVICE}?${query}&display=swap`;
  page.documentElement.style.setProperty("--fui-font-sans", stackOf(data, state.font));
  page.documentElement.style.setProperty("--fui-font-heading", stackOf(data, heading));
}

function applyColors(data, state, page) {
  tokensOf(data, state).forEach((value, name) => page.documentElement.style.setProperty(`--fui-${name}`, value));
}

function applyRadius(data, state, page) {
  const value = data.radii.find((entry) => entry[0] === state.radius)[1];

  if (value) page.documentElement.style.setProperty("--fui-radius", value);
  else page.documentElement.style.removeProperty("--fui-radius");
}

function libraryOf(data, value) {
  return data.libraries.findIndex((library) => library[0] === value);
}

async function iconSet(data, position) {
  const prefix = data.libraries[position][2];

  if (!fetchedSets.has(prefix)) {
    const names = Object.values(data.iconNames).map((row) => row[position]).filter(Boolean);
    const answer = await fetch(`${data.iconService}/${prefix}.json?icons=${names.join(",")}`);

    fetchedSets.set(prefix, await answer.json());
  }

  return fetchedSets.get(prefix);
}

function bodyOf(set, name) {
  const icon = set.icons[name] || set.icons[(set.aliases[name] || {}).parent];

  return icon ? icon.body : "";
}

function restoreIcon(svg) {
  const saved = originals.get(svg);

  if (saved) {
    svg.replaceChildren(...saved.body);
    svg.setAttribute("viewBox", saved.box);
    svg.setAttribute("stroke", saved.stroke);
  }
}

function shapesOf(body) {
  const parsed = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${body}</svg>`, "image/svg+xml");
  const shapes = [...parsed.documentElement.querySelectorAll("*")];

  shapes.forEach((shape) => {
    if (!SHAPES.has(shape.localName)) return shape.remove();

    [...shape.attributes].filter((attribute) => attribute.name.startsWith("on") || attribute.name.includes("href")).forEach((attribute) => shape.removeAttribute(attribute.name));
  });

  return [...parsed.documentElement.children];
}

function drawIcon(svg, set, name) {
  const body = bodyOf(set, name);

  if (!body) return restoreIcon(svg);

  if (!originals.has(svg)) originals.set(svg, { body: [...svg.childNodes], box: svg.getAttribute("viewBox"), stroke: svg.getAttribute("stroke") });

  svg.replaceChildren(...shapesOf(body).map((shape) => svg.ownerDocument.importNode(shape, true)));
  svg.setAttribute("viewBox", `0 0 ${set.width || 24} ${set.height || 24}`);
  svg.setAttribute("stroke", body.includes("stroke=") ? "none" : "currentColor");
}

async function applyIcons(data, state, page) {
  const position = libraryOf(data, state.icons);
  const icons = [...page.querySelectorAll("svg[data-icon]")];

  if (position === 0) return icons.forEach(restoreIcon);

  const set = await iconSet(data, position);

  icons.forEach((svg) => {
    const row = data.iconNames[svg.dataset.icon];

    if (row) drawIcon(svg, set, row[position]);
  });
}

export function applyDesign(data, state, frame, mode) {
  const page = frame.contentDocument;

  if (!page || !page.head) return;

  page.documentElement.setAttribute("data-mode", mode);
  const look = ensureElement(page, "link", "fui-look");
  const lookUrl = new URL(`looks/${state.look}.css`, PREVIEW_ROOT).href;

  if (look.href !== lookUrl) look.href = lookUrl;

  ensureElement(page, "style", "fui-menu").textContent = data.menus[state.menu] + data.menuAccents[state.accent];
  applyColors(data, state, page);
  applyRadius(data, state, page);
  applyFonts(data, state, page);
  applyIcons(data, state, page).catch(() => page.querySelectorAll("svg[data-icon]").forEach(restoreIcon));
}

export function previewUrl(item) {
  return new URL(`${item === HOME_ITEM ? "home" : item}.html`, PREVIEW_ROOT).href;
}
