describe('indexes listing page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('indexeslist.html')
  })

  it('links through to the index and filtered-search pages', () => {
    cy.get('a[href*="IndexPersons"]')
      .should('exist')
    cy.get('a[href*="IndexPlaces"]')
      .should('exist')
    cy.get('a[href*="decorations"]')
      .should('exist')
    cy.get('a[href*="authority-files/list"]')
      .should('exist')
  })
})
