describe('analytic page', () => {
    beforeEach(() => {
        cy.visit('works/LIT1709Kebran/analytic')
    })

    it('shows relationship table with data', () => {
        cy.get('#BetMasRel')
          .should('be.visible')
        cy.get('.container.w3-half > .w3-panel')
          .contains('relations found')
        cy.get('tr')  
          .should('have.length.of.at.least', 4)
    })

    // See User.md the graph is not working, aka empty
    it('shows relationship graph area', () => {
        cy.get('#BetMasRelView')
          .should('be.visible')
    })
})