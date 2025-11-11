describe('New Search ETH', () => {
    // See 03_user 8
    it('should perform search filtered to authority files', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Authority Files
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'test',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': 'authority-file'
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'type-facet=authority-file')
        
        cy.get('#results')
            .should('be.visible')
    })
})