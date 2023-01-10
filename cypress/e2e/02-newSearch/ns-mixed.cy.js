describe('New Search Place and INS', () => {
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