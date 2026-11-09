// Colours every code sample on the page once, by the language its block names.
import { GRAMMARS, paint } from "./languages.js";
import { colour } from "./pudu.js";

const PREFIX = "lang-";

function languageOf(code) {
  const name = [...code.classList].find((entry) => entry.startsWith(PREFIX));

  return name ? name.slice(PREFIX.length).toLowerCase() : "";
}

function painted(language, text) {
  if (language === "pudu") return colour(text);

  const rules = GRAMMARS[language];

  return rules ? paint(rules, text) : null;
}

document.querySelectorAll(`pre code[class*="${PREFIX}"]`).forEach((code) => {
  const html = painted(languageOf(code), code.textContent);

  if (html !== null) code.innerHTML = html;
});
