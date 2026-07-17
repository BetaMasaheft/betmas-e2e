# Legacy-parity fixtures

Golden responses captured from the **legacy production stack** for every surface
scheduled to be replaced during the migration. They freeze what production
answers *today* so that each replacement component (the OpenAPI-based API app,
the QLever SPARQL service, the containerized collatex service) can be gated on
reproducing the same shapes — or on a documented, reviewed delta — **before**
any production routing flips to it.

- `<slug>.body.*` — raw response body, byte-exact as served (normalize at
  compare time, e.g. `jq -S`, never at capture time)
- `<slug>.meta.json` — url, status, content type, timing, size, sha256, date
- `manifest.json` — all of the above in one file per capture run

Captured by [`scripts/capture-legacy-parity.sh`](../../../scripts/capture-legacy-parity.sh).
Re-run it only deliberately (it samples production — gentle by design: pre-flight
health check, sequential light GETs, pauses, one-shot). Review the diff before
committing a re-capture: a changed fixture means production behaviour changed.

Note: some probes document *absence or failure* as the baseline — a legacy
`404`/`500` capture means the replacement can only improve on that surface
(document the delta rather than "fixing" the fixture).

## Alignment with the other suites

- The three SPARQL queries are **the same queries** as sparql-service's golden
  fixtures (`test/fixtures/queries/*.rq`), so the legacy Fuseki answers here and
  the QLever goldens there answer identical questions — a direct envelope
  comparison for the SPARQL cutover.
- The `sparql-relations`/`RDFXML`/`RDFJSON` surfaces mirror the routes the API
  app's own suite exercises (`sparqlRest` spec) — the actual consumer seams.
- The collatex fixture covers the **web app's `/api/collatex` wrapper**;
  collatex-service's own goldens cover the servlet beneath it. Two layers, both
  needed, no duplication.

## Captured findings that will matter at cutover

- Legacy `/api/SPARQL/json` serialization is **nonstandard and
  cardinality-dependent**: 0 rows → `"bindings": null`, 1 row → an object,
  n rows → an array (`sparql-person-properties` / `sparql-count-triples` /
  `sparql-subjects`). Standard SPARQL-JSON (what QLever emits) is always an
  array — every consumer of this endpoint either needs the quirk shimmed or a
  migration to the standard shape. Decide and document before the SPARQL flip.
- `/api/SPARQL/relations/{id}` is a custom flat JSON object, not SPARQL-JSON.
- Legacy Fuseki content is **stale** relative to the corpus (e.g.
  `PRS9866Walay` has zero triples despite existing in the data): at cutover,
  the replacement legitimately returning *more* data than these fixtures is
  expected — compare envelopes strictly, content with that caveat.
- Legacy 500s captured as baselines: bare `/api/clavis` and
  `/api/dts/collections?id=<work-PID>` — replacements answering these properly
  are documented improvements.
