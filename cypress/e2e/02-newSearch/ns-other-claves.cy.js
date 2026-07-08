describe('New Search: Other Claves lookup', { tags: '@container' }, () => {
    // See 03_user 12
    it('should lookup other Clavis ID', () => {
        // 03_user 12.1: GO to full search page https://betamasaheft.eu/newSearch.html
        // 03_user 12.4: In the dropdown, select Lookup other Clavis ID
        // 03_user 12.5: In the new dropdown, select the Clavis (e.g. CPG)
        // 03_user 12.6: In the text field, insert the ID (exact match only) (e.g. 6127)
        // 03_user 12.7: Click the search symbol to get to the results
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'otherclavis',
                clavistype: 'CPG',
                query: '6127',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on'
            }
        })
        
        // 03_user 12.7: Verify results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'searchType=otherclavis')
            .and('include', 'clavistype=CPG')
            .and('include', 'query=6127')
        
        // Verify results are displayed
        cy.get('#results')
            .should('be.visible')
    })
})

