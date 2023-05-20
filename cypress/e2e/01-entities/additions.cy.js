describe('additions page', () => {
  beforeEach(() => {
    // TODO(DP): This is SLOW !! 
    // see #5
    // HTTPS errors are ignored to make the test run at all
    cy.visit({
      url: 'additions',
      timeout: 100000
    })

  })

  it('should show header', () => {
    cy.get('h3')
      .first()
      .should('be.visible')
      .contains('Additions Filtered Search')
  })

  it('should display entities', () => {
    cy.get('#content')
      .find('h3')
      .contains('entities matching')
    cy.get('#hit-count')
      //(DP) use regex to make sure its a number 
      .contains(/^\d\d*/)

  })

  it('should provide filters', () => {
    cy.get('#additionstypes')
      .should('be.visible')
  })

  describe('browsing additions by type', () => {
    // See 03_user 5.2
    it('has results for small sets', () => {
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

    // TODO(DP) Continue here 5.4
    it('uses addtional filters for large sets', () => {
      cy.get('#additionstypes')
        .should('be.visible')
    })
  })
})

