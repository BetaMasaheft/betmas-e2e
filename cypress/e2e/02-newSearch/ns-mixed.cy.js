describe('New Search Place and INS', () => {
    // See 03_user 8, 9
    it('should perform search with multiple type filters', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick multiple types
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'test',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': ['place', 'institution']
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'type-facet=place')
            .and('include', 'type-facet=institution')
        
        cy.get('#results')
            .should('be.visible')
    })
})