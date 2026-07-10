describe('id based URL routing', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/65
   * Shorthand IDs redirect to canonical entity routes. Container redirects may
   * omit the app base path in Location, so assert redirect targets via
   * cy.request and load records via canonical routes.
   */
  // see 03_user2
  // see #6
  it('resolves person ids', () => {
    cy.request({ url: 'PRS9429Tewodros', followRedirect: false })
      .its('headers.location')
      .should('include', 'persons/PRS9429Tewodros')
    cy.visit('persons/PRS9429Tewodros/main')
    cy.url()
      .should('contain', 'persons/PRS9429Tewodros')
  })

  // (DP) To click on it without opening new tab
  // .invoke('removeAttr', 'target').click()
  it('resolves work ids and has analaytics view links', () => {
    cy.request({ url: 'LIT1385Fekkar', followRedirect: false })
      .its('headers.location')
      .should('include', 'works/LIT1385Fekkar')
    cy.visit('works/LIT1385Fekkar/main')
    cy.url()
      .should('contain', 'works/LIT1385Fekkar')
        cy.get('[href$=analytic]')
      .first()
      .then(function ($a) {
        const href = $a.prop('href')

        cy.requestFollowingAppRedirects(href)
          .its('body')
          .should('include', 'id="BetMasRel"')
          .and('include', 'id="BetMasRelView"')
          .and('include', '</html>')
      })
  })

  it('resolves manuscript ids', () => {
    cy.request({ url: 'ESum040', followRedirect: false })
      .its('headers.location')
      .should('include', 'manuscripts/ESum040')
  })

  it('manuscript records show Relations link', () => {
    // Ignore uncaught exception: vis is not defined
    // see https://github.com/BetaMasaheft/betmas-e2e/issues/34
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('vis is not defined')) {
        return false
      }
    })
    cy.visit('manuscripts/ESum040/main')
    cy.get('[href$=analytic]')
      .contains('Relations')
  })
})
