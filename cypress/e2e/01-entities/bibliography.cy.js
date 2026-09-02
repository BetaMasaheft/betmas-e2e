describe('Bibliography page', { tags: ['@container', '@slow'] }, () => {
  // see 03_user 29
  beforeEach(() => {
    cy.visit({ url: 'bibliography', timeout: 100000 })
  })

  it('loads the bibliography listing with filters', () => {
    cy.contains('bibliographic entries')
      .should('be.visible')
    cy.get('#hit-count')
      .invoke('text')
      .should('match', /\d+/)
    cy.get('#results')
      .should('exist')
    cy.get('form input[name="type"][value="catalogue"]')
      .should('exist')
  })
})

describe('Bibliography single reference (Zotero pointer)', { tags: ['@container', '@slow'] }, () => {
  /**
   * GH issue: https://github.com/BetaMasaheft/BetMas/issues/31
   * `?pointer=bm:<id>` narrows the listing to one entry and prints its
   * Zotero/CSL citation. This used to render nothing / the wrong thing
   * ("Zotero does not load correctly"). bm:TasfaGiyorgis1956Taammera is
   * the pointer from the issue.
   */
  beforeEach(() => {
    cy.visit({ url: 'bibliography?pointer=bm:TasfaGiyorgis1956Taammera', timeout: 100000 })
  })

  it('renders exactly one CSL entry for the pointer', () => {
    cy.get('#hit-count').should('have.text', '1')
    cy.contains('.w3-badge', 'bm:TasfaGiyorgis1956Taammera').should('be.visible')

    cy.get('.csl-entry')
      .should('have.length', 1)
      .and('be.visible')
      .and('contain.text', 'Taʾammǝra Māryām')

    cy.get('a[href*="zotero.org"][href*="TasfaGiyorgis1956Taammera"]').should('exist')
  })
})
