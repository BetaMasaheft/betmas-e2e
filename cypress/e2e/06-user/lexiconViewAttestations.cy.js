describe('view attestations of a lemma', () => {
    // see 03_user 19
    it('click on Load button loads the attestations', () => {
        cy.visit('/Dillmann/lemma/La28f0d661a324ba5a2364e70e63ef317') 
        cy.get('#loadattestations').click()
        // check that the clicked button disappears
        cy.get('#loadattestations').should('have.css', 'display', 'none')
        // check presence of number of records after waiting for them to load
        cy.wait(2500)
        cy.get('#NumOfAtt').should('exist')
        // check display of attestations
        cy.get('#attestations').children().should('have.length.least', 1)
    })
})