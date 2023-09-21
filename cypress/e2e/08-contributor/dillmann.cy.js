const username = "JinntecLexicon" // Cypress.env('username')
const password = Cypress.env('password_lex')

describe('Dillman page', () => {

    beforeEach(() => {
        cy.visit('Dillmann/')
        //In Navigation bar (left), select Login, in the dropdown insert login credentials
        cy.get('#logging')
        cy.get('.w3-dropdown-content')
        .invoke('removeAttr', 'class')
        cy.get('input[name="user"]')
        .type(username)
        cy.get('input[name="password"]')
        .type(password)
        cy.get('#login-nav > .w3-button')
        .click()
    })

    

    describe('searchSee activity', () => {
        // see 02_03
        it('logs in using env variables', () => {
            expect(username, 'username was set').to.be.a('string').and.not.be.empty
            expect(password, 'password was set').to.be.a('string').and.not.be.empty        
          });

          it('See activity', () => {
            // Click on "Hi, USERNAME!"
            cy.get('[title=about] > a')
            .invoke('attr', 'href')
            .then(href => {
                cy.request(href)
                    .its('body')
                    .should('include','Your made') //
                    .should('include',username)
            })
            
           });


        
    })
})