describe('morphology page', { tags: '@container' }, () => {
  // see 03_user 21 — API contract is in api/morpho.cy.js
  it('renders a parse result for a sample query', () => {
    cy.visit({ url: 'morpho', qs: { query: 'sabe' } })
    cy.contains('Morphological parsing of sabe')
      .should('be.visible')
  })
})
