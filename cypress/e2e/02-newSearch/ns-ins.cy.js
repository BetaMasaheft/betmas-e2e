describe('New Search INS', () => {
    // See 03_user 8
    it('should perform search filtered to institutions', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Institutions
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'library',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': 'institution'
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'type-facet=institution')
        
        cy.get('#results')
            .should('be.visible')
    })
})