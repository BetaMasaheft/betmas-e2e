describe('projects page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('projects.html')
  })

  it('lists project landing pages', () => {
    cy.get('a[href*="lectures"]')
      .should('exist')
    cy.get('a[href*="chojnacki"]')
      .should('exist')
    cy.get('a[href*="tweed"]')
      .should('exist')
  })
})
