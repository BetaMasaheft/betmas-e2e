describe('data page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('lod.html')
  })

  /**
   * GH issue: https://github.com/BetaMasaheft/BetMasWeb/issues/65
   * `cy.contains('Linked Open Data')` matches the hidden About-dropdown
   * hint `#loddata` in nav:barNew (w3-hide) before the visible lod.html copy.
   */
  it.skip('documents the Linked Open Data base URI', () => {
    cy.contains('Linked Open Data')
      .should('be.visible')
    cy.get('#apidoctoc')
      .should('exist')
    cy.get('a[href*="sparql"]')
      .should('exist')
  })
})
