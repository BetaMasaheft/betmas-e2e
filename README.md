# betmas-e2e

[![Test against Container](https://github.com/BetaMasaheft/betmas-e2e/actions/workflows/test-container.yml/badge.svg)](https://github.com/BetaMasaheft/betmas-e2e/actions/workflows/test-container.yml)
[![Cypress Tests](https://github.com/BetaMasaheft/betmas-e2e/actions/workflows/main.yml/badge.svg)](https://github.com/BetaMasaheft/betmas-e2e/actions/workflows/main.yml)

End-to-end tests for Beta maṣāḥǝft. The PR gate is **Test against Container** (`test-container.yml`). `main.yml` is the production Firefox run (push to `main` and Saturday cron).

## Requirements

- node `v22` or later

### Environment variables

This test suite assumes the presence of the following environment variables (Cypress reads them as `CYPRESS_*`):

- `CYPRESS_PASSWORD_CATALOGUER` 
- `CYPRESS_PASSWORD_LEXICOGRAPHER` 

## How to use

Latest runs are on the GitHub **Actions** tab. Locally:

```bash
npm install   # once
npm run test:container   # compose stack at http://localhost:8080/
npm run test:prod        # https://betamasaheft.eu (Firefox)
```

Default `baseUrl` in `cypress.config.mjs` is production (`https://betamasaheft.eu`). The composed stack is reached through nginx on **port 8080**, not `/exist/apps/BetMasWeb/`.

```bash
npx cypress open --config baseUrl=http://localhost:8080/
# or
npm run test:container:open
```

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

Container subset (same tags as CI; `npm run test:container` also drops `@slow`):

```bash
npx cypress run --config baseUrl=http://localhost:8080/ --expose grepTags=-@production-only+-@perf,grepFilterSpecs=true,grepOmitFiltered=true
```

Production-safe subset (same tags as `main.yml`):

```bash
npx cypress run --expose grepTags=-@container-only+-@perf,grepFilterSpecs=true,grepOmitFiltered=true
```

Auth-tagged specs only:

```bash
npx cypress run --expose grepTags=@auth,grepFilterSpecs=true,grepOmitFiltered=true
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
  [combined overlay](https://betamasaheft.github.io/betmas-e2e/bench/) (container teal, production orange; date axis, sample min–max band, budget dashed line).
  [container only](https://betamasaheft.github.io/betmas-e2e/bench/container/). 
  [production only](https://betamasaheft.github.io/betmas-e2e/bench/production/).
  Chart HTML lives in `pages/bench/` on `main` and is copied to `gh-pages` by `publish-bench-pages.yml` (also after each benchmark workflow). The daily container series is capped at 90 points (`max-items-in-chart`).

## Lighthouse

`.github/workflows/lighthouse.yml` is a **manual** front-end audit of a few fast production pages (`lighthouserc.json`). It complements the TTFB benchmarks: Lighthouse gives up on the slow pages those cover. Assertions are warn-only until a baseline is tuned; there is no cron yet.

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
