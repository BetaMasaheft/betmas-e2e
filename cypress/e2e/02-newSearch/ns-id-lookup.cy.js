describe('New Search: ID lookup', { tags: '@container' }, () => {
    // See 03_user 10
    it('should lookup Betamasaheft ID', () => {
        // 03_user 10.1: GO Full search at https://betamasaheft.eu/newSearch.html
        // 03_user 10.2: In the dropdown, select Lookup Betamasaheft ID
        // 03_user 10.3: In the text field, insert the ID (or its part)
        // 03_user 10.4: Click the search symbol to get to the results
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'bmid',
                query: '646',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on'
            }
        })
        
        // 03_user 10.4: Verify results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'searchType=bmid')
            .and('include', 'query=646')
        
        // Verify results are displayed
        cy.get('#results')
            .should('be.visible')
        
        // 03_user 10.5: NB NEGATIVE - search string is extremely long
        // This is documented behavior - the URL will contain all possible fields
        // See https://github.com/BetaMasaheft/BetMasWeb/issues/3
        // Note: URL length varies by environment, so we just document the behavior
        // rather than asserting on a specific length
    })

    it('should handle partial ID lookup', () => {
        // 03_user 10.3: In the text field, insert the ID (or its part)
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'bmid',
                query: 'PRS9429',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on'
            }
        })
        
        cy.url()
            .should('include', 'searchType=bmid')
            .and('include', 'query=PRS9429')
        
        cy.get('#results')
            .should('be.visible')
    })
})

