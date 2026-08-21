describe('compare page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('compare')
  })

  it('shows the work-id compare form', () => {
    cy.get('#GoTo')
      .should('be.visible')
      .and('have.attr', 'name', 'workid')
    cy.get('form button[type="submit"]')
      .should('contain', 'Compare')
    cy.get('a[href*="compareSelected"]')
      .should('exist')
  })
})
