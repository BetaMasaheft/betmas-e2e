/* global Cypress, cy, describe, it */

import 'cypress-axe'
import config from '../../fixtures/a11y-pages.json'

/**
 * WCAG 2.x A/AA audit with axe-core (full rule set, complements Lighthouse's
 * accessibility category, which runs only a subset and only on first load).
 *
 * Report-only for now: violations are logged and recorded via cy.task (see
 * cypress.config.mjs -> a11y-results.json, github-action-benchmark format,
 * value = number of affected nodes) but never fail the spec. Drop
 * `skipFailures` in checkA11y once the baseline is fixed.
 */
describe('WCAG audit (axe-core)', { tags: ['@a11y', '@slow'] }, () => {
  // Site JS errors (e.g. 'Map container not found' on /) are not what this
  // spec measures; don't let them abort the audit.
  Cypress.on('uncaught:exception', () => false)

  config.pages.forEach(({ name, path }) => {
    it(`audits ${name}`, () => {
      cy.visit(path)
      cy.injectAxe()
      cy.checkA11y(
        null,
        { runOnly: { type: 'tag', values: config.tags } },
        (violations) => {
          cy.task('recordA11y', {
            name: `${name} (${path})`,
            nodes: violations.reduce((n, v) => n + v.nodes.length, 0),
            violations: violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              nodes: v.nodes.length,
              wcag: v.tags.filter((t) => /^wcag\d{3,}$/.test(t)),
              help: v.help
            }))
          })
        },
        true
      )
    })
  })
})
