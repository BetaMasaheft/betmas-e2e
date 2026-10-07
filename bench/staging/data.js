window.BENCHMARK_DATA = {
  "lastUpdate": 1791368468251,
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
      }
    ]
  }
}