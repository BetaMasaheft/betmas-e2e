describe('data page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('lod.html')
  })

  it('documents the Linked Open Data base URI', () => {
    cy.contains('Linked Open Data')
      .should('be.visible')
    cy.get('#apidoctoc')
      .should('exist')
    cy.get('a[href*="sparql"]')
      .should('exist')
  })
})
