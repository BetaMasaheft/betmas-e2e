describe('api documentation page', { tags: '@container' }, () => {
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/65
     * Visit the canonical apidoc route directly; `/api/` is a separate redirect
     * entry point covered by cy.request when needed.
     */
    beforeEach(() => {
        cy.visit('apidoc.html')
    })

    it('should reach the apidoc page', () => {
        cy.url().should('include', 'apidoc.html')
    })

    it('ToC should list contents', () => {
        cy.get('#apidoctoc > ul')
          .children()
          .should('have.length.at.least', 16)
    })

    // GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/3
    // Fixed in BetMasWeb's w3local.css (.w3-quarter pre wraps instead of
    // overflowing).
    it('example <pre> blocks should not overflow their column', () => {
        cy.get('.w3-quarter pre').each(($pre) => {
            expect($pre[0].scrollWidth).to.be.at.most($pre[0].clientWidth)
        })
    })
})