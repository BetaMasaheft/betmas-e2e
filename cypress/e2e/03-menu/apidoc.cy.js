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

    /**
     * GH: BetMasWeb#133 (fixes BetaMasaheft/BetMas#162). The IIIF, SHINE and
     * JSON-API sections were filled by a RESTXQ template
     * (`data-template="apidoc:iiif"` / `"apidoc:shine"`) that stopped
     * working, so they rendered empty. #133 replaces them with static
     * pattern tables (`#APIpatternsIIIF` / `SHINE` / `JSONAPI`).
     * Skipped until #133 ships in the container image - unskip then.
     */
    it.skip('IIIF, SHINE and JSON-API sections list their URL patterns', () => {
        const sections = [
            { id: 'APIpatternsIIIF', sample: '/iiif/collections' },
            { id: 'APIpatternsSHINE', sample: '/api/resources/{uuid}/metadata' },
            { id: 'APIpatternsJSONAPI', sample: '/api/sections/{uuid}/content_units' }
        ]

        sections.forEach(({ id, sample }) => {
            cy.get(`#${id}`)
              .should('exist')
              .find('pre')
              .should('have.length.at.least', 1)
            cy.get(`#${id}`)
              .should('contain.text', sample)
        })
    })
})