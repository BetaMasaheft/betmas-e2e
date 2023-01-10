describe('New Search PERS', () => {
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'pers'            
            },
        })
    })

    it.skip('', () => {
        
    })

})