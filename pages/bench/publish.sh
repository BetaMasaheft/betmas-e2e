#!/usr/bin/env bash
# Copy custom chart pages onto a gh-pages checkout. Data files (data.js) stay
# untouched — github-action-benchmark owns those.
set -euo pipefail

root="$(cd "$(dirname "$0")/../.." && pwd)"
dest="${1:?path to gh-pages worktree}"

mkdir -p "$dest/bench/container" "$dest/bench/production"
cp "$root/pages/bench/charts.js" "$dest/bench/charts.js"
cp "$root/pages/bench/bench.css" "$dest/bench/bench.css"
cp "$root/pages/bench/index.html" "$dest/bench/index.html"
cp "$root/pages/bench/container/index.html" "$dest/bench/container/index.html"
cp "$root/pages/bench/production/index.html" "$dest/bench/production/index.html"
