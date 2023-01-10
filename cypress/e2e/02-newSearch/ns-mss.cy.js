describe('New Search MSS', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'mss'            
            },
        })
    })

    it.skip('', () => {
        
    })

})