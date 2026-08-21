describe('permalinks page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('pid.html')
  })

  it('documents the /permanent/{sha}/ URL format', () => {
    cy.get('#permalinks')
      .should('be.visible')
      .and('contain', 'permanent/')
  })
})
