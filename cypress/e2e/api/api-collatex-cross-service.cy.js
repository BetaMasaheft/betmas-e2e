describe('Collatex cross-service contract', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/55
   *
   * Cross-service flow (document current behaviour, do not fix RESTXQ here):
   *   BetMasWeb GET /api/collatex
   *     → collatex.xqm builds witness JSON from expanded TEI
   *     → POST http://localhost:8081/collatex-servlet-1.7.1/collate
   *     → JSON { witnesses, table } consumed by resources/js/collatex.js
   *
   * Witness URNs verified on production (2026-07-13); collatex W1/W2 fixtures in
   * Manuscripts/ES/ESamm007.xml and ESmr001.xml (LIT3058RepCh338 hymn).
   *
   * Dual-env since BetMas#139 (COLLATEX_URL) + BetMasWeb#41 (dtslib
   * FORX0003) merged 2026-07-23 - verified directly against the container.
   */

  const witnessUrns = [
    'https://betamasaheft.eu/ESamm007.5va',
    'https://betamasaheft.eu/ESmr001.93rb'
  ]

  it('rejects fewer than two DTS witnesses', () => {
    cy.request({
      method: 'GET',
      url: '/api/collatex',
      qs: { format: 'json', dts: witnessUrns[0] },
      failOnStatusCode: false
    }).then((response) => {
      const body = typeof response.body === 'string' ? response.body : JSON.stringify(response.body)

      expect(response.status).to.eq(200)
      expect(body).to.include('please provide at least 2 dts URIs')
    })
  })

  it('returns collatex JSON shape for two manuscript witnesses', () => {
    cy.request({
      method: 'GET',
      url: '/api/collatex',
      qs: {
        format: 'json',
        dts: witnessUrns.join(',')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(
        response.status,
        'BetMasWeb must reach collatex servlet on the host (collatex.xqm localhost:8081)'
      ).to.eq(200)

      // Prod returns JSON body with application/xml Content-Type from the REST layer.
      const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

      expect(body).to.be.an('object')
      expect(body).to.have.property('witnesses').that.is.an('array').and.has.length.at.least(2)
      expect(body).to.have.property('table').that.is.an('array').and.is.not.empty
      expect(body.witnesses).to.include.members(['ESamm007', 'ESmr001'])
    })
  })
})
