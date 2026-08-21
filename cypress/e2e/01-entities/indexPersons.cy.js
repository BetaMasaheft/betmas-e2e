describe('Person Index page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 23
  beforeEach(() => {
    cy.visit({ url: 'IndexPersons', timeout: 100000 })
  })

  it('loads the persons index with hits', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Index of person annotations')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
  })
})
