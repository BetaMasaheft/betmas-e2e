const username = 'JinntecLexicon'

/**
 * Cross-app smoke: BetMas routes to Dillmann and lexicon login works on production.
 * Contributor depth (Plan/02_contributor.md §3–§5) lives in BetaMasaheft/Dillmann
 * test/cypress/e2e/user_admin.cy.js and editor.cy.js.
 */
describe('Dillmann lexicon integration smoke', { tags: ['@auth', '@production-only'] }, () => {
  beforeEach(() => {
    cy.visit('Dillmann/')
    cy.loginLexicon()
  })

  afterEach(() => {
    cy.visit('Dillmann/')
    // Log out only if the session exists, so a failed login doesn't also fail
    // teardown and mask the real error
    cy.get('body').then(($body) => {
      if ($body.find('#logout-nav button').length > 0) {
        cy.get('#logout-nav button').click()
      }
    })
  })

  it('logs in and opens the personal page from Dillmann', () => {
    cy.get('#about').should('contain', `Hi ${username}!`)
    cy.get('[title="about"] > a')
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href)
        cy.get('h3').should('contain', 'The last 50 pages you visited')
      })
  })
})
