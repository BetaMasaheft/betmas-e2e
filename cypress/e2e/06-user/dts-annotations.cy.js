// DTS annotation-index drill-down (resources/js/dtsAnno.js) on work/item
// /text pages: clicking an index button fetches a DTS annotations endpoint
// and renders the index inline.
//
// This feature was broken on production (see notes/base-path-report.md
// BP-020): dtsAnno.js hardcoded `http://localhost:8080/exist/apps/BetMas[Web]`
// in both $.getJSON calls, so a prod user's browser fetched its own
// localhost. BetMasWeb#31 injects BM_APP_URL (scriptlinks:scriptStyle) and
// re-roots the request via bmApi(); BetMasWeb#55 unblocks the /text page
// (Roaster document-map unwrap). This smoke guards that: the index request
// must resolve UNDER the app base and never a hardcoded host.
describe('DTS annotation index base-path (dtsAnno.js)', { tags: '@container' }, () => {
  it('fires the index request under the app base, never a hardcoded host', () => {
    // Same vis.js leak as manuscripts-view / id specs; unrelated to dtsAnno.js.
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('vis is not defined')) {
        return false
      }
    })

    // Stub the payload so this is a URL-resolution smoke, not a live
    // annotations-API contract. The URL is captured at request time.
    const page = '/api/dts/annotations/works/items/LIT1709Kebran/persons?page=1'
    cy.intercept({ method: 'GET', pathname: '**/api/dts/annotations/**' }, {
      statusCode: 200,
      body: { view: { '@id': page, first: page, previous: page, next: page, last: page }, member: [] }
    }).as('annoIndex')

    cy.visit('works/LIT1709Kebran/text', { timeout: 60000 })
    // the index button only renders when the work has annotations
    cy.get('.DTSannoCollectionLink', { timeout: 15000 }).should('exist').first().click()

    cy.wait('@annoIndex').its('request.url').then((url) => {
      const appPath = new URL(Cypress.config('baseUrl')).pathname.replace(/\/$/, '')
      const path = new URL(url).pathname
      // resolved under the app base, not escaped to origin root
      expect(path).to.include(appPath + '/api/dts/annotations/')
      // not the old hardcoded/wrong-app-name base
      expect(url).to.not.include('/exist/apps/BetMas/api/dts')
    })
  })
})
