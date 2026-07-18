// DTS annotation-index drill-down (resources/js/dtsAnno.js) on work/item
// /text pages: clicking an index button fetches a DTS annotations endpoint
// and renders the index inline.
//
// This feature was broken on production (see notes/base-path-report.md
// BP-020): dtsAnno.js hardcoded `http://localhost:8080/exist/apps/BetMas[Web]`
// in both $.getJSON calls, so a prod user's browser fetched its own
// localhost. The BetMas fix (branch dp-dtsanno-fix) injects a BM_APP_URL
// app-base global (scriptlinks:scriptStyle) and re-roots the request under
// it via a bmApi() helper. This smoke guards that: the index request must
// resolve UNDER the app base and never a hardcoded host.
describe('DTS annotation index base-path (dtsAnno.js)', { tags: '@container' }, () => {
  // Kept as `it.skip` until dp-dtsanno-fix ships in the container image
  // (the BM_APP_URL global + bmApi in dtsAnno.js). Un-skip once the rebuilt
  // image is deployed — on the current image the request still hits the
  // hardcoded localhost base and never reaches the intercept.
  it.skip('fires the index request under the app base, never a hardcoded host', () => {
    // Stub so the smoke does not depend on BetMasApi (absent in-container,
    // BP-012). The URL is captured at request time, so the body only needs
    // to keep dtsAnno.js's callback from throwing.
    const page = '/api/dts/annotations/works/items/LIT1709Kebran/persons?page=1'
    cy.intercept({ method: 'GET', pathname: '**/api/dts/annotations/**' }, {
      statusCode: 200,
      body: { view: { '@id': page, first: page, previous: page, next: page, last: page }, member: [] }
    }).as('annoIndex')

    cy.visit('works/LIT1709Kebran/text')
    // the index button only renders when the work has annotations
    cy.get('.DTSannoCollectionLink').should('exist').first().click()

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
