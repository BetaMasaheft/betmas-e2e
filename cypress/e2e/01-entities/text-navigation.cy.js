describe('Text view navigation (refslist)', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMasWeb/issues/268
   *
   * Prettier rewrote single-quoted XQuery string literals ('') to double-quoted
   * ones ("") in dtsclient.xqm / dtslib.xqm. The reformatted empty-string
   * comparisons (`$ref != ""`, `$ref = ""`) were then not evaluated as expected
   * when the navigation was built from the DTS API response (an empty string is
   * treated as content, and the member/div map came back empty). Symptom on
   * /manuscripts/ESap046/text: the left-hand "refslist" showed only the Voyant
   * link and the "DTS uris" button, with no numbered section links
   * (/ESap046.1 ... /ESap046.88), and the note text was not rendered.
   */
  const id = 'ESap046'
  // unique query string defeats nginx's page cache so we test the current code

  // nginx answers cookie-less clients with a JS challenge page that
  // cy.request cannot execute; pass it up front.
  beforeEach(() => {
    cy.setCookie('ds_verification_token', 'proof_passed')
  })

  it('renders the numbered section links in #refslist', () => {
    cy.request({ url: `/manuscripts/${id}/text`, qs: { _: Date.now() }, failOnStatusCode: false }).then((res) => {
      expect(res.status).to.eq(200)
      const doc = new DOMParser().parseFromString(res.body, 'text/html')
      const refs = doc.querySelector('#refslist')
      expect(refs, '#refslist container').to.not.be.null

      const links = [...refs.querySelectorAll(`.w3-bar-item a[href^="/${id}."]`)]
      expect(links.length, 'section links in #refslist').to.be.greaterThan(1)
      expect(links[0].getAttribute('href')).to.eq(`/${id}.1`)
      expect(links[1].getAttribute('href')).to.eq(`/${id}.2`)
    })
  })

  it('points the DTS URIs at the deployment being tested, not at production', () => {
    cy.request({ url: `/manuscripts/${id}/text`, qs: { _: Date.now() }, failOnStatusCode: false }).then((res) => {
      const doc = new DOMParser().parseFromString(res.body, 'text/html')
      const dts = doc.querySelector('#dtsuris')
      expect(dts, '#dtsuris list').to.not.be.null
      const text = dts.textContent
      expect(text).to.contain(`/api/dts/navigation?id=`)
      // Empty ref/start/end must not leave dangling "&start=" params
      expect(text, 'no empty start param').to.not.match(/[?&]start=(?:&|\s|$)/)
    })
  })

  it('shows the navigation in the browser', () => {
    cy.visit(`/manuscripts/${id}/text?_=${Date.now()}`)
    cy.get('#refslist').should('exist')
    cy.get(`#refslist a[href="/${id}.1"]`).should('exist')
    cy.get('#refslist .w3-bar-item a.page-scroll').its('length').should('be.gt', 1)
  })
})
