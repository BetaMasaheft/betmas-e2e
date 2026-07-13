# betmas-e2e
[![Cypress Tests](https://github.com/duncdrum/betmas-e2e/actions/workflows/main.yml/badge.svg)](https://github.com/duncdrum/betmas-e2e/actions/workflows/main.yml)

 end to end test for betamasaheft

 ## Requirements

- node `v22` or later

 ### Environment variables

 This test suite assumes the presence of the following environment variables:
 
 - `PASSWORD_CATALOGUER` with the password for test user `JinntecCatalogue`

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
| `@auth` | Spec needs `CYPRESS_PASSWORD_CATALOGUER` |
| `@slow` | Spec is intentionally slow and useful for focused/local runs |

### Current CI selection

- Container workflow (`test-container.yml`): excludes `@production-only`.
- Production workflow (`main.yml`): excludes `@container-only`.

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