const username = 'JinntecCatalogue'
const password = Cypress.env('passwordCataloguer')

const placeholder = 'to-be-deleted'

// See tests 02_01 and 02_02

describe('Necessary workflows for cataloguer users', () => {

  beforeEach('Logging in', () => {
    cy.visit('/')
    //In Navigation bar (left), select Login, in the dropdown insert login credentials
    cy.get('#logging')
    // Since the visualization of a the login dialog depends
    // on a CSS hover selector, we first check the presence of the pertinent classes
    .should('have.class', 'w3-dropdown-hover')
    .and('have.descendants', 'div.w3-dropdown-content')
    //Then we take out the class that makes the content invisible, so we can access the elements
    cy.get('.w3-dropdown-content')
    .invoke('removeAttr', 'class')
    cy.get('input[name="user"]')
    .type(username)
    cy.get('input[name="password"]')
    .type(password)
    cy.get('#login-nav > .w3-button')
    .click()
  })


    //See test 02_02
   it('See activity', () => {
    // In the Navigation bar (left), hover over "Hi, USERNAME" and select "Your Personal Page"
    cy.get('#introductory')
    .should('have.class', 'w3-dropdown-hover')
    .and('have.descendants', 'div.w3-dropdown-content')
    cy.get('.w3-dropdown-content')
    .invoke('removeAttr', 'class')
    cy.get('#navexplanationintro a').first().click()
    cy.url().should('include', username)
   })

  // See test 02_01
   it('Create a new work entry', () => {
    // In the Navigation bar (right), select "work" (or other type of record) and click "new"
   cy.get('form[action="/newentry.html"] > select')
   .select('works')
   cy.get('form[action="/newentry.html"] > button')
   .click()
   // Fill the form and click "create new entry"
   cy.get('#suffix')
   .type(placeholder)
    cy.get('#title')
    .type(placeholder)
    cy.get('input[value="Poetry"]')
    .check()
    cy.get('#confirmcreatenew')
    .click()
    cy.url().should('include', placeholder)
    cy.get('#confirmation ')
    .invoke('text')
    .should('contain', 'has been saved!')
   })

})
