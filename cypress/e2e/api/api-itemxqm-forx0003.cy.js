describe('API: item.xqm FORX0003', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/62
   * Container currently returns HTTP 500 with `FORX0003` in `modules/item.xqm`
   * for specific manuscript/work endpoints.
   */

  it('manuscripts/ESdz010/main (container may return 500)', () => {
    cy.request({
      method: 'GET',
      url: '/manuscripts/ESdz010/main',
      failOnStatusCode: false
    }).then((response) => {
      const status = response.status
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect([200, 500]).to.include(status)

      if (status === 500) {
        expect(body).to.include('FORX0003')
        expect(body).to.include('modules/item.xqm')
      } else {
        expect(body).to.include('</html>')
      }
    })
  })

  it('manuscripts/BLorient818/main (witness link, container may return 500)', () => {
    cy.request({
      method: 'GET',
      url: '/manuscripts/BLorient818/main',
      failOnStatusCode: false
    }).then((response) => {
      const status = response.status
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect([200, 500]).to.include(status)

      if (status === 500) {
        expect(body).to.include('FORX0003')
        expect(body).to.include('modules/item.xqm')
      } else {
        expect(body).to.include('</html>')
      }
    })
  })
})

