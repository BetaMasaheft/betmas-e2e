describe('texts section', () => {
    beforeEach(() => {
        cy.visit('#prosopography')
    })

    it('displays 7 access links', () => {
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 3)
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Browse')
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Ethnic')
    })


// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=pers
// https://betamasaheft.eu/IndexPersons
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=eth
})

