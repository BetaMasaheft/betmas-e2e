describe('Bindings page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 33
  beforeEach(() => {
    cy.visit({ url: 'bindings', timeout: 100000 })
  })

  it('loads the bindings filtered search', () => {
    cy.get('h3')
      .first()
      .should('be.visible')
      .and('contain', 'Bindings Filtered Search')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
  })
})
