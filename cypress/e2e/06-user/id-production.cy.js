describe('id based URL routing (production content)', { tags: '@production-only' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/62
   * Container manuscript main pages currently return HTTP 500 (FORX0003).
   */
  it('manuscript records show Relations link', () => {
    cy.visit('manuscripts/ESum040/main')
    cy.get('[href$=analytic]')
      .contains('Relations')
  })
})
