describe('Search for a lemma in the dictionary', () => {
  beforeEach(() => {
    cy.visit('/Dillmann/')
  });


  it('should perform test search with mouse click', () => { 
    cy.get('[name="q"]')
      .type('ሀሰሰ');

    // default mode is "Normal, with homophones"
    cy.get('[name="mode"]').select('none');
    cy.get('.fa-search').click();
    cy.get('#results > .w3-row')
      .should('be.visible');
    cy.get('h3')
      .should('contain', 'You found "ሀሰሰ" in ');
    cy.get('#results').invoke('attr', 'data-template-per-page')
      .then(value => {
        const pagination_int = parseInt(value);
        cy.get('#results > .w3-row').its('length').should('be.lte', pagination_int)        
      });
      cy.get('#results .w3-twothird > a').first().invoke('attr', 'href')
      .should('be.eq', '?mode=none&q=ሀሰሰ&id=La28f0d661a324ba5a2364e70e63ef317')
      .then(href => {
        cy.request(href)
        .its('status')
        .should('eq', 200)
      });
    cy.get('#results .w3-twothird').first().click();

  });


  it('should perform test search with enter', () => {
    // select mode of searching as Fuzzy Search
    cy.get('[name="mode"]').select('fuzzy')

    // search for lemma ሀሰሰ
    cy.get('[name="q"]')
      .type('ሀሰሰ')
      .type('{enter}');
      cy.get('#results > .w3-row')
      .should('be.visible');
    cy.get('h3')
      .should('contain', 'You found "ሀሰሰ" in ');

    // the list of results has >= elements then pagination 
    cy.get('#results').invoke('attr', 'data-template-per-page')
      .then(value => {
        const pagination_int = parseInt(value);
        cy.get('#results > .w3-row').its('length').should('be.lte', pagination_int)        
      });

    // first link leads to Lf7959209d07e4f6fa0e3f6fe00ff8428
    cy.get('#results .w3-twothird > a').first().invoke('attr', 'href')
    .should('be.eq', '?mode=fuzzy&q=ሀሰሰ&id=Lf7959209d07e4f6fa0e3f6fe00ff8428')
    .then(href => {
      cy.request(href)
      .its('status')
      .should('eq', 200);
    });

    // first link opens the page with lemma description headed with first link text
    cy.get('#results .w3-twothird').first().click();
    cy.get('#results .w3-twothird > a').invoke('prop', 'text')
    .then(value => {
      cy.get('.w3-container #lemma').first().should('contain', value);  
    });
  })

});

