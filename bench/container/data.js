window.BENCHMARK_DATA = {
  "lastUpdate": 1784038640952,
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
      }
    ]
  }
}