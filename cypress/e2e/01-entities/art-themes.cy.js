describe('art themes page', { tags: '@container' }, () => {
  // see 03_user 26
  beforeEach(() => {
    cy.visit('art-themes/list')
  })

  it('shows the art-theme taxonomy sidebar', () => {
    cy.contains('Select an entry on the left')
      .should('be.visible')
    cy.contains('button', 'Art Themes')
      .should('exist')
  })
})
