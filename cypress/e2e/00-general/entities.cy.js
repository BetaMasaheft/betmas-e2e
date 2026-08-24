describe('Entities sections', { tags: '@container' }, () => {
    beforeEach(() => {
        cy.visit('')
    })

    // BetMasWeb#69: these used to count DOM children under fragile
    // :nth-child/class selectors and check first()/last() text - broke
    // whenever a W3.CSS wrapper moved. Each access button now has a stable
    // id (BetMasWeb#69), so assert on those directly instead.
    it('Gazetteer displays 3 access links', () => {
        ['gazetteer-browse', 'gazetteer-index', 'gazetteer-repositories'].forEach((id) => {
            cy.get(`#${id}`).should('exist')
        })
        cy.get('#gazetteer-browse').should('contain', 'Browse')
        cy.get('#gazetteer-repositories').should('contain', 'Repositories')
    })

    it('Manuscripts displays 6 access links', () => {
        [
            'manuscripts-shelfmark',
            'manuscripts-catalogue',
            'manuscripts-repository',
            'manuscripts-list',
            'manuscripts-origin',
            'manuscripts-viewer',
        ].forEach((id) => {
            cy.get(`#${id}`).should('exist')
        })
        cy.get('#manuscripts-shelfmark').should('contain', 'shelf mark')
        cy.get('#manuscripts-viewer').should('contain', 'Viewer')
    })

    it('Prosopography displays 3 access links', () => {
        ['prosopography-browse', 'prosopography-index', 'prosopography-ethnic'].forEach((id) => {
            cy.get(`#${id}`).should('exist')
        })
        cy.get('#prosopography-browse').should('contain', 'Browse')
        cy.get('#prosopography-ethnic').should('contain', 'Ethnic')
    })

    it('Taxonomy displays 10 access links', () => {
        [
            'taxonomy-keywords',
            'taxonomy-art-themes',
            'taxonomy-decorations',
            'taxonomy-miniatures',
            'taxonomy-bindings',
            'taxonomy-additions',
            'taxonomy-titles',
            'taxonomy-index-places',
            'taxonomy-index-persons',
            'taxonomy-bibliography',
        ].forEach((id) => {
            cy.get(`#${id}`).should('exist')
        })
        cy.get('#taxonomy-keywords').should('contain', 'Keywords')
        cy.get('#taxonomy-bibliography').should('contain', 'Bibliography')
    })

    it('Texts displays 6 access links', () => {
        [
            'texts-clavis',
            'texts-narratives',
            'texts-studies',
            'texts-compare',
            'texts-collatex',
            'texts-lexicon',
        ].forEach((id) => {
            cy.get(`#${id}`).should('exist')
        })
        cy.get('#texts-clavis').should('contain', 'Clavis')
        cy.get('#texts-lexicon').should('contain', 'Lexicon')
    })


// https://betamasaheft.eu/additions
// https://betamasaheft.eu/art-themes/list
// https://betamasaheft.eu/authority-files/list
// https://betamasaheft.eu/availableImages.html
// https://betamasaheft.eu/bibliography
// https://betamasaheft.eu/bindings
// https://betamasaheft.eu/catalogues/list
// https://betamasaheft.eu/compare
// https://betamasaheft.eu/decorations
// https://betamasaheft.eu/decorations?type=miniature
// https://betamasaheft.eu/IndexPersons
// https://betamasaheft.eu/IndexPlaces
// https://betamasaheft.eu/manuscripts/browse
// https://betamasaheft.eu/manuscripts/viewer
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=eth
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=ins
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=mss
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=nar
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=pers
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=place&work-types=ins
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=studies
// https://betamasaheft.eu/newSearch.html?searchType=text&mode=any&work-types=work
// https://betamasaheft.eu/placeoforigin.html
// https://betamasaheft.eu/titles

})

