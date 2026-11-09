// Grammars for the languages the docs show beside Pudu. Each rule is a token kind and a pattern;
// the first rule that matches at a position wins.
const STRING_DOUBLE = /"(?:\\.|[^"\\\n])*"/y;
const STRING_SINGLE = /'(?:\\.|[^'\\\n])*'/y;
const NUMBER = /\b\d[\d_]*(?:\.\d+)?\b/y;
const HASH_COMMENT = /(?<![^\s])#.*/y;
const SLASH_COMMENT = /\/\/.*/y;
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//y;

const SCRIPT_WORDS = /\b(?:abstract|as|async|await|break|case|catch|class|const|continue|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|if|implements|import|in|instanceof|interface|let|new|of|private|protected|public|readonly|return|static|super|switch|this|throw|try|type|typeof|var|void|while|yield)\b/y;

const SCRIPT = [
  ["comment", SLASH_COMMENT],
  ["comment", BLOCK_COMMENT],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["string", /`(?:\\.|[^`\\])*`/y],
  ["keyword", SCRIPT_WORDS],
  ["literal", /\b(?:true|false|null|undefined)\b/y],
  ["number", NUMBER],
  ["type", /\b[A-Z][A-Za-z0-9_]*\b/y],
  ["function", /\b[A-Za-z_$][\w$]*(?=\s*\()/y],
  ["operator", /=>|[-+*/%=<>!&|^?:.]/y],
];

const SHELL = [
  ["comment", HASH_COMMENT],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["label", /\$\{[^}\n]*\}|\$[A-Za-z_]\w*/y],
  ["keyword", /\b(?:if|then|else|elif|fi|for|while|until|do|done|case|esac|in|function|export|local|return)\b/y],
  ["function", /(?<=^[ \t]*|[|;&][ \t]*)[A-Za-z_./~][\w./~-]*/my],
  ["constant", /(?<=\s)--?[A-Za-z][\w-]*/y],
  ["number", /(?<![\w.-])\d+(?![\w.-])/y],
  ["operator", /&&|\|\||[|;<>]/y],
];

const TOML = [
  ["comment", HASH_COMMENT],
  ["type", /(?<=^[ \t]*)\[\[?[^\]\n]+\]\]?/my],
  ["function", /(?<=^[ \t]*)[A-Za-z0-9_.-]+(?=[ \t]*=)/my],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["literal", /\b(?:true|false)\b/y],
  ["number", NUMBER],
  ["operator", /=/y],
];

const JSON_RULES = [
  ["function", /"(?:\\.|[^"\\\n])*"(?=\s*:)/y],
  ["string", STRING_DOUBLE],
  ["literal", /\b(?:true|false|null)\b/y],
  ["number", /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/y],
];

const YAML = [
  ["comment", HASH_COMMENT],
  ["function", /(?<=^[ \t-]*)[A-Za-z0-9_.-]+(?=:)/my],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["literal", /\b(?:true|false|null|yes|no)\b/y],
  ["number", NUMBER],
];

const MARKUP = [
  ["comment", /<!--[\s\S]*?-->/y],
  ["keyword", /(?<=<\/?)[A-Za-z][\w:-]*/y],
  ["type", /(?<=\s)[A-Za-z:@-][\w:.-]*(?==)/y],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["operator", /<\/?|\/?>|=/y],
];

const STYLE = [
  ["comment", BLOCK_COMMENT],
  ["keyword", /@[A-Za-z-]+/y],
  ["string", STRING_DOUBLE],
  ["string", STRING_SINGLE],
  ["label", /--[A-Za-z][\w-]*/y],
  ["function", /[A-Za-z-]+(?=\s*:[^:])/y],
  ["number", /#[0-9a-fA-F]{3,8}\b|-?\b\d+(?:\.\d+)?(?:[a-z]+|%)?/y],
  ["type", /[.#][A-Za-z_][\w-]*/y],
  ["operator", /[{}:;,]/y],
];

export const GRAMMARS = {
  bash: SHELL, sh: SHELL, shell: SHELL, zsh: SHELL,
  toml: TOML,
  json: JSON_RULES,
  yaml: YAML, yml: YAML,
  html: MARKUP, xml: MARKUP, svg: MARKUP,
  css: STYLE,
  javascript: SCRIPT, js: SCRIPT, typescript: SCRIPT, ts: SCRIPT, tsx: SCRIPT, jsx: SCRIPT,
};

const WORD_PART = /[\w$-]/;

function escaped(text) {
  return text.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
}

function matchAt(rules, text, index) {
  for (const [kind, pattern] of rules) {
    pattern.lastIndex = index;
    const found = pattern.exec(text);

    if (found && found[0]) return [kind, found[0]];
  }

  return null;
}

// The text as escaped HTML with a class per token.
export function paint(rules, text) {
  const parts = [];
  let plain = "";
  let index = 0;

  while (index < text.length) {
    const startsWord = index === 0 || !WORD_PART.test(text[index - 1]);
    const found = startsWord || !WORD_PART.test(text[index]) ? matchAt(rules, text, index) : null;

    if (found) {
      parts.push(escaped(plain), `<span class="tok-${found[0]}">${escaped(found[1])}</span>`);
      plain = "";
      index += found[1].length;
    } else {
      plain += text[index];
      index += 1;
    }
  }

  parts.push(escaped(plain));

  return parts.join("");
}
