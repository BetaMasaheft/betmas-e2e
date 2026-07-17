#!/usr/bin/env bash
# Capture golden response fixtures from the legacy production stack.
#
# These fixtures freeze the response shapes of every surface scheduled to be
# replaced during the migration (native /api implementation, Fuseki SPARQL,
# collatex servlet, IIIF manifest). A replacement component must reproduce
# these shapes — or ship with a documented, reviewed delta — before any
# production routing flips to it. Some probes document *absence or failure* as
# the baseline (a legacy 404/500 means the replacement can only improve).
#
# Capture discipline: production degrades under aggressive sampling, so this
# script is deliberately gentle — sequential light GETs, a pause between
# requests, a real user agent (blank UAs are dropped by the server), a
# pre-flight health check, and it is meant to be run deliberately and rarely,
# never in CI on a schedule.
#
# Usage:  scripts/capture-legacy-parity.sh [slug ...]
#         With slugs: re-capture only those surfaces (manifest is rebuilt from
#         all meta files either way).
# Output: cypress/fixtures/legacy-parity/<slug>.body.* + <slug>.meta.json + manifest.json

set -u
HOST='https://betamasaheft.eu'
UA='Mozilla/5.0 (betmas-e2e legacy-parity-capture)'
OUT="$(cd "$(dirname "$0")/.." && pwd)/cypress/fixtures/legacy-parity"
PAUSE=10
MAXTIME=90

# slug|path (URL-encoded where needed; repeated params allowed).
# Redirects are NOT followed — a 302 and its Location are part of the shape;
# the followed target is captured as its own surface where relevant.
SURFACES=(
  'dts-entry|/api/dts'
  'dts-collections-root|/api/dts/collections'
  'dts-collections-root-followed|/api/dts/collections?id=https%3A%2F%2Fbetamasaheft.eu'
  'dts-collections-work-pid|/api/dts/collections?id=https%3A%2F%2Fbetamasaheft.eu%2FLIT1385Fekkar'
  'dts-navigation|/api/dts/navigation?id=https%3A%2F%2Fbetamasaheft.eu%2FLIT1709Kebran'
  'dts-document|/api/dts/document?id=https%3A%2F%2Fbetamasaheft.eu%2FLIT1709Kebran'
  'iiif-manifest|/api/iiif/ESdz010/manifest'
  # The three queries mirror sparql-service's golden queries (test/fixtures/queries/)
  # so legacy Fuseki and QLever answer the SAME questions — envelope comparison.
  'sparql-count-triples|/api/SPARQL/json?query=SELECT%20(COUNT(*)%20AS%20%3Fn)%20WHERE%20%7B%20%3Fs%20%3Fp%20%3Fo%20%7D'
  'sparql-person-properties|/api/SPARQL/json?query=SELECT%20%3Fp%20%3Fo%20WHERE%20%7B%20%3Chttps%3A%2F%2Fbetamasaheft.eu%2FPRS9866Walay%3E%20%3Fp%20%3Fo%20.%20FILTER(%21isBlank(%3Fo))%20%7D%20ORDER%20BY%20%3Fp%20%3Fo'
  'sparql-subjects|/api/SPARQL/json?query=SELECT%20%3Fs%20WHERE%20%7B%20%3Fs%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2FisPartOf%3E%20%3Chttps%3A%2F%2Fbetamasaheft.eu%3E%20%7D%20ORDER%20BY%20%3Fs'
  # Consumer routes as exercised by the API app's own suite (sparqlRest spec)
  'sparql-relations-work|/api/SPARQL/relations/LIT1367Exodus'
  'rdfxml-work|/api/RDFXML/manuscripts/LIT1367Exodus'
  'rdfjson-work|/api/RDFJSON/manuscripts/LIT1367Exodus'
  'fuseki-ask|/fuseki/betamasaheft/query?query=ASK%7B%7D'
  'collatex-two-witnesses|/api/collatex?format=json&dts=https%3A%2F%2Fbetamasaheft.eu%2FESamm007.5va%2Chttps%3A%2F%2Fbetamasaheft.eu%2FESmr001.93rb'
  'clavis-bare|/api/clavis'
  'clavis-all|/api/clavis/all'
  'count|/api/count'
)

mkdir -p "$OUT"

echo "== pre-flight: production health =="
code=$(curl -so /dev/null -A "$UA" -w '%{http_code}' --max-time 60 "$HOST/")
if [ "$code" != "200" ]; then
  echo "ABORT: $HOST/ returned $code — production unhealthy, do not sample it now." >&2
  exit 1
fi
echo "home page 200 — proceeding"

captured_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

for entry in "${SURFACES[@]}"; do
  slug="${entry%%|*}"
  path="${entry#*|}"
  if [ $# -gt 0 ]; then
    case " $* " in *" $slug "*) ;; *) continue ;; esac
  fi
  url="$HOST$path"
  echo "-- $slug"
  body="$OUT/$slug.body.tmp"
  meta=$(curl -sS -A "$UA" --max-time "$MAXTIME" -o "$body" \
      -w '{"status":%{http_code},"content_type":"%{content_type}","redirect_url":"%{redirect_url}","time_total":%{time_total},"bytes":%{size_download}}' \
      "$url" || echo '{"status":0,"content_type":"","redirect_url":"","time_total":0,"bytes":0}')
  ctype=$(printf '%s' "$meta" | sed -n 's/.*"content_type":"\([^"]*\)".*/\1/p')
  case "$ctype" in
    *json*) ext='json' ;;
    *xml*)  ext='xml'  ;;
    *)      ext='txt'  ;;
  esac
  rm -f "$OUT/$slug".body.json "$OUT/$slug".body.xml "$OUT/$slug".body.txt
  mv "$body" "$OUT/$slug.body.$ext" 2>/dev/null || : > "$OUT/$slug.body.$ext"
  sha=$(shasum -a 256 "$OUT/$slug.body.$ext" | cut -d' ' -f1)
  printf '{"slug":"%s","url":"%s","file":"%s.body.%s","sha256":"%s","captured_at":"%s",%s\n' \
    "$slug" "$url" "$slug" "$ext" "$sha" "$captured_at" "${meta#\{}" > "$OUT/$slug.meta.json"
  echo "   $(printf '%s' "$meta" | sed -n 's/.*"status":\([0-9]*\).*/\1/p') ${ctype:-?} $(printf '%s' "$meta" | sed -n 's/.*"time_total":\([0-9.]*\).*/\1/p')s"
  sleep "$PAUSE"
done

jq -s '{surfaces: sort_by(.slug)}' "$OUT"/*.meta.json > "$OUT/manifest.json"
echo "== manifest: $(jq '.surfaces | length' "$OUT/manifest.json") surfaces in $OUT =="
