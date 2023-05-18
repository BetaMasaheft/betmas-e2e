describe('id based URL routing', () => {

    // see #6
    it('resolves person ids', () => {
        cy.visit('PRS9429Tewodros')
        cy.url()
          .should('contain', 'persons')
    })

    it('resolves work ids', () => {
        cy.visit('LIT1385Fekkar')
        cy.url()
          .should('contain', 'works')
    })

    it('resolves manuscript ids', () => {
        cy.visit('ESum040')
        cy.url()
          .should('contain', 'manuscripts')
    })
})