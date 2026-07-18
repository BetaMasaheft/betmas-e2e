# betmas-e2e
[![Cypress Tests](https://github.com/duncdrum/betmas-e2e/actions/workflows/main.yml/badge.svg)](https://github.com/duncdrum/betmas-e2e/actions/workflows/main.yml)

 end to end test for betamasaheft

 ## Requirements

- node `v22` or later

 ### Environment variables

 This test suite assumes the presence of the following environment variables:
 
 - `PASSWORD_CATALOGUER` with the password for test user `JinntecCatalogue`
 - `PASSWORD_LEXICOGRAPHER` with the password for test user `JinntecLexicon` (production Dillmann login smoke in `05-contributor/lexicon.cy.js`; contributor depth is in the Dillmann app repo)

## How to use

You can see the results of the latest run on the `Actions` tab here on Github. To run the tests locally open a local copy of this repository in your shell:

1. `npm install` (you only need to do this once)

2. `npx cypress run -b firefox`

### Against a local Instance

You can change the URL of the instance under test via the `--config` flag, eg.:

1. `npx cypress --config baseUrl=http://localhost:8080/exist/apps/BetMasWeb/ open` 

## Active tags

The suite uses `@cypress/grep` tags to keep container and production runs aligned without deleting tests.

| Tag | Purpose |
|-----|---------|
| `@container` | Default tag for specs that belong to the Docker-aligned test suite |
| `@container-only` | Excluded from production CI — container-specific behaviour/data or currently fails on production |
| `@production-only` | Excluded from container CI — depends on production-only services (e.g. collatex on host `:8081`, Dillmann routing, external WAF) |
| `@auth` | Spec needs `CYPRESS_PASSWORD_CATALOGUER` and/or `CYPRESS_PASSWORD_LEXICOGRAPHER` |
| `@slow` | Spec is intentionally slow and useful for focused/local runs |
| `@perf` | Benchmark specs — excluded from both gates, run by `benchmark.yml` |

### Current CI selection

- Container workflow (`test-container.yml`): excludes `@production-only` and `@perf`.
- Production workflow (`main.yml`): excludes `@container-only` and `@perf`.

**Tag syntax note:** space-separated `grepTags` entries are OR-ed; to exclude several tags at once join them with `+` (e.g. `grepTags=-@production-only+-@perf`).

### Local examples

Run the full tagged container-oriented subset:

```bash
npx cypress run --config baseUrl=http://localhost:8080/exist/apps/BetMasWeb/ --expose grepTags="@container",grepFilterSpecs=true,grepOmitFiltered=true
```

Run the production-safe subset:

```bash
npx cypress run --expose grepTags="-@container-only",grepFilterSpecs=true,grepOmitFiltered=true
```

Run auth-tagged specs only:

```bash
npx cypress run --expose grepTags="@auth",grepFilterSpecs=true,grepOmitFiltered=true
```

## Third-party hosts

Records link out to external resources (lexica, IIIF viewers, aggregators). The app's contract is **emitting the correct link**, not the third party's uptime, and external WAFs routinely block CI runner traffic (F5 block pages, 404s). Convention for all specs:

- Assert emitted `href`s, form actions, and query params — never `cy.request()`/`cy.visit()` an external host.
- `cy.requestFollowingAppRedirects` enforces this: it throws when a redirect chain leaves the app origin.

## Benchmarks

Server-timing benchmarks for the known slow pages live in `cypress/e2e/08-performance/slow-pages.cy.js` (`@perf @slow`): three sequential `cy.request` samples per page, the **median** is recorded. Budgets per page and target are in `cypress/fixtures/perf-budgets.json`; going over budget logs a warning but never fails a run (report-only).

- **CI:** `.github/workflows/benchmark.yml` runs daily against the container and pushes the series to the `gh-pages` branch (`bench/container/`) via [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark); regressions >150% get a commit comment. A production baseline lives under `bench/production/` and is refreshed manually (`benchmark-prod.yml` via workflow dispatch) since production changes are infrequent.
- **Local run:** `npm run bench:container` (against `localhost:8080`); the results land in `benchmark-results.json` (gitignored, path overridable via `BENCHMARK_OUT`).
- **Viewing the charts:** served via GitHub Pages —
  [container series](https://betamasaheft.github.io/betmas-e2e/bench/container/) ·
  [production baseline](https://betamasaheft.github.io/betmas-e2e/bench/production/)

## Local code analysis (Codacy CLI)

Uses [codacy-cli-v2](https://github.com/codacy/codacy-cli-v2) in **local mode** (no BetaMasaheft org on Codacy Cloud required).

**One-time setup** (after `npm install`):

```bash
npm run codacy:init
```

This creates `.codacy/codacy.yaml` (ESLint + Node 22 only), installs tool runtimes, and patches Cypress globals into the generated ESLint config.

**Analyze Cypress specs:**

```bash
npm run codacy:analyze -- cypress/e2e/api/api-collatex-cross-service.cy.js
# or whole tree:
npm run codacy:analyze -- cypress/
```

**Notes:**

- `BetaMasaheft/betmas-e2e` is not on Codacy Cloud — use local CLI only (`npm run codacy:analyze`). Codacy MCP is disabled in this project (`.cursor/mcp.json` stub, `.cursor/permissions.json`, `.cursor/rules/codacy-local-only.mdc`).
- Helpers live under `.codacy/` (`patch-eslint.mjs`, `languages-config.yaml`, `codacy.yaml`).
- `.codacy/tools-configs/` is gitignored by Codacy — re-run `npm run codacy:init` after deleting `.codacy/` on a fresh clone.