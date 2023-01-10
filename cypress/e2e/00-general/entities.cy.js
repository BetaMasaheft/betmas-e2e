describe('Entities sections', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Gazetteer displays 3 access links', () => {
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 3)
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Browse')
        cy.get('#gazetteer > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Repositories')
    })
    
    it('Manuscripts displays 7 access links', () => {
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .should('have.length', 7)
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .first()
          .should('contain', 'shelf mark')
        cy.get('#manuscripts > .w3-row > .w3-margin-top')
          .children()
          .children()
          .last()
          .should('contain', 'Available')
    })

    it('Prosopography displays 3 access links', () => {
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 3)
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Browse')
        cy.get('#prosopography > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Ethnic')
    })

    it('Taxonomy displays 10 access links', () => {
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .should('have.length', 10)
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .first()
          .should('contain', 'Keywords')
        cy.get('#taxonomy > .w3-rest')
          .children()
          .children()
          .last()
          .should('contain', 'Bibliography')
    })

    it('Texts displays 6 access links', () => {
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .should('have.length', 6)
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .first()
          .should('contain', 'Clavis')
        cy.get('#texts > .w3-row > :nth-child(2)')
          .children()
          .children()
          .last()
          .should('contain', 'Lexicon')
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

