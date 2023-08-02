describe('advanced search page', () => {
    beforeEach(() => {
      cy.visit('as.html')
    })
    
    // DP: Usability could not display hide show button on initial load
    describe('Structure', () => {
      // 03_User 7.3 
      it('should contain proper header', () => {
        cy.get('h3')
          .contains('General Search Options') 
      })
      
    // it would be better to use ID attr instead of name
      it.only('should perform test search', (done) => {
        // 03_User 7.4 
        cy.get('[name="query"]')
          .type('taammera')
        // 03_User 7.5  
        cy.get('[name="homophones"]')
          .should('have.attr', 'checked')
         // 03_User 7.6a   
        cy.get('[value="mss"]')
          .first()
          .check()
        cy.get('#collectionfilter')
          .select('Manuscripts')
        // TODO(DP) 03_User 7.6b can't find filter see #15
        // 03_User 7.7-8 
        // see #14 error triggerd when clicking submit-data button below
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('form is not defined')
            done()
            return false
          })
        cy.get('#submit-data')
          .click()
        // The results
        // 03_User 7.9
        // TODO(DP): need to get assertions to fire properly after error
        cy.url()
          .should('contain', 'taammera')
        cy.get('.w3-card-4 > h3')
          .contains('You found')
          .contains('Taʾammǝra') 
      })
    // TODO(DP) continue here to describe the general page structure   
    })
  })
  
  