describe('Raw XML entity pages', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMas/issues/29
   * `/{ID}.xml` must serve the stored TEI document. On the new VM these
   * URLs 404'd. Dual-env: production serves the same shape, so keep this a
   * plain contract guard on both targets.
   */

  const records = [
    { id: 'LIT7150Miracle', type: 'work' }, // the id from the issue
    { id: 'ESdz010', type: 'manuscript' }   // an mss id, exercised elsewhere in the suite
  ]

  records.forEach(({ id, type }) => {
    it(`serves /${id}.xml as raw TEI (${type})`, () => {
      cy.request(`/${id}.xml`).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.headers['content-type'], 'content-type').to.match(/xml/i)

        const body = typeof res.body === 'string' ? res.body : String(res.body)
        expect(body).to.include('<TEI')
        expect(body).to.include(`xml:id="${id}"`)
      })
    })
  })

  it('does not pass an unknown id off as a record', () => {
    // A bad id is not a 404 (eXist answers 200) but it must not return a
    // TEI document either - guard so `/{ID}.xml` can never silently serve
    // an empty or wrong file.
    cy.request({ url: '/LIT9999NoSuchThing.xml', failOnStatusCode: false }).then((res) => {
      const body = typeof res.body === 'string' ? res.body : String(res.body)
      expect(body).to.not.include('<TEI')
      expect(body).to.match(/is not an available item/i)
    })
  })
})
