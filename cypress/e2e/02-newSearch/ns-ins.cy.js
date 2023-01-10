describe('New Search INS', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'ins'            
            },
        })
    })

    it.skip('', () => {
        
    })

})