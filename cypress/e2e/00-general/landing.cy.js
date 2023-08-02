describe('landing page', () => {
  beforeEach(() => {
    cy.visit('')
  })
  // General Layout of landing page
  // Menu Bar
  describe('menubar', () => {
    it('displays 15 items', () => {
      cy.get('#main > :nth-child(1) > .w3-black')
        .children()
        .children()
        .should('have.length', 18)
    })

    // 7.2
    // see simpleSearch.cy.js
    // Check for search icon
    it('should have working search icon in menu', () => {
      // slow version with click
      cy.get('.w3-hover-red')
        .should('have.attr', 'href')
        .and('include', 'simpleSearch')
      cy.get('.w3-hover-red')  
        .click()
      cy.url()
        .should('contain', 'simpleSearch')

      // fast version no click
      // cy.get('.w3-hover-red')  
      //   .invoke('attr', 'href')
      //   .then(href => {
      //     cy.request(href)
      //       .its('body')
      //       .should('include', 'simpleSearch')
      //       .and('include', '</html>')
      //   })  
    })

    // see 03_user 4
    // see https://docs.cypress.io/api/commands/hover
    // see #7 realHover broken in Chrome > 100
    it('manuscripts menu', () => {
      cy.get('#mss')
        .trigger('mouseover')
      cy.get(['data-value="shelfmarks"'])
        // (DP) actually it should be visible s.a.
        .should('not.be.visible')
        .then(() => {
          cy.request('/manuscripts/browse')
            .its('body')
            .should('include', 'id="group-A"')
            .and('include', '</html>')
        })
    })
  })

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
  // see 03_User 6
  describe('simple search', () => {
    // (DP) for proper tests of result page see simpleSearch.cy.js
    // 6.2-  6.3 
    it('should load new page via search button', () => {
      cy.get('#q')
        .type('"Miracles of Mary"')
      cy.get('#f-btn-search')
        .click()
      cy.url()
        .should('contain', 'Miracles+of+Mary')
    })
    // 6.2 - 6.3
    it('should search via keyboard', () => {
      cy.get('#q')
        .type('"Miracles of Mary"{enter}')
      cy.get('.container')
        .should('be.visible')
        .and('contain', 'Miracles of Mary')
    })
  })
})

