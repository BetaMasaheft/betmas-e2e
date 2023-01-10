describe('New Search studies', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'studies'            
            },
        })
    })

    it.skip('', () => {
        
    })

})