describe('visualizations page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('visualizations.html')
  })

  it('links to compare and collate tools', () => {
    cy.get('a[href*="compare"]')
      .should('exist')
    cy.get('a[href*="collate"]')
      .should('exist')
    cy.get('a[href*="workmap"]')
      .should('exist')
  })
})
