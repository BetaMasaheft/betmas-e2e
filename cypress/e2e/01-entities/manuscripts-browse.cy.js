describe('Manuscripts browsing page', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/64
   * Container redirects may omit the app base path in Location headers.
   */
  beforeEach(() => {
    cy.visit('manuscripts/browse')
  })

  it('has quick select bar', () => {
    cy.get('.w3-bar')
      .should('have.length.at.least', 10)
  })

  it('expands the list of mss per repo', () => {
    cy.get('#listINS0333SBB')
      .should('have.class', 'w3-hide')
      .prev()
      .click()
    cy.get('#listINS0333SBB')
      .should('have.class', 'w3-show')
  })

  // see 03_user 4
  it('it redirects to new search', () => {
    cy.get('[href*="INS0333SBB"]')
      .contains('Berlin State Library')
      .then(function ($a) {
        const href = $a.prop('href')
        expect(href).to.include('INS0333SBB')

        cy.requestFollowingAppRedirects(href)
          .its('body')
          .should('include', '</html>')
          .and('satisfy', (body) => {
            return body.includes('id="searchform"') ||
                   body.includes('reporef') ||
                   body.includes('searchType')
          })
      })
  })
})
