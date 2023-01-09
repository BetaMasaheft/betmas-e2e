describe('texts section', () => {
    beforeEach(() => {
        cy.visit('#texts')
    })

    it('displays 7 access links', () => {
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 6)
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Clavis')
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Lexicon')
    })


    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=work
    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=nar
    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=studies
    // https://betamasaheft.eu/compare
    // https://betamasaheft.eu/placeoforigin.html
    // https://betamasaheft.eu/manuscripts/viewer
})

