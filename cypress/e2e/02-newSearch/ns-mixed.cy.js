describe('New Search Place and INS', () => {
    // See User 8, 9 
    beforeEach(() => {
        cy.visit('newSearch', {
            qs: {
              searchType: 'text',
              mode: 'any',
              'work-types': 'places',
              'work-types': 'ins'             
            },
        })
    })

    it.skip('', () => {
        
    })

})