describe('morphology page', { tags: '@container' }, () => {
  // see 03_user 21 — API contract is in api/morpho.cy.js
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMasWeb/issues/66
   * GET /morpho?query=sabe includes "Morphological parsing of sabe" in the
   * HTML (api/morpho.cy.js), but a browser visit never shows that heading.
   */
  it.skip('renders a parse result for a sample query', () => {
    cy.visit({ url: 'morpho', qs: { query: 'sabe' } })
    cy.contains('Morphological parsing of sabe')
      .should('be.visible')
  })
})
