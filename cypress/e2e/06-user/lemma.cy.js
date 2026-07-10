describe('viewing lemma in the scan of Dillmann’s Lexicon', { tags: '@production-only' }, () => {
    // see 03-menu/dillmann.cy.js
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/66
     * Container: all `Dillmann/` routes (incl. `Dillmann/lemma/...`) return
     * HTTP 405, so this spec can only run against production.
     */

    beforeEach(() => {
        cy.visit('Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317')

    })

     // see 03_user 19
     it('click on Load button loads the attestations', () => {
        cy.intercept( { method: 'GET', pathname: '**/api/*' }).as('attest')
        cy.get('#loadattestations').click()
        // wait on the API response first (rides responseTimeout) — the button
        // only disappears once the attestations arrive, and prod can be slow
        cy.wait('@attest').its('response.body.items').should('have.length.least', 2)
        // check that the clicked button disappears
        cy.get('#loadattestations').should('have.css', 'display', 'none')
        // check display of attestations results
        cy.get('#attestations')
          .children()
          .should('have.length.least', 1)
        cy.get('#EMML4398')
          .should('be.visible')
    })

    // see 03_user 20
    it('click on page icon takes you to the relevant lexicon page', () => {
        // see 03_user 20.2
        // The scan is hosted by a third party (tau.ac.il) whose WAF rejects
        // requests from CI runners (2026-07-10: F5 block page, 404). Our app's
        // contract is emitting the correct link, so assert the href only and
        // do not fetch the external page.
        cy.get('.w3-badge > a')
         .invoke('attr', 'href')
        // the test uses 'contain' instead of 'eq' to avoid inconsistencies with the protocol definition
         .should('contain', 'www.tau.ac.il/~hacohen/Lexicon/pp583.html')
    })
})