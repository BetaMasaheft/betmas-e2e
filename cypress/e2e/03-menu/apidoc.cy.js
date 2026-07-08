describe('api documentation page', { tags: '@container' }, () => {
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/65
     * Container: `/api/` returns intermediate 404 and then redirects to
     * `/apidoc.html`; `cy.visit()` currently treats the intermediate response
     * as a failure in Cypress.
     */
    beforeEach(() => {
        cy.visit('apidoc.html', { failOnStatusCode: false })
    })

    it('should reach the apidoc page', () => {
        cy.url().should('include', 'apidoc.html')
    })

    it('ToC should list contents', () => {
        cy.get('#apidoctoc > ul')
          .children()
          .should('have.length.at.least', 16)
    })
    // TODO(DP): see #3 
})