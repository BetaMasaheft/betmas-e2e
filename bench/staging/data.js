window.BENCHMARK_DATA = {
  "lastUpdate": 1791621863227,
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
      }
    ]
  }
}