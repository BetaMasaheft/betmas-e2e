# Catalog Phase 1 benchmarks

Run `npm run bench:catalog` against the local compose stack to write
`catalog-phase1-baseline.json`. The artifact uses the benchmark tracker's
`name`, `unit`, `value`, and `extra` shape; `value` is nearest-rank p95.

- HP1 is an xst query over 1,000 fixed mixed IDs: persons, places and
  institutions, text-part `#` IDs, retired IDs, then record IDs as fill.
- HP2 measures `/api/listRepositoriesName` plus the institution typeahead
  route `/api/idlookup?id=INS00`.
- HP4 rotates representative `bm:` pointers through the server-rendered
  `/bibliography` path.

Set `CATALOG_BENCH_SAMPLES=20` for the recorded baseline. The ordinary
`npm run bench:container` harness also records smaller HTTP smoke probes for
HP1, HP2, and HP4 alongside its existing page workloads in
`benchmark-results.json`; the Phase 1 run is preserved as
`catalog-phase1-cypress.json`.
