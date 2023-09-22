describe('A works page', () => {
    // see user 14 and 15

    beforeEach(() => {
      //Go to the page of a work record
        cy.visit('/works/LIT1709Kebran')
    })

    it('View work text', () => {
        // see 03_user 14
      //In the top menu, click Text and the page opens
      cy.get('[href*="/works/LIT1709Kebran/text"]')
        .invoke('attr', 'href')
        .then(href => {
          cy.request(href)
            .its('body')
            .should('include', '<div id="transcription">')
          })
    })

    it('See the witnesses of a work', () => {
      // see 03_user 15
      //See the red box on the right "This unit, or parts of it, is contained in 13 manuscript records 13 times"
      cy.get('#computedWitnesses .openInDialog').invoke('text').should(text => {
        expect(text).to.match(/This unit, or parts of it, is contained in [0-9]+ manuscript records [0-9]+ times/i)
      })
      //For more details on the witness, click on the underlined shelfmark in the list image
      cy.get('[href*="/manuscripts/BLorient818"]')
      .invoke('attr', 'href')
      .then(href => {
        cy.request(href)
          .its('body')
          .should('include', '</html>')
          .and('include', 'BL Oriental 818')
        })
  })
})