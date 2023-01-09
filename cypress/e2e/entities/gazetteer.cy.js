describe('texts section', () => {
    beforeEach(() => {
        cy.visit('#gazetteer')
    })

    it('displays 7 access links', () => {
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 3)
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Browse')
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Repositories')
    })

    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=place&work-types=ins
    // https://betamasaheft.eu/IndexPlaces
    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=ins
})

