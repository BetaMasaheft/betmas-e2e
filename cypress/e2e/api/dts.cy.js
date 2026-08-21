describe('DTS cross-service presence', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/75
   *
   * The DTS contract (16 GET routes across dts.xqm + dtsXML.xqm) is owned and
   * tested in the BetMasApi repo (test/cypress/e2e/dts.cy.js, dtsXML.cy.js,
   * persistentdts.cy.js) against its own containerised CI stack. This spec
   * deliberately does not duplicate any of that: it only verifies the
   * deployed target serves the DTS API at all, as a clean JSON object.
   *
   * Dual-env since BetMas#137 (nginx /api/ routing) + BetMasWeb#48 /
   * BetMasApi#30 (rest:response envelope no longer leaks into the
   * collections?id= body).
   */

  const assertCollection = (res, label) => {
    expect(res.status, `${label} must be routed and answer`).to.eq(200)

    const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body

    expect(body, `${label} must be an object, not a rest:response array`)
      .to.be.an('object')
      .and.not.an('array')
    expect(body).to.have.property('@context')
    expect(body['@context']).to.have.property('dts', 'https://w3id.org/dts/api#')
    expect(body).to.have.property('member').that.is.an('array').and.is.not.empty
    expect(body).to.have.property('totalItems').that.is.a('number').and.is.at.least(1)
  }

  it('serves the DTS entry collection', () => {
    cy.request({ url: '/api/dts/collections', failOnStatusCode: false }).then((res) => {
      assertCollection(res, '/api/dts/collections')
    })
  })

  it('serves a DTS collection by id without a rest:response envelope', () => {
    cy.request({
      url: '/api/dts/collections',
      qs: { id: 'https://betamasaheft.eu' },
      failOnStatusCode: false
    }).then((res) => {
      assertCollection(res, '/api/dts/collections?id=')
    })
  })
})
