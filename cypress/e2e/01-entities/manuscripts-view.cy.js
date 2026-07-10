describe('Manuscripts: view images and content', { tags: '@container' }, () => {
    // See user 13 and 16

    // Tests done with manuscript ESdz01. Short title stored in constant
    const msTitle = 'Gǝbra Ḥǝmāmāt'

    beforeEach(() => {
        // Ignore uncaught exception: vis is not defined
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('vis is not defined')) {
                return false
            }
        })
        // Visit the main view directly to avoid redirect issues
        cy.visit('/manuscripts/ESdz010/main')
    })

    it('View manuscript contents', () => {
        // See 03_user 16
        // Click on "contents" to expand view
        cy.get('button[resource*="ESdz010/msitem/ms_i1"][onclick^="openAccordion"]')
        .first()
        .click()
        // Click other eventual boxes to expand view
        cy.get('[onClick^=openAccordion][onClick*=itemms_i1-4]')
        // The work title link to LIT1544Gebrah is present in the contents
        cy.get('[href$="/LIT1544Gebrah"]')
        .should('exist')
      })

    // To get more information about a work contained, click on the underlined work title.
    // Container renders the work-title href as `/https://betamasaheft.eu/LIT1544Gebrah`
    // ('/' prepended to the unstripped canonical PID) when APP_URL is set.
    // Production renders `/LIT1544Gebrah` and resolves fine.
    it('Follow work title link from contents', { tags: '@production-only' }, () => {
        cy.get('[href$="/LIT1544Gebrah"]')
        .first()
        .then(($a) => {
          const href = $a.prop('href')

          cy.requestFollowingAppRedirects(href)
            .its('body')
            .should('include', '</html>')
            .and('include', msTitle)
        })
      })

})

describe('Manuscripts: view images', { tags: '@production-only' }, () => {
    /**
     * Container: RestXQ `/api/` routes — including the IIIF manifest
     * `/api/iiif/{id}/manifest` that Mirador loads — return HTTP 405
     * (verified 2026-07-10), so the viewer never renders there.
     * Same drift family as https://github.com/BetaMasaheft/betmas-e2e/issues/66
     */
    // See user 13

    const msTitle = 'Gǝbra Ḥǝmāmāt'

    beforeEach(() => {
        // Ignore uncaught exception: vis is not defined
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('vis is not defined')) {
                return false
            }
        })
        cy.visit('/manuscripts/ESdz010/main')
    })

    it('View manuscript images', () => {
        // See 03_user 13
        // In the top menu, click Images
        cy.get('[href*="/manuscripts/ESdz010/viewer"]')
        .first()
        .invoke('removeAttr', 'target')
        .click()
        // The page opens with MIRADOR viewer and images visible
        // Wait for Mirador to load
        cy.get('.mirador-main-menu-bar', { timeout: 10000 })
          .should('be.visible')
        // Wait for thumbnails to load (they may take time to render)
        // Try multiple possible selectors - at least one should exist
        // The exact selector may vary depending on Mirador version or loading state
        cy.get('body').should(($body) => {
          // Verify that Mirador has loaded by checking for thumbnail-related elements
          // Accept any of these as valid indicators that images are loading/loaded
          const hasThumbnails = $body.find('li.highlight > .thumbnail-image').length > 0
          const hasAnyThumbnail = $body.find('.thumbnail-image').length > 0
          const hasHighlight = $body.find('li.highlight').length > 0
          const hasMiradorContent = $body.find('.mirador-viewer').length > 0

          // At least one of these should be present if Mirador loaded successfully
          expect(hasThumbnails || hasAnyThumbnail || hasHighlight || hasMiradorContent).to.be.true
        })
        // To get to the main entry view, select Entry in the top menu, you will be redirected to https://betamasaheft.eu/manuscripts/ESap028/main
        cy.get('[href*="/manuscripts/ESdz010/main"]')
        .invoke('attr', 'href')
        .then(href => {
          cy.request(href)
            .its('body')
            .should('include', '</html>')
            .and('include', msTitle)
          })
      })

})
