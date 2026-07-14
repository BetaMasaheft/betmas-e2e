window.BENCHMARK_DATA = {
  "lastUpdate": 1784040061114,
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
      }
    ]
  }
}
