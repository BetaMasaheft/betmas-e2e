describe('Manuscripts browsing page', () => {
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

  // see user 4
  it('it redirects to new search', () => {
    cy.get('[href*="INS0333SBB"]')
      .contains('Berlin State Library')
      .then(function ($a) {
        // extract the fully qualified href property
        const href = $a.prop('href')
        cy.request(href)
          .its('body')
          .should('include', 'Berlin State Library')
          .and('include', '</html>')
      })

  })
})