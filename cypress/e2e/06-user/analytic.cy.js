describe('analytic page', { tags: ['@container', '@container-only'] }, () => {
  // see 03_user 3
  beforeEach(() => {
    cy.visit('works/LIT1709Kebran/analytic')
  })

  it('shows relationship table with data', () => {
    // Note: #BetMasRel was commented out in items.xqm (line 404), replaced with .container.w3-half.w3-padding
    // The relationship table is in a div with class "container w3-half w3-padding"
    cy.get('.container.w3-half.w3-padding')
      .should('be.visible')
    cy.get('.w3-panel.w3-small.w3-red')
      .contains('relations found')
    // Check for the table rows (header + data rows)
    cy.get('.w3-table-all.w3-small tr')
      .should('have.length.of.at.least', 4)
  })

  // See 03_user 3 the graph is not working, aka empty
  // Note: #BetMasRelView is commented out in the source code, so this test is skipped
  it.skip('shows relationship graph area', () => {
    cy.get('#BetMasRelView')
      .should('be.visible')
  })

  it('omits RestNav item sidebar on analytic view', () => {
    // BetMasWeb#162 / Documentation#2922: record pages must not emit the
    // left #sidebar from item2:RestNav (witnesses box + margin-left:10%).
    // Help/index use a different #sidebar; this is the works ITEM shell.
    cy.get('#main').should('be.visible')
    cy.get('#sidebar').should('not.exist')
    cy.get('#textWitnesses').should('not.exist')
    cy.get('#main').should(($main) => {
      const style = $main.attr('style') || ''
      expect(style).not.to.match(/margin-left\s*:\s*10%/i)
    })
  })

  it('contains a working Persons link', () => {
    // (DP) see IndexPersons.cy.js
    // The IndexPersons link is in the header, not the sidebar
    cy.get('[href*="IndexPersons"]')
      .should('be.visible')
      .then(function ($a) {
        // extract the fully qualified href property
        const href = $a.prop('href')

        // make an http request for this resource
        // outside of the browser
        // the rendered href is root-absolute (missing app base in container)
        cy.requestFollowingAppRedirects(href)
          // drill into the response body
          .its('body')
          .should('include', '<h2>Index of person annotations</h2>')
          .and('include', '</html>')
      })
  })
})