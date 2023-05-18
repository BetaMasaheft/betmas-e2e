describe('landing page', () => {
  beforeEach(() => {
    cy.visit('')
  })
  // General Layout of landing page
  // Menu Bar
  it('displays menu bar', () => {
    cy.get('#main > :nth-child(1) > .w3-black')
      .children()
      .children()
      .should('have.length', 18)
  })

  // Check for search icon
  // cy.get('.w3-hover-red')

  // Cover
  it('loads as guest user', () => {
    cy.get('#introductory > button.w3-button')
      .should('contain', 'guest')
  })

  // TODO(DP): The fake interactiviy on hoover is bad accessibility design, or is this broken and something should happen
  it('displays entities section', () => {
    cy.get('#entities')
      .children()
      .children()
      .should('have.length', 5)
  })

  // Intro
  it('displays Intro section', () => {
    cy.get('#intro')
      .children()
      .children()
      .should('have.length', 5)
  })

  // DillParser
  it('displays Dillman Parser section', () => {
    cy.get('#DillParser')
      .children()
      .children()
      .should('have.length', 2)
  })

  // Contribute
  it('displays contribution section', () => {
    cy.get('#contribute')
      .children()
      .children()
      .should('have.length', 2)
  })

  // See user 1
  it('Produces readable statistics', () => {
    cy.get(':nth-child(2) > .w3-margin-bottom > .w3-black')
      .click()
    cy.get('b.lead')
      .should('be.visible') 
      .should('have.length', 5)    
  })

  // Footer
  it('displays contribution section', () => {
    cy.get('#footer')
      .children()
      .children()
      .should('have.length', 3)
  })
  // Side-Menu
  it('opens and closes sidebar', () => {
    cy.get('.w3-grey')
      .click()
    cy.get('#sidebar > a')
      .should('have.length', 10)
    cy.get('.w3-btn')
      .click()
    cy.get('#sidebar')
      .should('not.be.visible')
  })
  // Search + Custom Keyboard

})

