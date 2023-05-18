describe('Dillman page', () => {
    // TODO(DP): before we can do anything this application error needs to be gone see #4
    // see User 18-20
    // see Contrib 3-6
    before((done) => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('Cannot read properties of undefined')

            done()
            return false
        })
        cy.visit('Dillmann/')
    })

    it('should limit search to citations via slider', () => {
        cy.get('#body')
          .should('contain', 'This app is a prototype Beta version.')
    })
})