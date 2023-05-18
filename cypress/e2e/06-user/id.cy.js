describe('id based URL routing', () => {

    // see #6
    it('resolves person ids', () => {
        cy.visit('PRS9429Tewodros')
        cy.url()
          .should('contain', 'persons')
    })

    // (DP) To click on it without opening new tab
    // .invoke('removeAttr', 'target').click()
    it('resolves work ids and has analaytics view links', () => {
        cy.visit('LIT1385Fekkar')
        cy.url()
          .should('contain', 'works')
        cy.get('[href$=analytic]')
          .first()
          .then(function ($a) {
            // extract the fully qualified href property
            const href = $a.prop('href')
      
            // make an http request for this resource
            // outside of the browser
            cy.request(href)
            // drill into the response body
            .its('body')
      
            // and assert that its contents have the <html> response
            .should('include', 'id="BetMasRel"')
            .and('include', 'id="BetMasRelView"')
            .and('include', '</html>')
          }) 
    })

    it('resolves manuscript ids', () => {
        cy.visit('ESum040')
        cy.url()
          .should('contain', 'manuscripts')
          .get('[href$=analytic]')
          .contains('Relations')
          
    })
})