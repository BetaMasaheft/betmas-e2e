describe('New Search PERS', { tags: '@container' }, () => {
    // See 03_user 8
    it('should perform search filtered to persons', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Persons
        // 03_user 8.9: Get to the new filtered results page
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                query: 'Mary',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'type-facet': 'person'
            }
        })
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'query=Mary')
            .and('include', 'type-facet=person')
        
        cy.get('#results')
            .should('be.visible')
    })
})