describe('additions page', { tags: ['@container', '@slow'] }, () => {
  beforeEach(() => {
    // TODO(DP): This is SLOW !! 
    // see #5
    // HTTPS errors are ignored to make the test run at all
    cy.visit({
      url: 'additions',
      timeout: 100000
    })

  })
  // (DP) because of the very slow load time we reduce the number of refreshes
  describe('general layout', () => {
    it('should show header', () => {
      cy.get('h3')
        .first()
        .should('be.visible')
        .contains('Additions Filtered Search')
    })

    // TODO(DP) length of list on right should match check boxes on the left
    it('should display entities', () => {
      // Main list on the right
      cy.get('#content')
        .find('h3')
        .contains('entities matching')
      // hit counts actually show numbers 
      cy.get('#hit-count')
        //(DP) use regex to make sure its a number 
        .contains(/^\d\d*/)

    })

    
    it('should provide filters', () => {
      // Section on the left 
      cy.get('#additiontypes')
        .should('be.visible')
      // Has checkmark list
      // and Scroll to find sections
      // and textinput area
      // and two buttons
    })
  })

  describe('browsing additions by type', () => {
    // See 03_user 5.2
    it('should show results for small sets', () => {
      cy.get('[data-value="AcquisitionNote"]')
        .should('be.visible')
        .click()
      cy.get('#AcquisitionNote')
        .should('be.visible')
        .find('li')
        .should('have.length.at.least', 20)
        // (DP) no Shelfmark regex and no guaranty that the first hit will always have text fragment
        .find('p.gez')
        .should('have.length.at.least', 10)
      cy.get('#AcquisitionNote')
        .find('li')
        .find('>a')
        .should('have.length.at.least', 10)
    })
    // TODO(DP) ensure the links to texts are operational without leaving the page

    // See 03_User 5.4, 5.5
    // (DP) De-/Select all missing see #9
    // (DP) scrollable list has no deselct see #10
    // (DP) Browser Navigation see #11
    // Type checkboxes are built client-side from .additionType spans on the
    // current results page (lists:addRes group pagination, BetMasWeb#67).
    // Deep-link the type so OwnershipNote is among the rendered groups.
    it('should use addtional filters for large sets', () => {
      cy.visit({
        url: 'additions?type=OwnershipNote',
        timeout: 100000
      })
      cy.get('#additiontypes [value="OwnershipNote"]')
        .should('exist')
        .check()
      cy.get('#target-pers')
        .find('[value$="dAbbadi"]')
        .click()
      cy.get('.w3-bar > .w3-red')
        .click()
      cy.get('#results')
        .should('be.visible')
      // TODO(DP) add better assertion for result
    })

    // GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/12
    // A literal apostrophe used to break the server-side query (it closed
    // the XQuery string literal early) - fixed in BetMasWeb's resources.xqm.
    it('should accept an apostrophe in the text input search without erroring', () => {
      cy.get('input[name="termText"]')
        .type("d'Abbadie")
      cy.get('.w3-bar > .w3-red')
        .click()
      cy.get('#content')
        .find('h3')
        .contains('entities matching')
      cy.contains('error', { matchCase: false }).should('not.exist')
    })
  })
})

