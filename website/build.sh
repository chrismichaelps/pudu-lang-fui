#!/usr/bin/env bash
# Builds the site into website/_site with a checkout of the documentation generator.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="$(dirname "$here")"
generator="$(cd "${1:?usage: build.sh <path to pudu-lang-docgen>}" && pwd)"

cd "$root"
pudu run website/Previews.pudu

# The generator's server borrows a field Pudu 0.1.3 needs by value; a private copy carries the fix.
cache="$here/.cache/docgen"
rm -rf "$cache"
mkdir -p "$here/.cache"
cp -R "$generator" "$cache"
sed -i.bak 's/written.concat(&answered.body)/written.concat(answered.body)/' "$cache/src/PuduLangDocgen/Serve.pudu"

cd "$cache"
pudu run examples/Cli.pudu build "$here"
