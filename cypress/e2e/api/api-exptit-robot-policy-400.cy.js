describe('API: exptit.xqm robot-policy 400', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/63
   * Container currently returns HTTP 400 for some `newSearch.html` URLs
   * where upstream external lookup fails due to robot-policy/user-agent.
   */

  it('newSearch.html type-facet=person query=Mary (container may return 400)', () => {
    cy.request({
      method: 'GET',
      url: '/newSearch.html',
      failOnStatusCode: false,
      qs: {
        searchType: 'text',
        query: 'Mary',
        defaultoperator: 'OR',
        mode: 'none',
        homophones: 'on',
        'type-facet': 'person'
      }
    }).then((response) => {
      const status = response.status
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect([200, 400]).to.include(status)

      if (status === 400) {
        expect(body).to.match(/robot policy|w\.w?iki\/4wJS/i)
        expect(body).to.include('modules/exptit.xqm')
      } else {
        expect(body).to.include('id="results"')
      }
    })
  })

  it('newSearch.html query=miracles query (container may return 400)', () => {
    cy.request({
      method: 'GET',
      url: '/newSearch.html',
      failOnStatusCode: false,
      qs: {
        searchType: 'text',
        clavistype: '',
        query: 'miracles',
        defaultoperator: 'OR',
        mode: 'none',
        homophones: 'on'
      }
    }).then((response) => {
      const status = response.status
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect([200, 400]).to.include(status)

      if (status === 400) {
        expect(body).to.match(/robot policy|w\.w?iki\/4wJS/i)
        expect(body).to.include('modules/exptit.xqm')
      } else {
        expect(body).to.include('id="results"')
      }
    })
  })
})

