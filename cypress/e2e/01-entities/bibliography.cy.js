describe('Bibliography page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 29
  beforeEach(() => {
    cy.visit({ url: 'bibliography', timeout: 100000 })
  })

  it('loads the bibliography listing with filters', () => {
    cy.contains('bibliographic entries')
      .should('be.visible')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
    cy.get('form input[name="type"][value="catalogue"]')
      .should('exist')
  })
})
