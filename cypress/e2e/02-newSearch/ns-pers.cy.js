describe('New Search PERS', () => {
    beforeEach(() => {
        // Todo(DP): There is something fishy goin on with the request
        // i see constant fetches, and i cannot use the qs object syntax to load 
        // desire page in chrome
        // qs: {
        //     searchType: 'text',
        //     mode: 'any',
        //     'work-types': 'pers'            
        //   },
        cy.visit('newSearch.html?searchType=text&mode=any&work-types=pers')
    })

    it('loads properly', () => {
        cy.get('#results')
          .should('be.visible')
    })

    // TODO(DP) search for PRS9429Tewodros
    // see user.md#Open_record… 2.1
    it.skip('performs simple searches', () => {
        cy.get('#sparql')
          .should('be.visible')
    })


})