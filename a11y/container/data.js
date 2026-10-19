window.BENCHMARK_DATA = {
  "lastUpdate": 1792408099311,
  "repoUrl": "https://github.com/BetaMasaheft/betmas-e2e",
  "entries": {
    "WCAG violations (container)": [
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
        "date": 1791402341715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "home (/)",
            "value": 8,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":2,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "about (about.html)",
            "value": 7,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":4,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "help (help.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search form (newSearch.html)",
            "value": 10,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
          },
          {
            "name": "simple search form (simpleSearch.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search results (works) (newSearch.html?searchType=text&mode=any&work-types=ins)",
            "value": 107,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":43,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":11,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":44,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":4,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "manuscripts browse (manuscripts/browse)",
            "value": 361,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":357,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "catalogues list (catalogues/list)",
            "value": 17,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":14,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "authority files list (authority-files/list)",
            "value": 24,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":21,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "compare (compare)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "visualizations (visualizations.html)",
            "value": 3,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "work main (works/LIT1709Kebran/main)",
            "value": 34,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":18,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "work text (works/LIT1709Kebran/text)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "manuscript main (manuscripts/ESap028/main)",
            "value": 52,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":11,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":34,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"listitem\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag131\"],\"help\":\"<li> elements must be contained in a <ul> or <ol>\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "person main (persons/PRS9429Tewodros/main)",
            "value": 16,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":5,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
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
        "date": 1791811632693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "home (/)",
            "value": 8,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":2,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "about (about.html)",
            "value": 7,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":4,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "help (help.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search form (newSearch.html)",
            "value": 10,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
          },
          {
            "name": "simple search form (simpleSearch.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search results (works) (newSearch.html?searchType=text&mode=any&work-types=ins)",
            "value": 72,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":43,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":11,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":5,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":4,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":6,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "manuscripts browse (manuscripts/browse)",
            "value": 361,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":357,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "catalogues list (catalogues/list)",
            "value": 17,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":14,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "authority files list (authority-files/list)",
            "value": 24,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":21,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "compare (compare)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "visualizations (visualizations.html)",
            "value": 3,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "work main (works/LIT1709Kebran/main)",
            "value": 34,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":18,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "work text (works/LIT1709Kebran/text)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "manuscript main (manuscripts/ESap028/main)",
            "value": 52,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":11,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":34,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"listitem\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag131\"],\"help\":\"<li> elements must be contained in a <ul> or <ol>\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "person main (persons/PRS9429Tewodros/main)",
            "value": 16,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":5,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
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
        "date": 1792408098241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "home (/)",
            "value": 8,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":2,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "about (about.html)",
            "value": 7,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":4,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "help (help.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search form (newSearch.html)",
            "value": 10,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":3,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
          },
          {
            "name": "simple search form (simpleSearch.html)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "search results (works) (newSearch.html?searchType=text&mode=any&work-types=ins)",
            "value": 70,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"button-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Buttons must have discernible text\"},{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":43,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"label\",\"impact\":\"critical\",\"nodes\":11,\"wcag\":[\"wcag412\"],\"help\":\"Form elements must have labels\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":7,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":4,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "manuscripts browse (manuscripts/browse)",
            "value": 364,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":361,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "catalogues list (catalogues/list)",
            "value": 8,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":5,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "authority files list (authority-files/list)",
            "value": 24,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":21,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "compare (compare)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "visualizations (visualizations.html)",
            "value": 3,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "work main (works/LIT1709Kebran/main)",
            "value": 34,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":18,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "work text (works/LIT1709Kebran/text)",
            "value": 4,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":3,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"}]"
          },
          {
            "name": "manuscript main (manuscripts/ESap028/main)",
            "value": 52,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":11,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"image-alt\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag111\"],\"help\":\"Images must have alternative text\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":34,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"listitem\",\"impact\":\"serious\",\"nodes\":2,\"wcag\":[\"wcag131\"],\"help\":\"<li> elements must be contained in a <ul> or <ol>\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"},{\"id\":\"target-size\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag258\"],\"help\":\"All touch targets must be 24px large, or leave sufficient space\"}]"
          },
          {
            "name": "person main (persons/PRS9429Tewodros/main)",
            "value": 16,
            "unit": "violating nodes",
            "extra": "[{\"id\":\"color-contrast\",\"impact\":\"serious\",\"nodes\":8,\"wcag\":[\"wcag143\"],\"help\":\"Elements must meet minimum color contrast ratio thresholds\"},{\"id\":\"html-has-lang\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag311\"],\"help\":\"<html> element must have a lang attribute\"},{\"id\":\"link-name\",\"impact\":\"serious\",\"nodes\":5,\"wcag\":[\"wcag244\",\"wcag412\"],\"help\":\"Links must have discernible text\"},{\"id\":\"list\",\"impact\":\"serious\",\"nodes\":1,\"wcag\":[\"wcag131\"],\"help\":\"<ul> and <ol> must only directly contain <li>, <script> or <template> elements\"},{\"id\":\"select-name\",\"impact\":\"critical\",\"nodes\":1,\"wcag\":[\"wcag412\"],\"help\":\"Select element must have an accessible name\"}]"
          }
        ]
      }
    ]
  }
}