describe('Place Index page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 24
  beforeEach(() => {
    cy.visit({ url: 'IndexPlaces', timeout: 100000 })
  })

  it('loads the places index with hits', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Index of places annotations')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
  })
})
