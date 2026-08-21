describe('SHA permalinks', { tags: ['@production-only'] }, () => {
  // see https://github.com/BetaMasaheft/Documentation/issues/2235
  // SHA permalinks are served from GitHub history via /permanent/{sha}/…
  // and are not in the container data snapshot.
  const permalink =
    'permanent/ef3cf86c125e01f9c1bde6e76c6cfbda6a6adb20/manuscripts/TCB139/main'

  it('resolves a GitHub-SHA permalink to the manuscript page', () => {
    cy.request(permalink)
      .its('body')
      .should('include', 'TCB139')
  })
})
