const username = 'JinntecCatalogue'

const placeholder = 'to-be-deleted'

// See tests 02_01 and 02_02

describe('Necessary workflows for cataloguer users', () => {

  beforeEach('Logging in', () => {
    cy.visit('/')
    cy.loginCataloguer()
  })

  afterEach('Logging out', () => {
    // We visit the home page to be sure that we can log out:
    // one of the tests ends in an error page 
    // HBS: and for some reason, cy.get('back') doesn’t work from there
    cy.visit('/')
    cy.get('#logout-nav button').click()
  })

  // See NB NEGATIVE of 02_01 
  it('Logging in from subpages', () => {
    // we first log out
    cy.get('#logout-nav button').click()
    // Click on a item of the menu and remove hover
    cy.removeHover('#mss')
    cy.get('#mss a[href="/availableImages.html"]').click()
    cy.loginCataloguer()
  })

    //See test 02_02
   it('See activity', () => {
    // In the Navigation bar (left), hover over "Hi, USERNAME" and select "Your Personal Page"
    // We follow the same strategy to access the submenu items by removing the hover attribute
    cy.removeHover('#introductory')
    cy.get('#navexplanationintro a').first().click()
    // Test users are not listed as editors and thus the personal page doesn’t get generated.
    // See discussion in issue #23
    // Considering this limitation, we just check that the URL contains the username
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
    /* The last steps (submitting the form and checking the validity of the file)
    are disabled

    cy.get('#confirmcreatenew')
    .click()
    // Check that the confirmation page is correct
    // First we check that some of the values submitted are contained in the URL 
    cy.url().should('include', placeholder)
    // Then we check the contents of the confirmation page
    cy.get('#confirmation')
    .should('contain', 'has been saved!')
    // Download the generated XML file
    cy.get('#downloaded').click()
    // Get name of the generated file and check that it exists
    cy.get('.lead').eq(1).invoke('text').then(text => {
      const path = 'cypress/downloads/' + text + '.xml'
      cy.readFile(path).should('contain', 'TEI')
    })*/
   })
})
