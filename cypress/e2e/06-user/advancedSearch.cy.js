describe('The advanced search page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('as.html')
  })

  // DP: Usability could not display hide show button on initial load
  describe('layout', () => {
    // 03_User 7.3 
    it('should contain proper header', () => {
      cy.get('h3')
        .contains('General Search Options')
    })

    it('should toggle filters', () => {
      cy.get('#gsf')
        .should('exist')
      cy.get('#tooglesearchfield')
        .click()
        .find('#gsf')
        .should('not.exist')
    })

    it('should show general filters', () => {
      // 03_User 7.11
      // see BetaMasaheft/Documentation#2219
      // known to be broken hence we can't test effect on results
      // BetMasWeb#101 briefly server-rendered every general filter's
      // form unconditionally (hidden via CSS when inactive) - a
      // follow-up on that same PR reverted it back to lazy: a facet's
      // form is only rendered when its own filter param is already
      // present, otherwise the wrapper doesn't exist yet and
      // filters.js's callformpart AJAX-fetches it on first check (the
      // original behavior this file tested before #97/#98). Wait on
      // the request itself (responseTimeout applies) instead of
      // polling the DOM with a padded timeout, since it can be slow
      // on a cold container.
      cy.intercept('GET', '**/forms/formlanguages.html').as('formlanguages')
      cy.intercept('GET', '**/forms/formkeywords.html').as('formkeywords')
      cy.intercept('GET', '**/forms/formrelations.html').as('formrelations')
      cy.intercept('GET', '**/forms/formdates.html').as('formdates')

      cy.get('[value="languages"]')
        .check()
      cy.wait('@formlanguages')
        .its('response.statusCode').should('eq', 200)
      cy.get('#languages')
        .should('be.visible')

      cy.get('[value="keywords"]')
        .check()
      cy.wait('@formkeywords')
        .its('response.statusCode').should('eq', 200)
      cy.get('#keywords')
        .should('be.visible')

      cy.get('[value="relations"]')
        .check()
      cy.wait('@formrelations')
        .its('response.statusCode').should('eq', 200)
      cy.get('#relations')
        .should('be.visible')

      cy.get('[value="date"]')
        .check()
      cy.wait('@formdates')
        .its('response.statusCode').should('eq', 200)
      cy.get('#datesform')
        .should('be.visible')
    })

    it('should restore an active filter\'s state from the URL on load, with no click needed', () => {
      // BetMasWeb#101's actual point: reload a search with a filter
      // already active and see it restored server-side, no JS
      // execution required for the state itself. Unlike the click-to-
      // reveal case above, the facet's own param is already present,
      // so its form renders inline on this same request - no AJAX
      // wait needed here.
      cy.visit('as.html', { qs: { 'work-types': 'mss', language: 'gez' } })
      cy.get('[value="languages"]')
        .should('have.attr', 'checked')
      cy.get('#languages')
        .should('be.visible')
      cy.get('#languages select[name="language"]')
        .find('option[value="gez"]')
        .should('have.attr', 'selected')
    })
  })
  describe('search', () => {
    // it would be better to use ID attr instead of name
    it('should use filters', () => {
      // 03_User 7.4 
      cy.get('[name="query"]')
        .type('taammera')
      // 03_User 7.5  
      cy.get('[name="homophones"]')
        .should('have.attr', 'checked')
      // 03_User 7.6a - BetMasWeb#69: stable id instead of :nth-child(1) > [value="mss"]
      cy.get('#work-type-mss')
        .check()
      cy.get('#collectionfilter')
        .select('Manuscripts')
        .should('have.value', 'mss')
      // 03_User 7.6b
      cy.get('#mssFilter')
        .should('be.visible')
      cy.get('[value="CUnumber"]')
        .check()
      // 03_User 7.7-8
      cy.get('#submit-data')
        .click()
      // 03_User 7.9  
      cy.url()
        .should('contain', 'taammera')
      cy.get('.w3-card-4 > h3')
        .should('contain', 'You found')
      cy.get('#results')
        .should('contain', 'Taʾammǝra')
    })
  })
  describe('results', () => {
    it('should be broken down by type', () => {
      // 03_User 7.10
      cy.visit('as.html', {
        qs: {
          query: 'miracles+of+mary',
          AttestedInType: 1
        }
      })
      
      cy.get('#results')
        .within(() => {
          cy.get('.resultspersons')
            .should('contain', 'Mary')
          cy.get('.resultsworks')
            .should('contain', 'Mary')
          cy.get('.resultsstudies')
            .should('contain', 'Mary')
          cy.get('.resultsplaces')
            .should('contain', 'Mary')
          cy.get('.resultsauthority-files')
            .should('contain', 'Mary')
          cy.get('.resultsinstitutions')
            .should('contain', 'Mary')
          cy.get('.resultsmanuscripts')
            .should('contain', 'Mary')
          cy.get('.resultsnarratives')
            .should('contain', 'Mary')
        })
    })
  })
})

