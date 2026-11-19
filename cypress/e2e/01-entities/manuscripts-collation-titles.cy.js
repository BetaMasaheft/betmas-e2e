describe('Manuscripts: quire image dialogs titles', { tags: '@container' }, () => {
  /**
   * EMIP00064 has a collation with quires q1-q13 and <locus facs> elements,
   * which render one "Images relevant for <span class="MainTitle">" dialog
   * per quire. The span's data-value was rendered as "#q1" (manuscript id
   * missing, because collationAlone.xsl declared mainID as a variable and
   * ignored the parameter passed by viewItem:VisColl), and "#" for loci
   * without an anchor. titles.js then called /api/q1/title ... /api/q13/title
   * and /api/title (404/400): twelve useless calls of 4-6 s each in eXist.
   */
  const msId = 'EMIP00064'

  beforeEach(() => {
    // Ignore unrelated page script errors: vis is not defined, and the
    // OpenSeadragon viewer init (this.element is null) on this manuscript
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('vis is not defined') || err.message.includes('this.element is null')) {
        return false
      }
    })
    cy.intercept({ method: 'GET', url: /\/api\/+(q\d+\/+)?title(\?|$)/ }).as('idlessTitle')
    cy.visit({ url: `manuscripts/${msId}/main`, timeout: 100000 })
  })

  it('prefixes the quire title ids with the manuscript id', () => {
    cy.get('.MainTitle')
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        expect($el.attr('data-value'), 'MainTitle data-value').to.match(/^[^#\s]+(#.*)?$/)
      })
    cy.get(`.MainTitle[data-value="${msId}#q1"]`).should('exist')
  })

  it('does not request titles for ids without a manuscript (/api//qN/title, /api/title)', () => {
    cy.get('.MainTitle').should('have.length.greaterThan', 0)
    cy.get('@idlessTitle.all').should('have.length', 0)
  })
})
