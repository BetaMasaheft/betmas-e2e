describe('ID URL', () => {
    beforeEach(() => {
        cy.visit('ID')
    })

    // (DP) is broken
    // see #6
    it.skip('should not display an exist error', () => {
        cy.get('h1')
          .should('not.contain', 'An error has occured')
    })

    it.skip('should find the proper landing for each type', () => {
        
    })
})