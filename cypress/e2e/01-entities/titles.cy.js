describe('Titles page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 30
  beforeEach(() => {
    cy.visit({ url: 'titles', timeout: 100000 })
  })

  it('loads the titles filtered search', () => {
    cy.get('h3')
      .first()
      .should('be.visible')
      .and('contain', 'Titles Filtered Search')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
  })
})
