describe('Decorations page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 27–28
  it('loads the decorations filtered search', () => {
    cy.visit({ url: 'decorations', timeout: 100000 })
    cy.get('h3')
      .first()
      .should('be.visible')
      .and('contain', 'Decorations Filtered Search')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
  })

  it('loads miniature results from the type filter', () => {
    cy.visit({
      url: 'decorations',
      qs: { type: 'miniature' },
      timeout: 100000
    })
    cy.get('h3')
      .first()
      .should('contain', 'Decorations Filtered Search')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.url()
      .should('include', 'type=miniature')
  })
})
