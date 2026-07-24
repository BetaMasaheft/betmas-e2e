const username = 'JinntecLexicon'

/**
 * Cross-app smoke: BetMas routes to Dillmann and lexicon login works.
 * Contributor depth (Plan/02_contributor.md §3–§5) lives in BetaMasaheft/Dillmann
 * test/cypress/e2e/user_admin.cy.js and editor.cy.js. Dillmann shares the
 * composed stack's eXist instance (BetMas#130); Dillmann#558/#559's
 * videash.js crash fix is baked into release-expanded as of 2026-07-23 -
 * verified directly against the container.
 */
describe('Dillmann lexicon integration smoke', { tags: ['@auth', '@container'] }, () => {
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
    // the personal-page link, wherever it sits in #about's dropdown markup
    cy.get('#about a[href*="/user/"]')
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href)
        // "The last 50 pages you visited" only renders once the account has
        // browsing history - true for the real prod account, not for a
        // freshly CI-provisioned one, so assert structure instead
        cy.get('h3').should('contain', 'Search')
      })
  })
})
