describe('Manuscripts: view images and content', () => {
    // See user 13 and 16

    // Tests done with manuscript ESdz01. Short title stored in constant
    const msTitle = 'Gǝbra Ḥǝmāmāt'

    beforeEach(() => {
        cy.visit('/manuscripts/ESdz010')
    })

    it('View manuscript images', () => {
        // See 03_user 13
        // In the top menu, click Images
        cy.get('[href*="/manuscripts/ESdz010/viewer"]')
        .invoke('removeAttr', 'target')
        .click()
        // The page opens with MIRADOR viewer and images visible
        cy.get('.mirador-main-menu-bar')
          .should('be.visible')
          cy.get('li.highlight > .thumbnail-image')
          .should('be.visible')
        // To get to the main entry view, select Entry in the top menu, you will be redirected to https://betamasaheft.eu/manuscripts/ESap028/main  
        cy.get('[href*="/manuscripts/ESdz010/main"]')
        .invoke('attr', 'href')
        .then(href => {
          cy.request(href)
            .its('body')
            .should('include', '</html>')
            .and('include', msTitle)
          })
      })

      it('View manuscript contents', () => {       
        // See 03_user 16
        // Click on "contents" to expand view 
        cy.get('button[resource="https://betamasaheft.eu/ESdz010/msitem/ms_i1"][onclick^="openAccordion"]')
        .click()
        // Click other eventual boxes to expand view 
        cy.get('[onClick^=openAccordion][onClick*=itemms_i1-4]')  
        // To get more information about a work contained, click on the underlined work title 
        cy.get('[href="/LIT1544Gebrah"]')
        .invoke('attr', 'href')
        .then(href => {
          cy.request(href)
            .its('body')
            .should('include', '</html>')
            .and('include', msTitle)
          })
      })

})