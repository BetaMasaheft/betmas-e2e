window.BENCHMARK_DATA = {
  "lastUpdate": 1793001475258,
  "repoUrl": "https://github.com/BetaMasaheft/betmas-e2e",
  "entries": {
    "Staging slow pages": [
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
          "id": "89e77d3e48237e75ac8d23b515c29c41a6ca7018",
          "message": "Merge pull request #123 from BetaMasaheft/ci-staging-benchmark\n\nci(bench): add staging as third benchmark target",
          "timestamp": "2026-10-07T10:12:23Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/89e77d3e48237e75ac8d23b515c29c41a6ca7018"
        },
        "date": 1791368467519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 6567,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[6567, 436, 434]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 617,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[575, 578, 617]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5342,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5342, 435, 439]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 146,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2802, 146, 145]"
          },
          {
            "name": "manuscripts-browse",
            "value": 288,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1783, 288, 286]"
          },
          {
            "name": "catalogues-list",
            "value": 146,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3190, 145, 146]"
          },
          {
            "name": "decorations",
            "value": 292,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[12830, 292, 157]"
          },
          {
            "name": "additions",
            "value": 286,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13414, 286, 161]"
          },
          {
            "name": "work-text",
            "value": 145,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2610, 145, 145]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "committer": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "id": "366a660cfdda74c65bafaa5c61a37831020d95e1",
          "message": "feat(team): add a test for the team page: it should work\n\nAnd the links should also resolve.",
          "timestamp": "2026-10-01T11:43:03Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/366a660cfdda74c65bafaa5c61a37831020d95e1"
        },
        "date": 1791450811945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 8586,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[8586, 449, 449]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 783,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[656, 781, 783]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5392,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5392, 445, 448]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 150,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2813, 150, 150]"
          },
          {
            "name": "manuscripts-browse",
            "value": 298,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1830, 298, 162]"
          },
          {
            "name": "catalogues-list",
            "value": 150,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3270, 149, 150]"
          },
          {
            "name": "decorations",
            "value": 155,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13914, 155, 155]"
          },
          {
            "name": "additions",
            "value": 308,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13337, 295, 308]"
          },
          {
            "name": "work-text",
            "value": 149,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2707, 149, 149]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "committer": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "id": "366a660cfdda74c65bafaa5c61a37831020d95e1",
          "message": "feat(team): add a test for the team page: it should work\n\nAnd the links should also resolve.",
          "timestamp": "2026-10-01T11:43:03Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/366a660cfdda74c65bafaa5c61a37831020d95e1"
        },
        "date": 1791537768515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 6764,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[6764, 368, 363]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 580,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[565, 572, 580]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5373,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5373, 372, 360]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 121,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2737, 121, 121]"
          },
          {
            "name": "manuscripts-browse",
            "value": 242,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1704, 242, 133]"
          },
          {
            "name": "catalogues-list",
            "value": 121,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3227, 121, 121]"
          },
          {
            "name": "decorations",
            "value": 241,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[12959, 241, 128]"
          },
          {
            "name": "additions",
            "value": 238,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[12769, 238, 134]"
          },
          {
            "name": "work-text",
            "value": 120,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2421, 120, 120]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "committer": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "id": "366a660cfdda74c65bafaa5c61a37831020d95e1",
          "message": "feat(team): add a test for the team page: it should work\n\nAnd the links should also resolve.",
          "timestamp": "2026-10-01T11:43:03Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/366a660cfdda74c65bafaa5c61a37831020d95e1"
        },
        "date": 1791621862271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 7526,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[7526, 436, 439]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 637,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[601, 600, 637]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5630,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5630, 439, 435]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 147,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2795, 146, 147]"
          },
          {
            "name": "manuscripts-browse",
            "value": 289,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1820, 289, 288]"
          },
          {
            "name": "catalogues-list",
            "value": 146,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3195, 146, 146]"
          },
          {
            "name": "decorations",
            "value": 151,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13080, 151, 150]"
          },
          {
            "name": "additions",
            "value": 288,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[12846, 288, 155]"
          },
          {
            "name": "work-text",
            "value": 145,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2468, 145, 145]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "committer": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "id": "366a660cfdda74c65bafaa5c61a37831020d95e1",
          "message": "feat(team): add a test for the team page: it should work\n\nAnd the links should also resolve.",
          "timestamp": "2026-10-01T11:43:03Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/366a660cfdda74c65bafaa5c61a37831020d95e1"
        },
        "date": 1791709647324,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 6456,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[6456, 333, 334]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 550,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[550, 512, 532]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 6020,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[6020, 331, 337]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 112,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2918, 112, 111]"
          },
          {
            "name": "manuscripts-browse",
            "value": 226,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1763, 226, 125]"
          },
          {
            "name": "catalogues-list",
            "value": 112,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3172, 112, 111]"
          },
          {
            "name": "decorations",
            "value": 224,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13615, 224, 120]"
          },
          {
            "name": "additions",
            "value": 224,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13078, 224, 125]"
          },
          {
            "name": "work-text",
            "value": 111,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2282, 111, 111]"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "committer": {
            "name": "Martin Middel",
            "username": "DrRataplan",
            "email": "martin@elliat.nl"
          },
          "id": "366a660cfdda74c65bafaa5c61a37831020d95e1",
          "message": "feat(team): add a test for the team page: it should work\n\nAnd the links should also resolve.",
          "timestamp": "2026-10-01T11:43:03Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/366a660cfdda74c65bafaa5c61a37831020d95e1"
        },
        "date": 1791797458016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 6936,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[6936, 510, 509]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 701,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[691, 701, 674]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5610,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5610, 507, 507]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 171,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2783, 171, 171]"
          },
          {
            "name": "manuscripts-browse",
            "value": 341,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[2074, 341, 184]"
          },
          {
            "name": "catalogues-list",
            "value": 170,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3358, 170, 170]"
          },
          {
            "name": "decorations",
            "value": 340,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13003, 340, 179]"
          },
          {
            "name": "additions",
            "value": 335,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13143, 335, 182]"
          },
          {
            "name": "work-text",
            "value": 171,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2422, 171, 169]"
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
          "id": "f014b438cceb137383125f40d2cea83cd1b42879",
          "message": "Merge pull request #125 from BetaMasaheft/dependabot/npm_and_yarn/axe-core-4.14.0\n\nchore(deps-dev): bump axe-core from 4.13.0 to 4.14.0",
          "timestamp": "2026-10-12T10:16:31Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/f014b438cceb137383125f40d2cea83cd1b42879"
        },
        "date": 1791884249104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 7124,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[7124, 442, 444]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 904,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[621, 596, 904]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5208,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5208, 441, 438]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 148,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2857, 148, 147]"
          },
          {
            "name": "manuscripts-browse",
            "value": 291,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1798, 291, 157]"
          },
          {
            "name": "catalogues-list",
            "value": 147,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[3528, 147, 146]"
          },
          {
            "name": "decorations",
            "value": 152,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13006, 152, 151]"
          },
          {
            "name": "additions",
            "value": 291,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13016, 291, 157]"
          },
          {
            "name": "work-text",
            "value": 147,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[2408, 147, 146]"
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
          "id": "f014b438cceb137383125f40d2cea83cd1b42879",
          "message": "Merge pull request #125 from BetaMasaheft/dependabot/npm_and_yarn/axe-core-4.14.0\n\nchore(deps-dev): bump axe-core from 4.13.0 to 4.14.0",
          "timestamp": "2026-10-12T10:16:31Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/f014b438cceb137383125f40d2cea83cd1b42879"
        },
        "date": 1791964308105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 7439,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[7439, 387, 390]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 673,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[576, 673, 574]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 5550,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[5550, 384, 384]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 129,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[2807, 129, 129]"
          },
          {
            "name": "manuscripts-browse",
            "value": 261,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[1728, 261, 141]"
          },
          {
            "name": "catalogues-list",
            "value": 129,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[9796, 129, 129]"
          },
          {
            "name": "decorations",
            "value": 138,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[13081, 137, 138]"
          },
          {
            "name": "additions",
            "value": 255,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[12997, 255, 144]"
          },
          {
            "name": "work-text",
            "value": 129,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[3221, 129, 129]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792482476903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 1180,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[1180, 410, 411]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 705,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[705, 610, 578]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 411,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[410, 410, 411]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 136,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[137, 135, 136]"
          },
          {
            "name": "manuscripts-browse",
            "value": 136,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[136, 136, 136]"
          },
          {
            "name": "catalogues-list",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[137, 137, 137]"
          },
          {
            "name": "decorations",
            "value": 136,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[136, 136, 137]"
          },
          {
            "name": "additions",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[137, 135, 137]"
          },
          {
            "name": "work-text",
            "value": 136,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[136, 137, 136]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792569125286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 950,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[950, 322, 324]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 756,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[671, 639, 756]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 324,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[322, 324, 321]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[108, 107, 107]"
          },
          {
            "name": "manuscripts-browse",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[107, 107, 107]"
          },
          {
            "name": "catalogues-list",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[107, 107, 107]"
          },
          {
            "name": "decorations",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[107, 107, 107]"
          },
          {
            "name": "additions",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[108, 107, 106]"
          },
          {
            "name": "work-text",
            "value": 107,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[108, 107, 107]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792655254044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 1025,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[1025, 402, 405]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 725,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[725, 690, 556]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 402,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[401, 402, 402]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 133,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[134, 133, 133]"
          },
          {
            "name": "manuscripts-browse",
            "value": 134,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[133, 134, 134]"
          },
          {
            "name": "catalogues-list",
            "value": 134,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[134, 134, 134]"
          },
          {
            "name": "decorations",
            "value": 134,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[134, 134, 134]"
          },
          {
            "name": "additions",
            "value": 134,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[134, 133, 134]"
          },
          {
            "name": "work-text",
            "value": 133,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[133, 134, 133]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792741598335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 859,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[859, 297, 296]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 583,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[583, 501, 479]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 297,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[297, 295, 295]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 98,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[98, 99, 98]"
          },
          {
            "name": "manuscripts-browse",
            "value": 99,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[99, 99, 98]"
          },
          {
            "name": "catalogues-list",
            "value": 99,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[98, 99, 99]"
          },
          {
            "name": "decorations",
            "value": 98,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[98, 98, 99]"
          },
          {
            "name": "additions",
            "value": 98,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[98, 99, 98]"
          },
          {
            "name": "work-text",
            "value": 98,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[98, 98, 99]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792826939941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 940,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[940, 311, 313]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 636,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[636, 611, 530]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 311,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[311, 311, 310]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 104,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[104, 104, 103]"
          },
          {
            "name": "manuscripts-browse",
            "value": 104,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[104, 103, 107]"
          },
          {
            "name": "catalogues-list",
            "value": 104,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[104, 103, 104]"
          },
          {
            "name": "decorations",
            "value": 104,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[104, 104, 104]"
          },
          {
            "name": "additions",
            "value": 104,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[103, 104, 104]"
          },
          {
            "name": "work-text",
            "value": 103,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[104, 103, 103]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1792914143894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 926,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[926, 318, 319]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 750,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[720, 648, 750]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 319,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[319, 318, 318]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 106,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[105, 106, 106]"
          },
          {
            "name": "manuscripts-browse",
            "value": 106,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[106, 106, 106]"
          },
          {
            "name": "catalogues-list",
            "value": 106,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[106, 106, 106]"
          },
          {
            "name": "decorations",
            "value": 106,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[106, 105, 106]"
          },
          {
            "name": "additions",
            "value": 105,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[106, 105, 105]"
          },
          {
            "name": "work-text",
            "value": 106,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[105, 106, 106]"
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
          "id": "adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f",
          "message": "Merge pull request #126 from BetaMasaheft/dependabot/npm_and_yarn/cypress-16.2.0",
          "timestamp": "2026-10-19T07:40:25Z",
          "url": "https://github.com/BetaMasaheft/betmas-e2e/commit/adb8a78fa1f25c21d9eb0efbbc6b602fdc05489f"
        },
        "date": 1793001474535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "catalog-hp1-smoke",
            "value": 1105,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[1105, 413, 413]"
          },
          {
            "name": "catalog-hp2-institutions",
            "value": 858,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=10000ms samples=[759, 623, 858]"
          },
          {
            "name": "catalog-hp4-bibliography",
            "value": 414,
            "unit": "ms",
            "extra": "target=staging stat=p95 budget=30000ms samples=[412, 412, 414]"
          },
          {
            "name": "newsearch-mss-filter",
            "value": 138,
            "unit": "ms",
            "extra": "target=staging budget=30000ms samples=[138, 138, 138]"
          },
          {
            "name": "manuscripts-browse",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=10000ms samples=[138, 137, 137]"
          },
          {
            "name": "catalogues-list",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=5000ms samples=[138, 137, 137]"
          },
          {
            "name": "decorations",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[137, 137, 138]"
          },
          {
            "name": "additions",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[137, 137, 138]"
          },
          {
            "name": "work-text",
            "value": 137,
            "unit": "ms",
            "extra": "target=staging budget=60000ms samples=[137, 137, 138]"
          }
        ]
      }
    ]
  }
}