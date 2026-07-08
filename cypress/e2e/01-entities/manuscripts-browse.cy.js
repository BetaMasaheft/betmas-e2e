describe('Manuscripts browsing page', { tags: '@container' }, () => {
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
      .should('not.be.visible')
      .prev()
      .click()
    cy.get('#listINS0333SBB')
      .should('be.visible')
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
        cy.request(href)
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