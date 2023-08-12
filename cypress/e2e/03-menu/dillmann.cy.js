describe('Dillman page', () => {
    // TODO(DP): before we can do anything this application error needs to be gone see #4
    // see 03_User 18-20
    // see 02_Contrib 3-6
    // see 06-users/lemma.cy.js
    beforeEach(() => {
        // cy.on('uncaught:exception', (err, runnable) => {
        //     expect(err.message).to.include('Cannot read properties of undefined')

        //     done()
        //     return false
        // })
        cy.visit('Dillmann/')
    })

    it('should announce Beta version warning', () => {
        cy.get('#body')
            .should('contain', 'This app is a prototype Beta version.')
    })

    describe('lemma search', () => {
        // see 03_user 18

        it('should work with mouse', () => {
            cy.get('[name="q"]')
                .type('ሀሰሰ')

            // 3_user 18.3 default mode is "Normal, with homophones"
            // @iwonagg your assertion isn't actualy testing this
            cy.get('[name="mode"]').select('none')
            cy.get('.fa-search').click()
            // 03_user 18.4
            cy.get('#results > .w3-row')
                .should('be.visible')
            cy.get('h3')
                .should('contain', 'You found "ሀሰሰ" in ')
            cy.get('#results').invoke('attr', 'data-template-per-page')
                .then(value => {
                    const pagination_int = parseInt(value);
                    cy.get('#results > .w3-row').its('length').should('be.lte', pagination_int)
                })
            // @iwonagg we are effectively testing if the first hit for the searchterm remains stable
            // I have no idea if that is the case. Generally, if we assert on the id of the hit, i would
            // try to find a different means of selecting if from the list of results. Alternatively. make a weakrer assertion
            // so that new documents won't change the test result. 
            cy.get('#results .w3-twothird > a').first().invoke('attr', 'href')
                .should('be.eq', '?mode=none&q=ሀሰሰ&id=La28f0d661a324ba5a2364e70e63ef317')
                .then(href => {
                    cy.request(href)
                        .its('status')
                        .should('eq', 200)
                });
            // 03_user 18.5
            // @iwonagg see above, using the first hit here is different, its just a way station any result will work
            cy.get('#results .w3-twothird').first().click()
            // @iwonagg testcases (it) should always end in an assertion 
            // a record appears indicated by the newly visible h3 dillman section
            cy.get('.entry')
              .contains('Dillman')

        });


        it('should work with keyboard', () => {
            // 3_user 18.3 
            // select mode of searching as Fuzzy Search
            cy.get('[name="mode"]').select('fuzzy')

            // search for lemma ሀሰሰ
            cy.get('[name="q"]')
                .type('ሀሰሰ')
                .type('{enter}')
            // @iwonagg the next 3 assertions just repeat those from the previous testcase,
            // this is a good opportunity to switch things up a little and broaden coverage
            cy.get('#results > .w3-row')
                .should('be.visible');
            cy.get('h3')
                .should('contain', 'You found "ሀሰሰ" in ')

            // the list of results has >= elements then pagination 
            cy.get('#results').invoke('attr', 'data-template-per-page')
                .then(value => {
                    const pagination_int = parseInt(value);
                    cy.get('#results > .w3-row').its('length').should('be.lte', pagination_int)
                })

            // @iwonagg s.a. we are now implicitely testing those search modes. by asserting that the
            // first result has different ids. it would be better to make that an explicit assertion
            // that doesn't rely on position in the result list
            // first link leads to Lf7959209d07e4f6fa0e3f6fe00ff8428
            cy.get('#results .w3-twothird > a').first().invoke('attr', 'href')
                .should('be.eq', '?mode=fuzzy&q=ሀሰሰ&id=Lf7959209d07e4f6fa0e3f6fe00ff8428')
                .then(href => {
                    cy.request(href)
                        .its('status')
                        .should('eq', 200);
                })

            // first link opens the page with lemma description headed with first link text
            cy.get('#results .w3-twothird').first().click()
            cy.get('#results .w3-twothird > a').invoke('prop', 'text')
                .then(value => {
                    cy.get('.w3-container #lemma').first().should('contain', value)
                })
        })
    })
})