describe('about page', () => {
    // TODO(DP) see #2
    beforeEach(() => {
        cy.visit('about.html')
    })

    it('about page displays info', () => {
        cy.get('#info')
          .should('be.visible')
    })

    it('about page has no video section', () => {
        cy.get('#video')
          .should('not.exist')
    })

    // TODO(DP): need to fine tune this:
    // - bounding boxes need a fix, 
    // - http mixed content loading needs a fix
    it('about page displays no video buttons', () => {
        cy.get('#unlocked-video')
          .should('not.exist')
    })

    it('about page displays team sidebar', () => {
        cy.get('.w3-margin-top > .w3-bar-block').should('be.visible')
        cy.get('.w3-margin-top > .w3-bar-block > a').should('have.length', 7)
        cy.get('.w3-margin-top > .w3-bar-block > a')
          .first()
          .should('contain', 'team')
        cy.get('.w3-margin-top > .w3-bar-block > a')
          .last()
          .should('contain', 'homepage')  
    })
    
})