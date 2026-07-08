describe('api documentation page', { tags: '@container' }, () => {
    beforeEach(() => {
        cy.visit('api/')
    })

    it('should reach the apidoc page', () => {
        cy.url().should('eq','https://betamasaheft.eu/apidoc.html')
    })

    it('ToC should list contents', () => {
        cy.get('#apidoctoc > ul')
          .children()
          .should('have.length.at.least', 16)
    })
    // TODO(DP): see #3 
})