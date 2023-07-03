describe('Introducion section', () => {
    beforeEach(() => {
      cy.visit('')
    })

    it('displays four language selection buttons', () => {
      cy.get('[onclick^="openIntro"]').should('have.length', 4)
      cy.get('[onclick^="openIntro"]').first().should('have.text', 'English')
      cy.get('[onclick^="openIntro"]').last().should('have.text', 'Tigrinya')
    })
  
    it('EN language button displays matching Intro', () => {
      cy.get('[onclick*="introEN"]')
        .click()
      cy.get('#introEN')
        .should('be.visible')
        .contains('German Academies of Sciences')
    })
  
    it('AR language button displays matching Intro', () => {
      cy.get('[onclick*="introAR"]')
        .click()
      cy.get('#introAR')
        .should('be.visible')
        .contains('كيفيّة المشاركة')
    })
  
    it('AM language button displays matching Intro', () => {
      cy.get('[onclick*="introAM"]')
        .click()
      cy.get('#introAM')
        .should('be.visible')
        .contains('መረጃ፡ ማጋራት፡ እና፡ መጠቀም፤')
    })
  
    it('TY language button displays matching Intro', () => {
      cy.get('[onclick*="introTY"]')
        .click()
      cy.get('#introTY')
        .should('be.visible')
        .contains('ሓበሬታ ምክፋልን ኣጠቓቕማን')
    })
  })
  
  