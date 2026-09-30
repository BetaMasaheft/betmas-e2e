#!/usr/bin/env bash
set -euo pipefail
# Usage:
#   EXIST_REST=http://localhost:8081/exist/rest/db ./scripts/check-bibl-coverage.sh
# Queries eXist for distinct expanded bm: ptrs, EthioStudies @tag values, and
# exception @bm; fails if any ptr is in neither set.

EXIST_REST="${EXIST_REST:-http://localhost:8081/exist/rest/db}"
AUTH="${EXIST_AUTH:-admin:}"

query() {
  curl -sf -u "$AUTH" -G "$EXIST_REST" \
    --data-urlencode "_query=$1" \
    --data-urlencode "_wrap=no"
}

mapfile -t ptrs < <(query 'string-join(distinct-values(collection("/db/apps/expanded")//@target[starts-with(., "bm:")]), "&#10;")')
mapfile -t tags < <(query 'string-join(distinct-values(doc("/db/apps/EthioStudies/citations.xml")//@tag), "&#10;")')
mapfile -t excs < <(query 'string-join(doc("/db/apps/catalogs/bibl-exceptions.xml")//*:entry/@bm, "&#10;")')

declare -A ok=()
for t in "${tags[@]}"; do [[ -n "$t" ]] && ok["$t"]=1; done
for e in "${excs[@]}"; do [[ -n "$e" ]] && ok["$e"]=1; done

miss=0
for p in "${ptrs[@]}"; do
  [[ -z "$p" ]] && continue
  if [[ -z "${ok[$p]+x}" ]]; then
    printf 'uncovered bm: pointer: %s\n' "$p" >&2
    miss=1
  fi
done
exit "$miss"
