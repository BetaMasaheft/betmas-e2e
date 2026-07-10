describe('simple search page', { tags: '@container' }, () => {
    beforeEach(() => {
        // see #2
        // TODO(DP): depending on the continued use see BetaMasaheft/Documentation#2219, 
        // add tests for search options, and drill down search, and custom keyboard input
        // cookiebar-latest.min.js CrossOrigin https error
        cy.visit('simpleSearch.html',
            {
                qs: {
                    searchType: 'text',
                    mode: 'any',
                    query: '"Miracles of Mary"',
                },
            })
    })

    it('should show hits', () => {
        cy.get('#hit-count')
          .should('not.have.value', '0')
          .and('not.be.empty')
    })

    // see landing.cy.js
    // See 03_User 6.4
    it('should show results by entry type', () => {
        cy.get('#results')
          .children()
          .should('have.length', 6)
          .and('contain', 'in persons')
          .and('contain', 'in works')
          .and('contain', 'Miracles of Mary')
    })
    // see 03_user 6.5
    it('should have active links to records', () => {
        cy.get('.resultsworks')
          .find('a')
          .first()
          .contains('Mary')
        // (DP) we're not clicking as the list and sorting can change
        // just checking if there is a proper record page returned and if it contains the search term
          .invoke('attr', 'href')
          .then(href => {
            cy.request(href)
              .its('body')
              .should('include', 'Mary')
              .and('include', '</html>')
          })
    })

    describe('search options', () => {
      // DP: was 14 modi see #20, then 13; 12 on both targets since 2026-07-10
      it('should display 12 modi', () => {
        cy.get(':nth-child(4) > .w3-bar')
          .children()
          .should('have.length', '12')
      })

    // 03_user 7.3
    // see 06-user/advancedSearch.cy.js and 02-newSearch/*.js
    // The "repeat search in advanced search" link is commented out on the
    // production deploy (verified 2026-07-10); it only renders in the
    // release-expanded container, hence @container-only.
    it('should have working advanced search', { tags: '@container-only' }, () => {
      cy.get('[href*="as.html"]')
        .first()
        .then(($a) => {
          const href = $a.prop('href')

          cy.requestFollowingAppRedirects(href)
            .its('body')
            .should('include', 'simpleSearch')
            .and('include', '</html>')
        })
    })
  })
})