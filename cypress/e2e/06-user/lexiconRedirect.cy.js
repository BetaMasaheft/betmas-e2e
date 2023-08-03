describe('view the lemma in the scan of Dillmann’s Lexicon', () => {
    // see 03_user 20
    it('click on page icon takes you to the relevant lexicon page', () => {
        cy.visit('https://betamasaheft.eu/Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317')
        cy.get('.w3-badge > a')
         .invoke('attr', 'href')
        // the test uses 'contain' instead of 'eq' to avoid inconsistencies with the protocol definition 
         .should('contain', 'www.tau.ac.il/~hacohen/Lexicon/pp583.html')
         .then(href => {
              cy.request(href)
                .its('status')
                .should('eq', 200);
         });
    //HBS: The code below produced a Timed out error while waiting for the page to load
    //    cy.visit('https://betamasaheft.eu/Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317')
    //    cy.get('.w3-badge > a')
    //       .invoke('removeAttr', 'target').click()
    //    cy.url().should('eq', 'https://www.tau.ac.il/~hacohen/Lexicon/pp583.html')
    })
})