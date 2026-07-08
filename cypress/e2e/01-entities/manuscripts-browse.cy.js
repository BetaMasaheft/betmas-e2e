describe('Manuscripts browsing page', { tags: '@container' }, () => {
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/64
     * Container drift in this spec comes from:
     * - cy.request() using the wrong base URL for /manuscripts/<repo>/list links
     * - a brittle visibility assertion around the accordion element (w3-hide).
     */
  beforeEach(() => {
    cy.visit('manuscripts/browse')
  })

  it('has quick select bar', () => {
    cy.get('.w3-bar')
      .should('have.length.at.least', 10)
  })

  it('expands the list of mss per repo', () => {
    // workaround the missing selector on the button
    cy.get('#listINS0333SBB')
      .should('have.class', 'w3-hide')
      .prev()
      .click()
    cy.get('#listINS0333SBB')
      .should('not.have.class', 'w3-hide')
  })

  // see 03_user 4
  it('it redirects to new search', () => {
    cy.get('[href*="INS0333SBB"]')
      .contains('Berlin State Library')
      .then(function ($a) {
        // extract the fully qualified href property
        const href = $a.prop('href')
        // Verify the URL contains the repository reference
        expect(href).to.include('INS0333SBB')
        const baseUrl = Cypress.config('baseUrl').replace(/\/$/, '')
        const base = new URL(baseUrl)
        const appPath = base.pathname.replace(/\/$/, '')
        const hrefUrl = href.startsWith('http') ? new URL(href) : new URL(href, base.origin)

        const requestUrl = hrefUrl.pathname.startsWith(appPath)
          ? hrefUrl.toString()
          : base.origin + appPath + hrefUrl.pathname

        cy.request(requestUrl)
          .its('body')
          .should('include', '</html>')
          // Check that it's a search page (has search form or reporef parameter)
          // This works regardless of whether the repository name is in the HTML
          // The local database might not have the same repository data as production
          .and('satisfy', (body) => {
            return body.includes('id="searchform"') || 
                   body.includes('reporef') || 
                   body.includes('searchType')
          })
      })

  })
})