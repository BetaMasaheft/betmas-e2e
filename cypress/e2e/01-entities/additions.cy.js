describe('additions page', () => {
    beforeEach(() => {
        // TODO(DP): This is SLOW !! see #5
        // HTTPS errors are ignored to make the test run at all
        cy.visit({
            url: 'additions',
            timeout: 100000 
        })

    })

    it('the header should appear', () => {
        // cy.request('https://betamasaheft.eu/additions')
        cy.get('h3')
            .should('be.visible')
    })
})

