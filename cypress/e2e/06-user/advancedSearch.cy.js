describe('The advanced search page', () => {
  beforeEach(() => {
    cy.visit('as.html')
  })

  // DP: Usability could not display hide show button on initial load
  describe('layout', () => {
    // 03_User 7.3 
    it('should contain proper header', () => {
      cy.get('h3')
        .contains('General Search Options')
    })

    it('should toggle filters', () => {
      cy.get('#gsf')
        .should('exist')
      cy.get('#tooglesearchfield')
        .click()
        .find('#gsf')
        .should('not.exist')
    })

    it('should show general filters', () => {
      // 03_User 7.11
      // see BetaMasaheft/Documentation#2219
      // known to be broken hence we can't test effect on results
      cy.get('[value="languages"]')
        .check()
      cy.get('#language')
        .should('exist')

      cy.get('[value="keywords"]')
        .check()
      cy.get('#keywords')
        .should('exist')

      cy.get('[value="relations"]')
        .check()
      cy.get('#relations')
        .should('exist')

      cy.get('[value="date"]')
        .check()
      cy.get('#datesform')
        .should('exist')
 
    })
    
  })
  describe('search', () => {
    // it would be better to use ID attr instead of name
    it('should use filters', () => {
      // 03_User 7.4 
      cy.get('[name="query"]')
        .type('taammera')
      // 03_User 7.5  
      cy.get('[name="homophones"]')
        .should('have.attr', 'checked')
      // 03_User 7.6a   
      cy.get(':nth-child(1) > [value="mss"]')
        .check()
      cy.get('#collectionfilter')
        .select('Manuscripts')
        .should('have.value', 'mss')
      // 03_User 7.6b
      cy.get('#mssFilter')
        .should('be.visible')
      cy.get('[value="CUnumber"]')
        .check()
      // 03_User 7.7-8 
      // see #14 error triggerd when clicking submit-data button below
      cy.get('#submit-data')
        .click()
      // 03_User 7.9  
      cy.url()
        .should('contain', 'taammera')
      cy.get('.w3-card-4 > h3')
        .should('contain', 'You found')
      cy.get('#results')
        .should('contain', 'Taʾammǝra')
    })
  })
  describe('results', () => {
    it('should be broken down by type', () => {
      // 03_User 7.10
      cy.visit('as.html', {
        qs: {
          query: 'miracles+of+mary',
          AttestedInType: 1
        }
      })
      
      cy.get('#results')
        .within(($results) => {
          cy.get('.resultspersons')
            .should('contain', 'Mary')
          cy.get('.resultsworks')
            .should('contain', 'Mary')
          cy.get('.resultsstudies')
            .should('contain', 'Mary')
          cy.get('.resultsplaces')
            .should('contain', 'Mary')
          cy.get('.resultsauthority-files')
            .should('contain', 'Mary')
          cy.get('.resultsinstitutions')
            .should('contain', 'Mary')
          cy.get('.resultsmanuscripts')
            .should('contain', 'Mary')
          cy.get('.resultsnarratives')
            .should('contain', 'Mary')
        })
    })
  })
})

