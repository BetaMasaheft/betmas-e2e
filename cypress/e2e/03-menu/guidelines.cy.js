describe('Look up transcription guidelines (container)', { tags: '@container' }, () => {
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/67
     * Container: route/layout differs. Keep assertions minimal: verify we get an HTML document.
     */
    it('loads the Guidelines query page', () => {
        cy.request({
            method: 'GET',
            url: 'Guidelines',
            qs: { q: 'transcription' },
            followRedirect: true
        })
            .its('body')
            .should('include', '</html>')
    })
})

describe('Look up transcription guidelines', { tags: '@production-only' }, () => {
    /**
     * GH issue: https://github.com/BetaMasaheft/betmas-e2e/issues/67
     * Production: query UI + navigation are available.
     */

    // see 03_user 17
    it('retrieve transcription guidelines by query', () => {
        cy.visit('Guidelines', {
            qs: {
                q: 'transcription'
            }
        })
        cy.url().should('include', 'q=transcription')
        // Scroll (and go to second page) to find the fitting title, here Transliteration Principle
        cy.get('ul.pagination').first().within(() => {
            cy.get('li:nth-child(4) a').click()
        })
        cy.get('#results a').contains('Transliteration Principles')
        // click to get to https://betamasaheft.eu/Guidelines/?q=transcription&start=6&id=transliteration-principles
        .invoke('attr', 'href')
        .then(href => {
            expect(href).to.include('q=transcription')
            expect(href).to.include('start=6')
            expect(href).to.include('id=transliteration-principles')

            cy.request(href)
                .its('body')
                .should('include', '</html>')
        })
    })

    it('retrieve transcription guidelines via “quick links”', () => {
        cy.request({
            method: 'GET',
            url: 'Guidelines?id=transliteration-principles'
        })
            .its('body')
            .should('include', '</html>')
            .and('include', 'Transliteration')
    })
})