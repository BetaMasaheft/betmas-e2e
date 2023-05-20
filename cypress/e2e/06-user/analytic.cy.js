describe('analytic page', () => {
  // see 03_user 3
  beforeEach(() => {
    cy.visit('works/LIT1709Kebran/analytic')
  })

  it('shows relationship table with data', () => {
    cy.get('#BetMasRel')
      .should('be.visible')
    cy.get('.container.w3-half > .w3-panel')
      .contains('relations found')
    cy.get('tr')
      .should('have.length.of.at.least', 4)
  })

  // See 03_user 3 the graph is not working, aka empty
  it('shows relationship graph area', () => {
    cy.get('#BetMasRelView')
      .should('be.visible')
  })

  describe('sidebar', () => {
    it('shows 4 items in view', () => {
      cy.get('#footer')
        .scrollIntoView()
      cy.get('#sidebar')
        .should('be.visible')
        .find('a')
        .should('have.length', 4)
    })
    it('contains a working Persons link', () => {
      // (DP) see IndexPersons.cy.js
      cy.get('[href^="/IndexPersons"]')
        .then(function ($a) {
          // extract the fully qualified href property
          const href = $a.prop('href')

          // make an http request for this resource
          // outside of the browser
          cy.request(href)
            // drill into the response body
            .its('body')
            .should('include', '<h2>Index of person annotations</h2>')
            .and('include', '</html>')
        })
    })

    // see #8
    it('contains a working Works link', () => {
      cy.get('[href^="/works"]')
        .then(function ($a) {
          // extract the fully qualified href property
          const href = $a.prop('href')

          // make an http request for this resource
          // outside of the browser
          cy.request(href)
            // drill into the response body
            .its('body')
            // (DP) Might be to strict to include the title string
            .should('include', '<h1 id="headtitle">Kǝbra nagaśt</h1>')
            .and('include', '</html>')
        })
    })
  })

})