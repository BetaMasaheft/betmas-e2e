describe('Place of Origin page', { tags: '@container' }, () => {
  // see 03_user 34 — nav / homepage use placeoforigin.html (BetMasWeb#59)
  beforeEach(() => {
    cy.visit('placeoforigin.html')
  })

  it('embeds the GeoBrowser map of origin places', () => {
    cy.get('#geobrowserMap')
      .should('exist')
      .and('have.attr', 'src')
      .and('include', 'geobrowser.de.dariah.eu')
      .and('include', 'origPlaces.kml')
  })
})
