describe('New Search MSS', { tags: '@container' }, () => {
    // See 03_user 8
    it('should perform search filtered to manuscripts', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Manuscripts
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'miracles',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': 'manuscript'
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'query=miracles')
            .and('include', 'type-facet=manuscript')
        
        cy.get('#results')
            .should('be.visible')
    })
})