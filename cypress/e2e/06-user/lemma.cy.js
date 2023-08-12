describe('viewing lemma in the scan of Dillmann’s Lexicon', () => {
    // see 03-menu/dillman.cy.js

    beforeEach(() => {
        cy.visit('Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317')

    })

     // see 03_user 19
     it('click on Load button loads the attestations', () => {
        // @HelenaSabel intercepting requests lets us assert on the response, as well as the display, 
        // it is also useful for better wait() commands without random timeouts
        cy.intercept( { method: 'GET', pathname: '**/api/*' }).as('attest')        
        cy.get('#loadattestations').click()
        // check that the clicked button disappears
        cy.get('#loadattestations').should('have.css', 'display', 'none')
        // check if repsonse contains result
        cy.wait('@attest').its('response.body.items').should('have.length.least', 2)
        // check display of attestations results
        cy.get('#attestations')
          .children()
          .should('have.length.least', 1)
        // @HelenaSabel we could now have more elaborate tests over the presentation of the results
        // we can select EMML... since its very unlikely that the lemma will disappear from the doc 
        cy.get('#EMML4398')
          .should('be.visible')   
    })

    // see 03_user 20
    it('click on page icon takes you to the relevant lexicon page', () => {
        // see 03_user 20.2
        cy.get('.w3-badge > a')
         .invoke('attr', 'href')
        // the test uses 'contain' instead of 'eq' to avoid inconsistencies with the protocol definition 
         .should('contain', 'www.tau.ac.il/~hacohen/Lexicon/pp583.html')
         // see 03_user 20.3
         .then(href => {
              cy.request(href)
        // @HelenaSabel by asserting on the request any non 200 response will automatically fail the test
        // so its better to assert on the body with something benign that we control
                // .its('status')
                // .should('eq', 200)
                .its('body')
                .should('include', '</html>')
                .and('include', 'pp583')
         })

    //HBS: The code below produced a Timed out error while waiting for the page to load
    // @HelenaSabel yes the above code is much better and the correct way to deal with outward going links

    //    cy.get('.w3-badge > a')
    //       .invoke('removeAttr', 'target').click()
    //    cy.url().should('eq', 'https://www.tau.ac.il/~hacohen/Lexicon/pp583.html')
    })
})