// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// TODO(DP):  make request based link check a custom command
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginCataloguer', (username = 'JinntecCatalogue') => {
  cy.env(['PASSWORD_CATALOGUER']).then(({ PASSWORD_CATALOGUER }) => {
    cy.removeHover('#logging')
    cy.get('input[name="user"]').type(username)
    cy.get('input[name="password"]').type(PASSWORD_CATALOGUER)
    cy.get('#login-nav > .w3-button').click()
  })
})

Cypress.Commands.add('removeHover', (menuId) => {
    cy.get(menuId)
    //we first check the presence of the pertinent classes related to hover
    .should('have.class', 'w3-dropdown-hover')
    .and('have.descendants', 'div.w3-dropdown-content')
    //Then we take out the class that makes the content invisible, so we can access the elements
    cy.get('.w3-dropdown-content')
    .invoke('removeAttr', 'class')
})