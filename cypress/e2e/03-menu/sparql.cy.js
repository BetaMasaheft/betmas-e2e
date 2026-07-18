// SPARQL playground (sparql.html): d3sparql fetches /api/SPARQL/json and
// renders the result table into #resulttable
describe('SPARQL query page rendering (stubbed endpoint)', { tags: '@container' }, () => {
  /**
   * The hidden endpoint input drives a d3sparql fetch of the
   * /api/SPARQL/json endpoint (BetMasApi surface — contract-tested in
   * that repo), so the live round-trip only works where the API is
   * reachable under the app base (production today; container once it
   * ships BetMasApi). Stubbing with an observed response keeps the
   * d3sparql rendering contract testable dual-env. The endpoint value
   * may be root-absolute (`/api/…`) or app-relative
   * (`api/…`) depending on the deployed markup; both point
   * d3sparql at the same endpoint, so we accept either form.
   * NB the endpoint serialises a single-row result as a bindings
   * *object* rather than the standard array; the fixture is a real
   * three-row (array) response captured from production.
   */

  beforeEach(() => {
    cy.visit('sparql.html')
  })

  it('shows the query form wired to the JSON endpoint', () => {
    cy.get('#endpoint').invoke('val').should('match', /^\/?api\/SPARQL\/json$/)
    cy.get('textarea#sparql').should('exist')
    cy.contains('button', 'Run your query').should('be.visible')
    cy.get('#resulttable').should('be.empty')
  })

  it('renders a result table from the endpoint JSON', () => {
    cy.fixture('sparql-results.json').then((results) => {
      cy.intercept({ method: 'GET', pathname: '**/api/SPARQL/json' }, { statusCode: 200, body: results }).as('sparql')
    })
    cy.get('textarea#sparql').type('SELECT ?s ?p WHERE { ?s ?p ?o } LIMIT 3', { parseSpecialCharSequences: false })
    cy.contains('button', 'Run your query').click()
    cy.wait('@sparql')

    // one header row plus one row per binding
    cy.get('#resulttable table tr').should('have.length.at.least', 4)
    cy.get('#resulttable table').should('contain.text', 'subClassOf')
  })
})

describe('SPARQL live round-trip', { tags: ['@production-only'] }, () => {
  it('answers a minimal query and renders the table', () => {
    cy.intercept({ method: 'GET', pathname: '**/api/SPARQL/json' }).as('sparql')
    cy.visit('sparql.html')
    cy.get('textarea#sparql').type('SELECT ?s ?p WHERE { ?s ?p ?o } LIMIT 3', { parseSpecialCharSequences: false })
    cy.contains('button', 'Run your query').click()
    cy.wait('@sparql', { timeout: 60000 }).its('response.statusCode').should('eq', 200)
    cy.get('#resulttable table tr').should('have.length.at.least', 2)
  })
})
