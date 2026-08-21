describe('help page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('help.html')
  })

  it('shows the help table of contents', () => {
    cy.get('h1')
      .should('contain', 'navigate this website')
    cy.get('#introduction')
      .should('be.visible')
    cy.get('#sidebar a[href="#searchesintro"]')
      .should('exist')
  })
})
