# Contributor User Story - Cataloguer

We collect necessary workflows for cataloguer users here. Including steps that require external services or locations.

## Sprint status (2026-07-13)

**Shipped:** Container CI green on [PR #70](https://github.com/BetaMasaheft/betmas-e2e/pull/70). Lexicon contributor tests split to Dillmann repo; betmas-e2e `lexicon.cy.js` is integration smoke only. Read-only policy enforced via `cypress/support/read-only.js` (no Confirm / no data writes in automation).

**Next up:** Merge PR #70; land Dillmann `user_admin.cy.js`; refactor Dillmann `editor.cy.js` to read-only (update form only); cataloguer activity counts (#23).

---

## 1 Create new work (or other type of) record

1. GO to `[URL](https://betamasaheft.eu/)`
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. In the Navigation bar (right), select "work" (or other type of record) and click "new"
4. Fill the form and click "create new entry"
5. Download the XML file, to be further edited in Oxygen https://betamasaheft.eu/Guidelines/?id=newEntry
6. **NB NEGATIVE**: the Login button is always present in the Navigation bar but since the latest release it only works from the homepage, not from subpages

**NOTE**: Form submission introduces side effects (creates new entries). E2E tests only cover form filling, not submission. Full workflow testing should be done manually or in a dedicated test environment.

**E2E:** `cataloguer.cy.js` (`@auth`) — login from subpage, new-work form fill (submit/XML download **commented out**), personal-page URL only (#23: test user not in editors list).

- [ ] Done
- [x] In progress

## 2 See activity

1. GO to `[URL](https://betamasaheft.eu/)`
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. In the Navigation bar (left), hover over "Hi, USERNAME" and select "Your Personal Page"
4. This takes you to https://betamasaheft.eu/user/USERNAME (e.g. https://betamasaheft.eu/user/Eugenia)
5. See the personal page documenting activities (Your latest 50 changes in files out of XXX you recorded in a change element / The last 50 pages you visited / Your queries / Your xpaths). **NB NEGATIVE**: in some cases the xquery does not do the matching right, in case of Eugenia=ES the page only shows **4** files with the change element even though they are several thousand; for most users all is correct though, possibly related to user management issue

**E2E:** Same spec as §1 — URL contains username only; activity counts not asserted (#23).

- [ ] Done
- [x] In progress

# Contributor User Story - Lexicon

We collect necessary workflows for lexicon users here. Including steps that require external services or locations.

**NOTE**: Lexicon contributor workflows that change Dillmann data are **not** submitted in automation (same policy as cataloguer §1). **§3–§5** are covered in the [Dillmann](https://github.com/BetaMasaheft/Dillmann) app repo: `test/cypress/e2e/user_admin.cy.js` (activity, create forms — Confirm not clicked) and `editor.cy.js` (**pending read-only refactor** — today still submits Confirm; target is update form only). This repo keeps a thin production integration smoke in `cypress/e2e/05-contributor/lexicon.cy.js` (`@auth`, `@production-only`). Public search/viewing remains in `cypress/e2e/03-menu/dillmann.cy.js` and `cypress/e2e/06-user/lemma.cy.js`.

## 3 See activity

1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
3. Click on "Hi, USERNAME!"
4. This takes you to the personal page
5. See the page documenting activities (Your made XXX changes in these files after the last conversion of the data from the original txt / The last 50 pages you visited)

**E2E:** Dillmann `user_admin.cy.js` — visit history + change-count summary.

- [ ] Done
- [x] In progress

## 4 Create new entry
1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
4. Click "New Entry" button
5. Fill the form, using mark up as in the guidelines on the right
6. Click "Confirm", this saves the entry (in the backend it is transformed to xml and saved in the DillmannData/new) and takes you to the page with the link to the result
**NB NEGATIVE**: on the form page it is first often necessary to repeat the login procedure as otherwise one sometimes cannot write the results

**E2E:** Dillmann `user_admin.cy.js` — duplicate-lemma warning + novel-lemma form; Confirm not automated.

- [ ] Done
- [x] In progress

## 5 Edit existing entry
1. GO to https://betamasaheft.eu/Dillmann/
2. In Navigation bar (left), select Login, in the dropdown insert login credentials
4. Go to the entry that needs to be edited, e.g. https://betamasaheft.eu/Dillmann/lemma/La7ad658e1d5b4858b709e05798f68a89
5. Click "Update"
6. Edit the entry in the form, using mark up as in the guidelines on the right
7. Click "Confirm", this saves the entry and takes you to the page with the link to the result
**NB NEGATIVE**: on the form page it is first often necessary to repeat the login procedure as otherwise one sometimes cannot write the results
**NB NEGATIVE**: after each change saved one gets the issue with duplicate session cookies and has to clean the browser cookies (at least in chrome) https://github.com/BetaMasaheft/Dillmann/issues/387

**E2E:** Dillmann `editor.cy.js` — update form opens; **Confirm must not run in automation** (read-only policy; refactor pending).

- [ ] Done
- [x] In progress

