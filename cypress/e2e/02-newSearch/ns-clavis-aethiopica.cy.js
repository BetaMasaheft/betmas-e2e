describe('New Search: Clavis Aethiopica reference lookup', () => {
    // See 03_user 11
    it('should lookup Clavis Aethiopica Number', () => {
        // 03_user 11.1: GO to Full search page https://betamasaheft.eu/newSearch.html
        // 03_user 11.2: In the dropdown, select Lookup Clavis Aethiopica Number
        // 03_user 11.3: In the text field, insert the number, e.g. 6666
        // 03_user 11.6: Click the search symbol to get to the results
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'clavis',
                clavistype: '',
                query: '6666',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on'
            }
        })
        
        // 03_user 11.6: Verify results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'searchType=clavis')
            .and('include', 'query=6666')
        
        // Verify results are displayed
        cy.get('#results')
            .should('be.visible')
    })
})

