describe('New Search ETH', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'nar'            
            },
        })
    })

    it.skip('', () => {
        
    })

})