describe('API regression: item.xqm FORX0003', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/62
   * Fixed in `release-expanded` (verified 2026-07-10). These requests used to
   * return HTTP 500 `FORX0003` from `modules/item.xqm` in the container;
   * keep them as strict regression guards on both targets.
   */

  it('manuscripts/ESdz010/main returns 200 without FORX0003', () => {
    cy.request({
      method: 'GET',
      url: '/manuscripts/ESdz010/main'
    }).then((response) => {
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.include('</html>')
      expect(body).to.not.include('FORX0003')
    })
  })

  it('manuscripts/BLorient818/main (witness link) returns 200 without FORX0003', () => {
    cy.request({
      method: 'GET',
      url: '/manuscripts/BLorient818/main'
    }).then((response) => {
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.include('</html>')
      expect(body).to.not.include('FORX0003')
    })
  })
})
