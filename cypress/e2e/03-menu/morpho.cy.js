describe('morphology page', { tags: '@container' }, () => {
  // see 03_user 21 — API contract is in api/morpho.cy.js
  //
  // CI flake: cy.visit('/morpho') waited 60s for page load while
  // googletagmanager + https://betamasaheft.eu/Dillmann/.../attestations.js
  // stayed pending. Stub those; keep a real visit for the form UI.
  beforeEach(() => {
    cy.intercept('https://www.googletagmanager.com/**', { statusCode: 204, body: '' })
    cy.intercept('https://www.google-analytics.com/**', { statusCode: 204, body: '' })
    cy.intercept('https://betamasaheft.eu/**', { statusCode: 204, body: '' })
  })

  it('renders a parse result for a sample query', () => {
    // Query-less first: nginx 403s /morpho?* when Referer is empty/spoofed.
    cy.visit('morpho')
    cy.get('#querystring').clear()
    cy.get('#querystring').type('sabe')
    cy.get('form.form button[type="submit"]').click()
    cy.contains('Morphological parsing of ሰባ').should('be.visible')

    // There should be traces for this annotation
    cy.contains('TraCES annotations of ሰባ').should('be.visible')

    // This should at least be 1. It might be incremented in the future, but this verifies the lookup into traces actually succeeds
    // If it turns to 'none visible', check the deployment.
    cy.contains(
      'This word appears in this form in the TraCES corpus 1 times.'
    ).should('be.visible')
  })
})
