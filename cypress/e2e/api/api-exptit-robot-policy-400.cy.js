describe('API regression: exptit.xqm robot-policy 400', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/63
   * Fixed in `release-expanded` (verified 2026-07-10). These `newSearch.html`
   * requests used to return HTTP 400 from `modules/exptit.xqm` when the
   * external lookup hit a robot-policy/user-agent wall; keep them as strict
   * regression guards on both targets.
   */

  it('newSearch.html type-facet=person query=Mary returns 200 with results', () => {
    cy.request({
      method: 'GET',
      url: '/newSearch.html',
      qs: {
        searchType: 'text',
        query: 'Mary',
        defaultoperator: 'OR',
        mode: 'none',
        homophones: 'on',
        'type-facet': 'person'
      }
    }).then((response) => {
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.include('id="results"')
      expect(body).to.not.match(/robot policy/i)
      expect(body).to.not.include('modules/exptit.xqm')
    })
  })

  it('newSearch.html query=miracles returns 200 with results', () => {
    cy.request({
      method: 'GET',
      url: '/newSearch.html',
      qs: {
        searchType: 'text',
        clavistype: '',
        query: 'miracles',
        defaultoperator: 'OR',
        mode: 'none',
        homophones: 'on'
      }
    }).then((response) => {
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.include('id="results"')
      expect(body).to.not.match(/robot policy/i)
      expect(body).to.not.include('modules/exptit.xqm')
    })
  })
})
