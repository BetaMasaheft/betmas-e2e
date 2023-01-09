describe('manuscript section', () => {
    beforeEach(() => {
        cy.visit('#manuscripts')
    })

    it('displays 7 access links', () => {
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .should('have.length', 7)
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .first()
          .should('contain', 'shelf mark')
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .last()
          .should('contain', 'Available')
    })

    // https://betamasaheft.eu/manuscripts/browse
    // https://betamasaheft.eu/catalogues/list
    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=ins
    // https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=mss
    // https://betamasaheft.eu/placeoforigin.html
    // https://betamasaheft.eu/manuscripts/viewer
    // https://betamasaheft.eu/availableImages.html

    // it ('should let you browse by shelf mark', () => {
    //     cy.get('[href="/manuscripts/browse"] > .w3-hover-opacity')
    //       .click()
    //       .should('')
    // })

    // Sample Record
    
    // Viewer Link

    // Available Images

})

