import { writeFile } from 'node:fs/promises'
import { defineConfig } from 'cypress'
import { plugin as cypressGrepPlugin } from '@cypress/grep/plugin'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents (on, config) {
      cypressGrepPlugin(config)

      // @perf specs report medians here; written once per run in
      // github-action-benchmark's customSmallerIsBetter format
      const benchmarkResults = []

      // @a11y specs report axe violations here; written once per run in
      // github-action-benchmark's customSmallerIsBetter format
      const a11yResults = []

      on('task', {
        recordBenchmark (entry) {
          benchmarkResults.push(entry)
          return null
        },
        recordA11y (entry) {
          a11yResults.push(entry)
          return null
        }
      })

      on('after:run', async () => {
        if (a11yResults.length > 0) {
          const outPath = process.env.A11Y_OUT || 'a11y-results.json'
          const rows = a11yResults.map(({ name, nodes, violations }) => ({
            name,
            unit: 'violating nodes',
            value: nodes,
            extra: JSON.stringify(violations)
          }))
          await writeFile(outPath, JSON.stringify(rows, null, 2) + '\n')
        }
        if (benchmarkResults.length === 0) {
          return
        }
        const outPath = process.env.BENCHMARK_OUT || 'benchmark-results.json'
        await writeFile(outPath, JSON.stringify(benchmarkResults, null, 2) + '\n')
      })

      return config
    },
    baseUrl: 'https://betamasaheft.eu',
    responseTimeout: 100000,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads'
  }
})
