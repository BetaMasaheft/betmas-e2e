describe('additions page', () => {
    beforeEach(() => {
        // TODO(DP): This is SLOW !! see #5
        cy.visit({
            url: 'additions',
            timeout: 100000
        })

    })

    it('', () => {
        cy.get('h3')
            .should('be.visible')
    })
})

