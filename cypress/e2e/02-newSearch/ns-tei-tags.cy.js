describe('New Search: Search in specific TEI tags', () => {
    // See 03_user 9
    it('should search in specific TEI tags', () => {
        // 03_user 9.1: GO to Full search https://betamasaheft.eu/newSearch.html
        // 03_user 9.2: Select the search type (for text search - Simple search)
        // 03_user 9.3: Insert the string in the search field in the middle, e.g. 'miracles'
        // 03_user 9.4: Under the text field, click on the three-line-button to get additional options
        // 03_user 9.5: Type additional search parameters (e.g. I want to look for "fine" in handDesc and "Mary" in msContent)
        // 03_user 9.6: Click the search symbol and get the results
        cy.visit('newSearch.html', {
            qs: {
                searchType: 'text',
                clavistype: '',
                query: 'miracles',
                defaultoperator: 'OR',
                mode: 'none',
                homophones: 'on',
                'handDesc-operator-field': 'AND',
                'handDesc-field': 'fine',
                'msContent-operator-field': 'AND',
                'msContent-field': 'mary'
            }
        })
        
        // 03_user 9.6: Verify results page
        cy.url()
            .should('include', 'newSearch.html')
            .and('include', 'query=miracles')
            .and('include', 'handDesc-field=fine')
            .and('include', 'msContent-field=mary')
        
        // Verify results are displayed
        cy.get('#results')
            .should('be.visible')
    })
})

