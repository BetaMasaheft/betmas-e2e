window.BENCHMARK_DATA = {
  "lastUpdate": 1784639900340,
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
      }
    ]
  }
}