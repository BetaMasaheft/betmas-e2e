describe('authority files page', { tags: '@container' }, () => {
  // see 03_user 25
  beforeEach(() => {
    cy.visit('authority-files/list')
  })

  it('shows the keyword taxonomy sidebar', () => {
    cy.contains('Select an entry on the left')
      .should('be.visible')
    cy.get('#content button.w3-red')
      .should('have.length.at.least', 1)
  })
})
