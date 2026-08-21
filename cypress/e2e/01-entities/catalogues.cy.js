describe('Catalogues files page', { tags: '@container' }, () => {
  // see 03_user 31
  beforeEach(() => {
    cy.visit('catalogues/list')
  })

  it('lists encoded catalogues', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'available catalogues')
    cy.get('h2 .w3-tag')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('table tbody tr')
      .should('have.length.at.least', 1)
  })
})
