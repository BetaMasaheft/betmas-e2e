window.BENCHMARK_DATA = {
  "lastUpdate": 1787256617891,
  "repoUrl": "https://github.com/BetaMasaheft/betmas-e2e",
  "entries": {
    "Production slow pages": [
      {
        "commit": {
          "author": {
            "email": "duncdrum@users.noreply.github.com",
            "name": "Duncan Paterson",
            "username": "duncdrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "id": "4b39ea2b9e155fc2fc4626f69ad1f863ab655305",
          "message": "Merge pull request #71 from BetaMasaheft/dp-bench\n\nfeat(benchmarks): server-timing benchmarks with tracked history",
          "timestamp": "2026-07-14T14:05:24Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/4b39ea2b9e155fc2fc4626f69ad1f863ab655305"
        },
        "date": 1784040061114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "unit": "ms",
            "value": 12792,
            "extra": "target=production budget=35000ms samples=[13872, 12792, 11119]"
          },
          {
            "name": "manuscripts-browse",
            "unit": "ms",
            "value": 2649,
            "extra": "target=production budget=25000ms samples=[2771, 2649, 2363]"
          },
          {
            "name": "catalogues-list",
            "unit": "ms",
            "value": 1113,
            "extra": "target=production budget=25000ms samples=[893, 1113, 1273]"
          },
          {
            "name": "work-text",
            "unit": "ms",
            "value": 36516,
            "extra": "target=production budget=60000ms samples=[36516, 59555, 31618]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duncan Paterson",
            "username": "duncdrum",
            "email": "duncdrum@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "db406d9463fed8346d34df9662a5d958b8100cc2",
          "message": "Merge pull request #73 from BetaMasaheft/dp-api",
          "timestamp": "2026-07-18T10:51:23Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/db406d9463fed8346d34df9662a5d958b8100cc2"
        },
        "date": 1784639899574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 7038,
            "unit": "ms",
            "extra": "target=production budget=30000ms samples=[9404, 7038, 5963]"
          },
          {
            "name": "manuscripts-browse",
            "value": 2110,
            "unit": "ms",
            "extra": "target=production budget=10000ms samples=[2110, 1911, 2394]"
          },
          {
            "name": "catalogues-list",
            "value": 951,
            "unit": "ms",
            "extra": "target=production budget=5000ms samples=[878, 1431, 951]"
          },
          {
            "name": "decorations",
            "value": 32948,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[32948, 37632, 32564]"
          },
          {
            "name": "additions",
            "value": 29735,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[28726, 29735, 30731]"
          },
          {
            "name": "work-text",
            "value": 8013,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[8940, 7737, 8013]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duncan Paterson",
            "username": "duncdrum",
            "email": "duncdrum@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f353b5e9588a11b08c4c784f1b551fdbda998de",
          "message": "test(collatex,dillmann): flip 4 specs dual-env, already work (#80)\n\n* test(collatex,dillmann): flip 4 specs dual-env, already work\n\nVerified directly against the container (booted via BetMas's compose +\nCI override, release-expanded image pulled fresh):\n- api-collatex-cross-service.cy.js + collate.cy.js's live flow: blocked\n  on BetMas#139 (COLLATEX_URL never set) + BetMasWeb#41 (dtslib\n  FORX0003), both merged 2026-07-23.\n- dillmann.cy.js + lexicon.cy.js: blocked on Dillmann#558's videash.js\n  crash, fixed by Dillmann#559 (merged 2026-07-23) and baked into a\n  fresh release-expanded build the same day.\n\nAlso fixes package.json's test:container/bench:container scripts: the\nbaseUrl still pointed at the old bare eXist app path\n(/exist/apps/BetMasWeb/) instead of root, which is what nginx has\nactually proxied since BetMas#130 - test-container.yml's CI config\nalready had this right, the local dev scripts had just drifted.\n\n* test(dillmann): flip lemma.cy.js dual-env, already works\n\nStated blocker (Dillmann/ routes 405 in container) was stale, same as\nits dillmann.cy.js/lexicon.cy.js siblings. Verified directly: both\ntests pass consistently against the container once the corpus has had\na moment to settle after boot - an earlier check against a\nfreshly-booted, not-yet-settled container gave a false negative\n(kwicsearch API call never fired), not a real blocker.\n\n* test(apidoc): un-skip regression test for the overflow bug, now fixed\n\n<pre> examples inside .w3-quarter columns were overflowing their\ncontainer instead of wrapping (confirmed: scrollWidth up to 2x\nclientWidth). Test passes clean now that the underlying CSS is fixed.\n\nRefs #3\nFixes BetaMasaheft/BetMasWeb#43\n\n* test(support): remove Map container not found bypass\n\nThe bypass was masking a real bug in BetMasWeb's geojsonmap.js, not a\n3rd-party-library quirk to work around. Now that the source is fixed,\nremoving the bypass so a regression would fail loudly again.\n\nRefs #1\nFixes BetaMasaheft/BetMasWeb#43\n\n* test(support): remove form is not defined bypass, now fixed\n\nThe existing advancedSearch submit test was already exercising this\nexact click - it passed silently because the bypass swallowed the\nuncaught exception. Now that the source is fixed, that test is real\nregression coverage without the bypass masking it.\n\nRefs #14\nFixes BetaMasaheft/BetMasWeb#43\n\n* test(additions): un-skip and fix text-input search regression test\n\nA literal apostrophe used to crash the server-side query - fixed in\nBetMasWeb. The test now actually types the reported input and submits,\ninstead of only checking the field is visible.\n\nRefs #12\nFixes BetaMasaheft/BetMasWeb#43\n\n* test(guidelines): flip dual-env, now wired into the container\n\nGuidelines was never routed anywhere in the container before - fixed\nin BetMas#140. Merged the two describe blocks: 2 of 3 tests verified\nworking end to end (search page loads, quick-links-by-id works). The\nthird is skipped, not fixed - it asserts a specific pagination\nposition for a search result, a content-order assumption that depends\non guidelines-data.xar's release snapshot rather than on routing.\n\nAlso fixed both container URLs to use a trailing slash (Guidelines/,\nmatching the already-working Dillmann/ convention) - the bare form\nhits an nginx auto-redirect that's missing its port in this container\nsetup, unrelated to the routing fix itself.\n\nRefs #67\nFixes BetaMasaheft/BetMas#140",
          "timestamp": "2026-07-24T18:37:45Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/0f353b5e9588a11b08c4c784f1b551fdbda998de"
        },
        "date": 1784979198571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 20816,
            "unit": "ms",
            "extra": "target=production budget=30000ms samples=[14944, 20816, 30384]"
          },
          {
            "name": "manuscripts-browse",
            "value": 5664,
            "unit": "ms",
            "extra": "target=production budget=10000ms samples=[9245, 5664, 2887]"
          },
          {
            "name": "catalogues-list",
            "value": 1065,
            "unit": "ms",
            "extra": "target=production budget=5000ms samples=[1087, 1065, 921]"
          },
          {
            "name": "decorations",
            "value": 48765,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[114805, 48765, 38539]"
          },
          {
            "name": "additions",
            "value": 37972,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[31647, 40439, 37972]"
          },
          {
            "name": "work-text",
            "value": 11254,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[10453, 13227, 11254]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "977c8e6a7e309e01b030a04ad2f135f012b658f0",
          "message": "chore(deps-dev): bump cypress from 15.18.1 to 15.20.1 (#84)\n\nBumps [cypress](https://github.com/cypress-io/cypress) from 15.18.1 to 15.20.1.\n- [Release notes](https://github.com/cypress-io/cypress/releases)\n- [Changelog](https://github.com/cypress-io/cypress/blob/develop/CHANGELOG.md)\n- [Commits](https://github.com/cypress-io/cypress/compare/v15.18.1...v15.20.1)\n\n---\nupdated-dependencies:\n- dependency-name: cypress\n  dependency-version: 15.20.1\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-17T10:40:31Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/977c8e6a7e309e01b030a04ad2f135f012b658f0"
        },
        "date": 1787256616999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 9150,
            "unit": "ms",
            "extra": "target=production budget=30000ms samples=[9150, 11961, 7039]"
          },
          {
            "name": "manuscripts-browse",
            "value": 3829,
            "unit": "ms",
            "extra": "target=production budget=10000ms samples=[2960, 3829, 8603]"
          },
          {
            "name": "catalogues-list",
            "value": 2921,
            "unit": "ms",
            "extra": "target=production budget=5000ms samples=[4356, 2921, 1804]"
          },
          {
            "name": "decorations",
            "value": 30068,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[30068, 27593, 52659]"
          },
          {
            "name": "additions",
            "value": 38860,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[34680, 38860, 109032]"
          },
          {
            "name": "work-text",
            "value": 10401,
            "unit": "ms",
            "extra": "target=production budget=60000ms samples=[10401, 11810, 9688]"
          }
        ]
      }
    ]
  }
}