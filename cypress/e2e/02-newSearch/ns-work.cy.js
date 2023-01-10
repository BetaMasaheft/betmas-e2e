describe('New Search work', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'work'            
            },
        })
    })

    it.skip('', () => {
        
    })

})