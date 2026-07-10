describe('New Search Place and INS', { tags: '@container' }, () => {
    // See 03_user 8, 9
    it('should perform search with multiple type filters', () => {
        // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick multiple types
        // 03_user 8.9: Get to the new filtered results page
        // Use qs for unique parameters, append repeated type-facet parameters manually
        // eXist-db expects repeated parameters: type-facet=place&type-facet=institution
        const baseParams = {
            searchType: 'text',
            query: 'test',
            defaultoperator: 'OR',
            mode: 'none',
            homophones: 'on'
        }
        
        // Build query string from qs object, then append repeated parameters
        const qsString = new URLSearchParams(baseParams).toString()
        cy.visit(`newSearch.html?${qsString}&type-facet=place&type-facet=institution`)
        
        // 03_user 8.9: Verify filtered results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'type-facet=place')
            .and('include', 'type-facet=institution')
        
        cy.get('#results')
            .should('be.visible')
    })
})