describe('New Search studies', { tags: '@container' }, () => {
    // See 03_user 8
    it('should perform search filtered to studies', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Studies
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'miracles',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': 'study'
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'query=miracles')
            .and('include', 'type-facet=study')
        
        cy.get('#results')
            .should('be.visible')
    })
})