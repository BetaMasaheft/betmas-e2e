describe('texts section', () => {
    beforeEach(() => {
        cy.visit('#taxonomy')
    })

    it('displays 7 access links', () => {
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .should('have.length', 10)
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .first()
          .should('contain', 'Keywords')
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .last()
          .should('contain', 'Bibliography')
    })

    // https://betamasaheft.eu/authority-files/list
    // https://betamasaheft.eu/art-themes/list
    // https://betamasaheft.eu/decorations
    // https://betamasaheft.eu/decorations?type=miniature
    // https://betamasaheft.eu/bindings
    // https://betamasaheft.eu/additions
    // https://betamasaheft.eu/titles
    // https://betamasaheft.eu/IndexPlaces
    // https://betamasaheft.eu/IndexPersons
    // https://betamasaheft.eu/bibliography
})

