describe('permanent ID footer link', { tags: '@container' }, () => {
  /**
   * BetMasWeb#183 fixed permanentID.js building a root-relative permalink
   * (`/permanent/...`) instead of the absolute, canonical URL pid.html
   * promises ("urls starting with https://betamasaheft.eu"). The GitHub
   * commits API is stubbed so the assertion doesn't depend on live GitHub
   * data or rate limits, and runs the same in container and production.
   */
  const id = 'LIT1385Fekkar'

  beforeEach(() => {
    cy.intercept(
      { method: 'GET', url: '**/repos/BetaMasaheft/**/commits**' },
      {
        statusCode: 200,
        body: [
          {
            sha: '1a2b3c4d5e6f7890abcd1234ef5678901234abcd',
            commit: {
              committer: { date: '2024-01-01T00:00:00Z' },
              author: { name: 'Test Author' },
              message: 'test commit'
            }
          }
        ]
      }
    ).as('commits')
    cy.visit(`works/${id}/main`)
    cy.contains('button', 'Permalinks').click()
    cy.get(`#LoadPermanentIDs${id}`).click()
    cy.wait('@commits')
  })

  it('renders the version permalink as an absolute canonical URL', () => {
    cy.get(`#permanentIDs${id} a[href^="https://betamasaheft.eu/permanent/"]`)
      .should('have.length', 1)
      .invoke('attr', 'href')
      .should('match', new RegExp(`^https://betamasaheft\\.eu/permanent/[0-9a-f]+/works/${id}/main$`))
  })
})
