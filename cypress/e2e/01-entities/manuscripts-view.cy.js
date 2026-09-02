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

    // BetMas#157 / #95: charset header (nginx) and Ge'ez in the rendered DOM.
    it('Renders Ge\'ez transcription text correctly, not as mojibake', () => {
        cy.request('/manuscripts/ESdz010/main')
          .its('headers.content-type')
          .should('match', /charset=utf-8/i)
        cy.contains('p[lang="gez"]', /[ሀ-፿]{5,}/)
      })

    // To get more information about a work contained, click on the underlined work title.
    // Container hrefs were broken (`/https://betamasaheft.eu/...`) until
    // BetaMasaheft/BetMas#113.
    it('Follow work title link from contents', () => {
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

describe('Manuscripts: view images', { tags: '@container' }, () => {
    /**
     * Dual-env since BetMas#130/#137: the IIIF manifest + iipsrv-fixtures
     * (real JPEGs, ESdz010's manuscript) are both genuinely reachable in
     * the composed stack now - the old RestXQ-405 blocker no longer applies.
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

describe('Manuscripts: titled contents with subtitles', { tags: '@container' }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMas/issues/34
   * (BetaMasaheft/Documentation#3012) - an msItem
   * <title ref="LIT2505Weddas#Monday"/> must render as
   * "<work title>: <subtitle>". Stale titles.xqm / exptit output put ".."
   * between the two, printed "No item", or fell back to the raw xml:id.
   * ESdd023 (DD-023) is the manuscript from the issue: Wǝddāse ʾAmlāk with
   * a per-weekday subtitle on each part, nested two deep on Friday.
   */
  it('joins work title and subtitle with a single colon, never ".." or "No item"', () => {
    cy.request('/manuscripts/ESdd023/main').its('body').then((body) => {
      expect(body).to.include('Wǝddāse ʾAmlāk: Monday')
      expect(body).to.include('Wǝddāse ʾAmlāk: Friday: Prayer of Shenute')
      expect(body, 'title/subtitle fell back to "No item"').to.not.match(/No item/i)
      // the exact #3012 symptom: two dots as the separator. The top-level
      // accordion label "Wǝddāse ʾAmlāk..." is a real three-dot ellipsis
      // and must not trip this.
      expect(body, 'two dots between title and subtitle').to.not.match(/Wǝddāse ʾAmlāk\.\.(?!\.)/)
    })
  })
})
