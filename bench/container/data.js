window.BENCHMARK_DATA = {
  "lastUpdate": 1785303753198,
  "repoUrl": "https://github.com/BetaMasaheft/betmas-e2e",
  "entries": {
    "Container slow pages": [
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
          "id": "4b39ea2b9e155fc2fc4626f69ad1f863ab655305",
          "message": "Merge pull request #71 from BetaMasaheft/dp-bench\n\nfeat(benchmarks): server-timing benchmarks with tracked history",
          "timestamp": "2026-07-14T14:05:24Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/4b39ea2b9e155fc2fc4626f69ad1f863ab655305"
        },
        "date": 1784038639786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 8611,
            "unit": "ms",
            "extra": "target=container budget=45000ms samples=[14933, 8611, 7177]"
          },
          {
            "name": "manuscripts-browse",
            "value": 2921,
            "unit": "ms",
            "extra": "target=container budget=30000ms samples=[4454, 2312, 2921]"
          },
          {
            "name": "catalogues-list",
            "value": 944,
            "unit": "ms",
            "extra": "target=container budget=30000ms samples=[3031, 944, 837]"
          },
          {
            "name": "decorations",
            "value": 23539,
            "unit": "ms",
            "extra": "target=container budget=30000ms samples=[24634, 23539, 22966]"
          },
          {
            "name": "additions",
            "value": 24023,
            "unit": "ms",
            "extra": "target=container budget=120000ms samples=[31109, 22347, 24023]"
          },
          {
            "name": "work-text",
            "value": 6231,
            "unit": "ms",
            "extra": "target=container budget=90000ms samples=[6231, 4764, 6520]"
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
          "id": "8582e42114a07bc85799912aabc9d19c4b843ff5",
          "message": "Merge pull request #72 from BetaMasaheft/dp-bench-cleanup",
          "timestamp": "2026-07-15T00:57:21Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/8582e42114a07bc85799912aabc9d19c4b843ff5"
        },
        "date": 1784092917958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 7487,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[16836, 7487, 5269]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1401,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[3360, 1401, 1090]"
          },
          {
            "name": "catalogues-list",
            "value": 545,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[2510, 545, 535]"
          },
          {
            "name": "decorations",
            "value": 14674,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[26931, 14674, 12515]"
          },
          {
            "name": "additions",
            "value": 19865,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[23262, 19865, 16138]"
          },
          {
            "name": "work-text",
            "value": 4050,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[6974, 4006, 4050]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "duncdrum",
            "username": "duncdrum",
            "email": "d.paterson@me.com"
          },
          "committer": {
            "name": "duncdrum",
            "username": "duncdrum",
            "email": "d.paterson@me.com"
          },
          "id": "d6537bbae94871f93482525287d2cb7c7a4aaf65",
          "message": "docs(readme): link served benchmark charts on GitHub Pages",
          "timestamp": "2026-07-15T09:16:49Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/d6537bbae94871f93482525287d2cb7c7a4aaf65"
        },
        "date": 1784179830720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5334,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6184, 5334, 4819]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1229,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[1487, 1229, 1225]"
          },
          {
            "name": "catalogues-list",
            "value": 741,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[752, 741, 481]"
          },
          {
            "name": "decorations",
            "value": 20785,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[20915, 20785, 20422]"
          },
          {
            "name": "additions",
            "value": 26065,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[26065, 26073, 25989]"
          },
          {
            "name": "work-text",
            "value": 3654,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4665, 3654, 3474]"
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
          "id": "b7e83875740bc7f7d2afb7751c00d04e2f351a73",
          "message": "Merge pull request #74 from BetaMasaheft/dp-fix-dts-anno",
          "timestamp": "2026-07-18T00:27:05Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/b7e83875740bc7f7d2afb7751c00d04e2f351a73"
        },
        "date": 1784351639371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4934,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6081, 4934, 4340]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1422,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[1541, 1422, 1349]"
          },
          {
            "name": "catalogues-list",
            "value": 447,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[447, 457, 435]"
          },
          {
            "name": "decorations",
            "value": 17149,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[17685, 16731, 17149]"
          },
          {
            "name": "additions",
            "value": 20527,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[21333, 19942, 20527]"
          },
          {
            "name": "work-text",
            "value": 2969,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4042, 2969, 2964]"
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
        "date": 1784439740230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5502,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[5962, 5502, 4854]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1322,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[1464, 1322, 1322]"
          },
          {
            "name": "catalogues-list",
            "value": 491,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[491, 449, 510]"
          },
          {
            "name": "decorations",
            "value": 21671,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[22658, 21671, 21349]"
          },
          {
            "name": "additions",
            "value": 24272,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[25013, 24272, 24009]"
          },
          {
            "name": "work-text",
            "value": 3710,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[5349, 3710, 3635]"
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
        "date": 1784527155134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4870,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6724, 4870, 4264]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1426,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[1945, 1426, 1246]"
          },
          {
            "name": "catalogues-list",
            "value": 485,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[587, 485, 451]"
          },
          {
            "name": "decorations",
            "value": 18424,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[19623, 18276, 18424]"
          },
          {
            "name": "additions",
            "value": 21515,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[22225, 21205, 21515]"
          },
          {
            "name": "work-text",
            "value": 4251,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[5229, 4213, 4251]"
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
        "date": 1784612474265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4383,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6473, 4327, 4383]"
          },
          {
            "name": "manuscripts-browse",
            "value": 906,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[2387, 906, 872]"
          },
          {
            "name": "catalogues-list",
            "value": 401,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[706, 401, 363]"
          },
          {
            "name": "decorations",
            "value": 15155,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[15820, 15155, 14467]"
          },
          {
            "name": "additions",
            "value": 18298,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[22293, 18298, 17606]"
          },
          {
            "name": "work-text",
            "value": 3625,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4615, 3348, 3625]"
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
        "date": 1784698818649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4690,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6170, 4436, 4690]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1216,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[2408, 1216, 1056]"
          },
          {
            "name": "catalogues-list",
            "value": 531,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[815, 531, 431]"
          },
          {
            "name": "decorations",
            "value": 15298,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[16699, 14983, 15298]"
          },
          {
            "name": "additions",
            "value": 21284,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[22512, 20822, 21284]"
          },
          {
            "name": "work-text",
            "value": 4174,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[5334, 4170, 4174]"
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
        "date": 1784785487642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5392,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6315, 5245, 5392]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1260,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[5728, 1260, 1203]"
          },
          {
            "name": "catalogues-list",
            "value": 567,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[567, 555, 614]"
          },
          {
            "name": "decorations",
            "value": 16743,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[17943, 16498, 16743]"
          },
          {
            "name": "additions",
            "value": 22967,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[23340, 22967, 22945]"
          },
          {
            "name": "work-text",
            "value": 3838,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4830, 3838, 3605]"
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
          "id": "b19e18dec35e00c36c6bc9d64e263a0f31fce131",
          "message": "Merge pull request #78 from BetaMasaheft/dp-sparql-fuseki-seed\n\ntest(sparql, iiif): seed dummy Fuseki with real data + flip both dual-env",
          "timestamp": "2026-07-23T18:41:20Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/b19e18dec35e00c36c6bc9d64e263a0f31fce131"
        },
        "date": 1784871686423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5141,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[7765, 5141, 4489]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1171,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[6751, 1171, 1170]"
          },
          {
            "name": "catalogues-list",
            "value": 509,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[794, 509, 470]"
          },
          {
            "name": "decorations",
            "value": 16024,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[17512, 15682, 16024]"
          },
          {
            "name": "additions",
            "value": 23068,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[24038, 23068, 23060]"
          },
          {
            "name": "work-text",
            "value": 3269,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4440, 3269, 3134]"
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
        "date": 1784957661788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4727,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[7068, 4727, 4385]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1297,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[5890, 1297, 1201]"
          },
          {
            "name": "catalogues-list",
            "value": 508,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[683, 453, 508]"
          },
          {
            "name": "decorations",
            "value": 15568,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[16942, 15372, 15568]"
          },
          {
            "name": "additions",
            "value": 21941,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[22903, 21661, 21941]"
          },
          {
            "name": "work-text",
            "value": 3573,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4669, 3348, 3573]"
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
        "date": 1785045101301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5085,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[8307, 5085, 4851]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1284,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[5866, 1284, 1213]"
          },
          {
            "name": "catalogues-list",
            "value": 520,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[667, 520, 479]"
          },
          {
            "name": "decorations",
            "value": 16424,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[17759, 16063, 16424]"
          },
          {
            "name": "additions",
            "value": 22419,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[23785, 22320, 22419]"
          },
          {
            "name": "work-text",
            "value": 4720,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[5646, 4720, 4684]"
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
        "date": 1785132637947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 6069,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6069, 6143, 4642]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1353,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[5147, 1353, 1166]"
          },
          {
            "name": "catalogues-list",
            "value": 506,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[573, 503, 506]"
          },
          {
            "name": "decorations",
            "value": 19230,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[19928, 18980, 19230]"
          },
          {
            "name": "additions",
            "value": 22966,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[23687, 22966, 22761]"
          },
          {
            "name": "work-text",
            "value": 3983,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4771, 3745, 3983]"
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
        "date": 1785216991018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 4232,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6156, 4129, 4232]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1112,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[6315, 1013, 1112]"
          },
          {
            "name": "catalogues-list",
            "value": 580,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[689, 580, 533]"
          },
          {
            "name": "decorations",
            "value": 12277,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[13000, 12277, 11630]"
          },
          {
            "name": "additions",
            "value": 15991,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[16374, 15991, 15437]"
          },
          {
            "name": "work-text",
            "value": 3984,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[5654, 3934, 3984]"
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
        "date": 1785303752857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "newsearch-mss-filter",
            "value": 5378,
            "unit": "ms",
            "extra": "target=container budget=25000ms samples=[6503, 5378, 4474]"
          },
          {
            "name": "manuscripts-browse",
            "value": 1412,
            "unit": "ms",
            "extra": "target=container budget=10000ms samples=[6146, 1296, 1412]"
          },
          {
            "name": "catalogues-list",
            "value": 513,
            "unit": "ms",
            "extra": "target=container budget=5000ms samples=[655, 513, 447]"
          },
          {
            "name": "decorations",
            "value": 15863,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[17212, 15863, 15675]"
          },
          {
            "name": "additions",
            "value": 19777,
            "unit": "ms",
            "extra": "target=container budget=60000ms samples=[20335, 19777, 19650]"
          },
          {
            "name": "work-text",
            "value": 3694,
            "unit": "ms",
            "extra": "target=container budget=20000ms samples=[4735, 3694, 3603]"
          }
        ]
      }
    ]
  }
}