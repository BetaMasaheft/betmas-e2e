#!/usr/bin/env bash
set -euo pipefail
# Usage:
#   EXIST_REST=http://localhost:8081/exist/rest/db ./scripts/check-bibl-coverage.sh
# Queries eXist for distinct expanded bm: ptrs, EthioStudies @tag values, and
# exception @bm; fails if any ptr is in neither set.
# Fail closed: any curl/REST failure exits non-zero.

EXIST_REST="${EXIST_REST:-http://localhost:8081/exist/rest/db}"
AUTH="${EXIST_AUTH:-admin:}"

query() {
  local label="$1" xq="$2" out
  if ! out=$(curl -sf -u "$AUTH" -G "$EXIST_REST" \
    --data-urlencode "_query=$xq" \
    --data-urlencode "_wrap=no"); then
    printf 'bibl coverage: %s REST query failed (EXIST_REST=%s)\n' "$label" "$EXIST_REST" >&2
    exit 1
  fi
  printf '%s' "$out"
}

ptrs_raw=$(query ptrs 'string-join(distinct-values(collection("/db/apps/expanded")//@target[starts-with(., "bm:")]), "&#10;")')
tags_raw=$(query tags 'string-join(distinct-values(doc("/db/apps/EthioStudies/citations.xml")//@tag), "&#10;")')
excs_raw=$(query exceptions 'string-join(doc("/db/apps/catalogs/bibl-exceptions.xml")//*:entry/@bm, "&#10;")')

mapfile -t ptrs < <(printf '%s\n' "$ptrs_raw")
mapfile -t tags < <(printf '%s\n' "$tags_raw")
mapfile -t excs < <(printf '%s\n' "$excs_raw")

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
