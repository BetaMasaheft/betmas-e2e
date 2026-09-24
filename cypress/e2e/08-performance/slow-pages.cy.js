/* global Cypress, cy, describe, expect, it */

import budgets from '../../fixtures/perf-budgets.json'
import { isContainer } from '../../support/env'

/**
 * Server-timing benchmarks for the known slow pages (BetMas#57).
 * cy.request only (no browser rendering, read-only GETs): the number measured
 * is XQuery/TTFB, the regression vector these pages actually have.
 *
 * Report-only: a sample over budget logs a warning but does not fail the run.
 * Medians land in benchmark-results.json via cy.task (see cypress.config.mjs)
 * and are tracked over time by .github/workflows/benchmark.yml.
 */
describe('Slow page benchmarks', { tags: ['@perf', '@slow'] }, () => {
  const target = isContainer() ? 'container' : 'production'

  budgets.catalogWorkloads.forEach((workload) => {
    it(`measures ${workload.key}`, () => {
      const budgetMs = target === 'container' ? workload.budgetMs.container : workload.budgetMs.production
      const samples = []

      Cypress._.times(budgets.samples, () => {
        let duration = 0
        workload.paths.forEach((path) => {
          cy.request({ url: path, timeout: budgetMs * 2 }).then((response) => {
            expect(response.status, path).to.eq(200)
            duration += response.duration
          })
        })
        cy.then(() => samples.push(duration))
      })

      cy.then(() => {
        const sorted = [...samples].sort((a, b) => a - b)
        const p95 = sorted[Math.max(0, Math.ceil(sorted.length * 0.95) - 1)]

        if (p95 > budgetMs) {
          cy.log(`over budget: ${workload.key} p95 ${p95}ms > ${budgetMs}ms`)
        }

        cy.task('recordBenchmark', {
          name: workload.key,
          unit: 'ms',
          value: p95,
          extra: `target=${target} stat=p95 budget=${budgetMs}ms samples=[${samples.join(', ')}]`
        })
      })
    })
  })

  budgets.pages.forEach((page) => {
    it(`measures ${page.key}`, () => {
      const budgetMs = target === 'container' ? page.budgetMs.container : page.budgetMs.production
      const durations = []

      // sequential samples; the median damps cold caches and runner noise
      Cypress._.times(budgets.samples, () => {
        cy.request({ url: page.path, timeout: budgetMs * 2 }).then((response) => {
          expect(response.status, page.path).to.eq(200)
          durations.push(response.duration)
        })
      })

      cy.then(() => {
        const sorted = [...durations].sort((a, b) => a - b)
        const median = sorted[Math.floor(sorted.length / 2)]

        if (median > budgetMs) {
          cy.log(`over budget: ${page.key} median ${median}ms > ${budgetMs}ms`)
        }

        cy.task('recordBenchmark', {
          name: page.key,
          unit: 'ms',
          value: median,
          extra: `target=${target} budget=${budgetMs}ms samples=[${durations.join(', ')}]`
        })
      })
    })
  })
})
