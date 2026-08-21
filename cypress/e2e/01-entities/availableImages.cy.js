describe('Images page', { tags: '@container' }, () => {
  // see 03_user 32 — nav uses availableImages.html (BetMasWeb#59)
  beforeEach(() => {
    cy.visit('availableImages.html')
  })

  it('lists external digitised-manuscript collections', () => {
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Digitised Manuscripts')
    cy.get('ul.lead li a[href]')
      .should('have.length.at.least', 1)
      .first()
      .should('have.attr', 'href')
      .and('match', /^https?:\/\//)
  })
})
