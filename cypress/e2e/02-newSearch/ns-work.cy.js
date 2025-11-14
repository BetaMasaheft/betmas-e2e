describe('New Search work', () => {
    // See 03_user 8
    beforeEach(() => {
        cy.visit('newSearch.html')
    })

    describe('basic text search', () => {
        it('should perform simple text search', () => {
            // 03_user 8.4: Select the search type (for text search - Simple search)
            cy.get('[name="searchType"]')
                .should('exist')
                .select('text')
            
            // 03_user 8.5: Insert the string in the search field
            cy.get('[name="query"]')
                .type('miracles')
            
            // 03_user 8.6: Click the SEARCH button
            // Use the unique ID for the main search form submit button
            cy.get('#submit-data')
                .should('be.visible')
                .click()
            
            // 03_user 8.7: Get to search results page
            cy.url()
                .should('include', 'newSearch.html')
                .and('include', 'query=miracles')
                .and('include', 'searchType=text')
            
            // Verify results are displayed
            cy.get('#results')
                .should('be.visible')
        })

        it('should have homophones enabled by default', () => {
            cy.get('[name="homophones"]')
                .should('be.checked')
        })
    })

    describe('filtering', () => {
        beforeEach(() => {
            // Start with a search
            cy.get('[name="searchType"]').select('text')
            cy.get('[name="query"]').type('miracles')
            // Use the unique ID for the main search form submit button
            cy.get('#submit-data')
                .should('be.visible')
                .click()
            cy.get('#results').should('be.visible')
        })

        it('should apply item type filter', () => {
            // 03_user 8.8: Apply filters on the left, e.g. Item type -> tick Manuscripts
            // First, open the "Item type" facet accordion to make checkboxes visible
            cy.get('button')
                .contains('Item type')
                .click()
            // Wait for the facet list to be visible, then check the checkbox
            cy.get('#type-facet-list')
                .should('be.visible')
            cy.get('[name="type-facet"][value="manuscript"]')
                .check('manuscript')
            
            // Click Refine search results button (text is lowercase with icon)
            // Target the submit button in the facets form
            cy.get('form#facetsSearch button[type="submit"]')
                .contains('refine search results', { matchCase: false })
                .click()
            
            // 03_user 8.9: Get to the new filtered results page
            cy.url()
                .should('include', 'type-facet=manuscript')
            
            cy.get('#results')
                .should('be.visible')
        })

        it('should apply additional filters like codicological units', () => {
            // First apply type filter
            // Open the "Item type" facet accordion
            cy.get('button')
                .contains('Item type')
                .click()
            cy.get('#type-facet-list')
                .should('be.visible')
            cy.get('[name="type-facet"][value="manuscript"]')
                .check('manuscript')
            cy.get('form#facetsSearch button[type="submit"]')
                .contains('refine search results', { matchCase: false })
                .click()
            cy.get('#results').should('be.visible')
            
            // 03_user 8.10: Apply further filters, e.g. Number of codicological units
            // Open the "N. of Codicological Units" facet accordion
            cy.get('button')
                .contains('N. of Codicological Units')
                .click()
            cy.get('#msPartsCount-facet-list')
                .should('be.visible')
            cy.get('[name="msPartsCount-facet"][value="2"]')
                .check('2')
            
            cy.get('form#facetsSearch button[type="submit"]')
                .contains('refine search results', { matchCase: false })
                .click()
            
            // 03_user 8.11: Get filtered results
            cy.url()
                .should('include', 'msPartsCount-facet=2')
            
            cy.get('#results')
                .should('be.visible')
        })
    })

    describe('results', () => {
        it('should display search results', () => {
            // 03_user 8.7: Get to search results page
            cy.visit('newSearch.html', {
                qs: {
                    searchType: 'text',
                    clavistype: '',
                    query: 'miracles',
                    defaultoperator: 'OR',
                    mode: 'none',
                    homophones: 'on'
                }
            })
            
            // 03_user 8.7: Verify results page
            cy.url()
                .should('include', 'newSearch.html')
                .and('include', 'query=miracles')
                .and('include', 'searchType=text')
            
            // Verify results are displayed
            cy.get('#results')
                .should('be.visible')
        })

        it('should display filtered results by type', () => {
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
                .should('include', 'type-facet=manuscript')
            
            cy.get('#results')
                .should('be.visible')
        })

        it('should display results with multiple filters', () => {
            // 03_user 8.11: Get filtered results with multiple facets
            cy.visit('newSearch.html', {
                qs: {
                    searchType: 'text',
                    query: 'miracles',
                    defaultoperator: 'OR',
                    mode: 'none',
                    homophones: 'on',
                    'type-facet': 'manuscript',
                    'msPartsCount-facet': '2'
                }
            })
            
            // 03_user 8.11: Verify filtered results page
            // Note: Only one msPartsCount-facet value appears in URL
            cy.url()
                .should('include', 'type-facet=manuscript')
                .and('include', 'msPartsCount-facet')
            
            cy.get('#results')
                .should('be.visible')
        })
    })

    describe('known issues', () => {
        it('should document that phrase search mode does not work', () => {
            // 03_user 8.12: NB Negative - phrase search does not work
            cy.visit('newSearch.html', {
                qs: {
                    searchType: 'text',
                    query: 'miracles+of+mary',
                    defaultoperator: 'OR',
                    mode: 'phrase',
                    homophones: 'on'
                }
            })
            
            // 03_user 8.12: Note: This is a known issue - phrase mode yields 0 results
            // The test documents the current behavior
            cy.url()
                .should('include', 'mode=phrase')
            
            // Verify that results may be empty (known issue)
            cy.get('#results')
                .should('exist')
        })

        it('should document space sensitivity issue', () => {
            // 03_user 8.13: NB Negative - over sensitive to spaces
            // See https://github.com/BetaMasaheft/Documentation/issues/2015
            // Note: Adding space at end may cause error
            // This test documents the known issue
            cy.visit('newSearch.html', {
                qs: {
                    searchType: 'text',
                    query: 'miracles ',
                    defaultoperator: 'OR',
                    mode: 'none',
                    homophones: 'on'
                }
            })
            
            // Document the behavior - may cause error or unexpected results
            cy.url()
                .should('include', 'newSearch.html')
        })
    })
})