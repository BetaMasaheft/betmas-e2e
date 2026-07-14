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

      on('task', {
        recordBenchmark (entry) {
          benchmarkResults.push(entry)
          return null
        }
      })

      on('after:run', async () => {
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
