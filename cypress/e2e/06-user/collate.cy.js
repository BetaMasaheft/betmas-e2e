// see 03_user 22 — Collate manuscript passages (Collatex)
describe('Collate page rendering (stubbed collatex)', { tags: '@container' }, () => {
  /**
   * The page JS (resources/js/collatex.js) requests the absolute path
   * /api/collatex, so a live collation only works where the API shares
   * the origin root with the app (production). Stubbing the response
   * keeps the rendering contract testable on any target: the fixture is
   * a real CollateX 1.7.1 alignment (three Ethiopic witnesses), captured
   * from the containerised service (collatex-service test/fixtures).
   */

  beforeEach(() => {
    cy.visit('collate')
  })

  it('shows two witness inputs and can add a third', () => {
    cy.get('input.dts').should('have.length', 2)
    cy.get('#collationResult').should('be.empty')
    cy.get('#addDTS').click()
    cy.get('input.dts').should('have.length', 3)
  })

  it('renders witness columns and alignment rows from the service JSON', () => {
    cy.fixture('collatex-alignment.json').then((alignment) => {
      // match on pathname: the dts query param holds full URNs whose
      // slashes a URL glob would not cross
      cy.intercept({ method: 'GET', pathname: '**/api/collatex' }, { statusCode: 200, body: alignment }).as('collatex')
    })
    cy.get('input.dts').eq(0).type('ESamm007.5va')
    cy.get('input.dts').eq(1).type('ESmr001.93rb')
    cy.get('#collate').click()
    cy.wait('@collatex').its('request.url').should('include', 'format=json')

    // one column per witness, with text + viewer links in the header
    cy.get('#collationResult table thead th').should('have.length', 3)
    cy.get('#collationResult table thead th').first().find('a').should('have.length', 2)
    // one row per alignment segment; the all-witnesses-agree row is marked
    cy.get('#collationResult table tbody tr').should('have.length', 3)
    cy.get('#collationResult table tbody tr.invariant').should('have.length', 1)
    cy.get('#collationResult table tbody').should('contain.text', 'ጻድቅ')
  })
})

describe('Collate live cross-service flow', { tags: ['@production-only', '@slow'] }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/55
   * Same witnesses as api/api-collatex-cross-service.cy.js; this covers
   * the UI leg on top of the API contract. Server-side witness building
   * reads two expanded TEI documents, so allow a generous response time.
   */

  it('collates two manuscript witnesses end to end', () => {
    cy.intercept({ method: 'GET', pathname: '**/api/collatex' }).as('collatex')
    cy.visit('collate')
    cy.get('input.dts').eq(0).type('ESamm007.5va')
    cy.get('input.dts').eq(1).type('ESmr001.93rb')
    cy.get('#collate').click()
    cy.wait('@collatex', { timeout: 90000 }).its('response.statusCode').should('eq', 200)

    cy.get('#collationResult table thead th').should('have.length', 2)
    cy.get('#collationResult table thead th').first().should('contain.text', 'ESamm007')
    cy.get('#collationResult table tbody tr').should('have.length.at.least', 1)
  })
})
