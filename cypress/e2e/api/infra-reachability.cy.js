describe('Infrastructure reachability (nginx-fronted side services)', { tags: '@container' }, () => {
  /**
   * Smokes for the services that sit next to eXist behind nginx, dual-env
   * since the composed stack's `full` profile (BetMas#130) now fronts both
   * (container: iipsrv-fixtures + dummy Fuseki; prod: real iipsrv + Fuseki).
   * Each test asserts the responder is the service itself (its
   * characteristic response), not an nginx error page — that covers both
   * the nginx location block and the backing process in one request.
   */

  it('routes /iiif to a live iipsrv', () => {
    // Which image files exist is data (real scans on prod, synthetic
    // fixtures in the container), not contract, so probe a well-formed but
    // definitely-missing path: a healthy iipsrv answers 404 with its own
    // error text in either environment, while a broken proxy would return
    // an nginx HTML error instead.
    cy.request({ url: '/iiif/does/not/exist.tif/info.json', failOnStatusCode: false }).then((res) => {
      expect(res.status).to.eq(404)
      expect(res.body).to.include('is neither a file nor part of an image sequence')
    })
  })

  it('answers a trivial SPARQL ASK on /fuseki', () => {
    // Smokes the current production wiring (Apache Jena Fuseki, dataset
    // "betamasaheft"). Its designated successor is QLever (sparql-service
    // repo), which speaks GET /?query= against a single index — when the
    // switch happens this test must follow the new URL shape, not be
    // pointed at it.
    cy.request({
      url: '/fuseki/betamasaheft/query',
      qs: { query: 'ASK {}' },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)

      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body

      expect(body).to.have.property('boolean', true)
    })
  })
})
