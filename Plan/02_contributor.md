# Contributor User Story - Cataloguer

We collect necessary workflows for cataloguer users here. Including steps that require external services or locations.

## Sprint status (2026-07-14)

**Shipped:** [PR #70](https://github.com/BetaMasaheft/betmas-e2e/pull/70) merged — read-only policy (session POSTs recognised by body; all other writes blocked), both test users provisioned in container CI, lexicon prod smoke. Dillmann [PR #555](https://github.com/BetaMasaheft/Dillmann/pull/555) merged — same read-only policy in the Dillmann suite, `user_admin.cy.js` + `editor.cy.js` refactored to read-only; write flows kept behind `CYPRESS_ALLOW_WRITES=1` (disposable local stacks only).

**Next up:** cataloguer activity counts (personal page still asserts URL only); re-enable Dillmann create-entry tests when the New Entry UI returns. Confirmation-page uncaught exceptions now [BetMasWeb#64](https://github.com/BetaMasaheft/BetMasWeb/issues/64); Dillmann exception bypass [Dillmann#571](https://github.com/BetaMasaheft/Dillmann/issues/571).

---

## 1 Create new work (or other type of) record

1. GO to `[URL](https://betamasaheft.eu/)`
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. In the Navigation bar (right), select "work" (or other type of record) and click "new"
4. Fill the form and click "create new entry"
5. Download the XML file, to be further edited in Oxygen https://betamasaheft.eu/Guidelines/?id=newEntry
6. **NB NEGATIVE**: the Login button is always present in the Navigation bar but since the latest release it only works from the homepage, not from subpages

**NOTE**: Form submission introduces side effects (creates new entries). E2E tests only cover form filling, not submission. Full workflow testing should be done manually or in a dedicated test environment.

**E2E:** `cataloguer.cy.js` (`@auth`) — login from subpage, new-work form fill (submit/XML download **commented out**), personal-page URL only (test user not in editors list).

- [ ] Done
- [x] In progress

## 2 See activity

1. GO to `[URL](https://betamasaheft.eu/)`
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. In the Navigation bar (left), hover over "Hi, USERNAME" and select "Your Personal Page"
4. This takes you to https://betamasaheft.eu/user/USERNAME (e.g. https://betamasaheft.eu/user/Eugenia)
5. See the personal page documenting activities (Your latest 50 changes in files out of XXX you recorded in a change element / The last 50 pages you visited / Your queries / Your xpaths). **NB NEGATIVE**: in some cases the xquery does not do the matching right, in case of Eugenia=ES the page only shows **4** files with the change element even though they are several thousand; for most users all is correct though, possibly related to user management issue

**E2E:** Same spec as §1 — URL contains username only; activity counts not asserted.

- [ ] Done
- [x] In progress

# Contributor User Story - Lexicon

We collect necessary workflows for lexicon users here. Including steps that require external services or locations.

**NOTE**: Lexicon contributor workflows that change Dillmann data are **not** submitted in automation (same policy as cataloguer §1). **§3–§5** are covered in the [Dillmann](https://github.com/BetaMasaheft/Dillmann) app repo: `test/cypress/e2e/user_admin.cy.js` (activity; create forms currently skipped — New Entry UI disabled app-side) and `editor.cy.js` (update form opens pre-filled, no Confirm). The Dillmann suite is read-only by default; the actual save flows exist but only run with `CYPRESS_ALLOW_WRITES=1` against a disposable local stack. This repo keeps a thin production integration smoke in `cypress/e2e/05-contributor/lexicon.cy.js` (`@auth`, `@production-only`). Public search/viewing remains in `cypress/e2e/03-menu/dillmann.cy.js` and `cypress/e2e/06-user/lemma.cy.js`.

## 3 See activity

1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. Click on "Hi, USERNAME!"
4. This takes you to the personal page
5. See the page documenting activities (Your made XXX changes in these files after the last conversion of the data from the original txt / The last 50 pages you visited)

**E2E:** Dillmann `user_admin.cy.js` — visit history + change-count summary (structure asserted; count may legitimately be 0 after a fresh conversion).

- [x] Done

## 4 Create new entry
1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
4. Click "New Entry" button
5. Fill the form, using mark up as in the guidelines on the right
6. Click "Confirm", this saves the entry (in the backend it is transformed to xml and saved in the DillmannData/new) and takes you to the page with the link to the result
**NB NEGATIVE**: on the form page it is first often necessary to repeat the login procedure as otherwise one sometimes cannot write the results

**E2E:** Dillmann `user_admin.cy.js` — duplicate-lemma warning + novel-lemma form + gated Confirm save, all **skipped**: the New Entry UI is currently disabled app-side (no `newentry.html` route). Test bodies kept for re-enabling.

- [ ] Done
- [x] In progress (blocked on app: New Entry UI disabled)

## 5 Edit existing entry
1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
4. Go to the entry that needs to be edited, e.g. https://betamasaheft.eu/Dillmann/lemma/La7ad658e1d5b4858b709e05798f68a89
5. Click "Update"
6. Edit the entry in the form, using mark up as in the guidelines on the right
7. Click "Confirm", this saves the entry and takes you to the page with the link to the result
**NB NEGATIVE**: on the form page it is first often necessary to repeat the login procedure as otherwise one sometimes cannot write the results
**NB NEGATIVE**: after each change saved one gets the issue with duplicate session cookies and has to clean the browser cookies (at least in chrome) https://github.com/BetaMasaheft/Dillmann/issues/387

**E2E:** Dillmann `editor.cy.js` — update form opens pre-filled + change message typed; Confirm never clicked in CI (read-only policy). Full save flow (incl. the §5 NB-NEGATIVE failure modes: session loss #387, transformer errors) runs only with `CYPRESS_ALLOW_WRITES=1` on a disposable local stack.

- [x] Done (CI read-only; write flow env-gated)

