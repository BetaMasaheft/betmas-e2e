describe('DTS cross-service presence', { tags: '@production-only' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMas/issues/75
   *
   * The DTS contract (16 GET routes across dts.xqm + dtsXML.xqm) is owned and
   * tested in the BetMasApi repo (test/cypress/e2e/dts.cy.js, dtsXML.cy.js,
   * persistentdts.cy.js) against its own containerised CI stack. This spec
   * deliberately does not duplicate any of that: it only verifies the
   * deployed target serves the DTS API at all.
   *
   * @production-only: the container image does not ship BetMasApi yet, so
   * /api/ routes answer 405 there. Flip to dual-env once the rebuilt image
   * includes the API package.
   */

  it('serves the DTS entry collection', () => {
    cy.request({ url: '/api/dts/collections', failOnStatusCode: false }).then((res) => {
      expect(res.status, '/api/dts/collections must be routed and answer').to.eq(200)

      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body

      expect(body).to.have.property('@context')
      expect(body['@context']).to.have.property('dts', 'https://w3id.org/dts/api#')
      expect(body).to.have.property('member').that.is.an('array').and.is.not.empty
      expect(body).to.have.property('totalItems').that.is.a('number').and.is.at.least(1)
    })
  })
})
