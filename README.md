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