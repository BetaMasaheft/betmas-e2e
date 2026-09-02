describe('compareSelected page', { tags: ['@container'] }, () => {
  // BetMasWeb#126: ul.nodot's max-height (150px) clamped some manuscripts'
  // content-item lists to a sliver of a scrollbox - one of these ids has
  // 100+ items, ~40x the box's own height. Not a full regression for the
  // exact pixel value (a design choice, can change), just a guard against
  // it silently dropping back to something that tiny.
  it('gives content-item lists room before clamping them into a scrollbox', () => {
    cy.visit({
      url: 'compareSelected',
      qs: {
        mss: 'BLorient639,BLorient641,ESdd001,CIA20024,CCRG001,BNFabb114,DWdavies01,EMML7606'
      }
    })
    cy.get('ul.nodot')
      .should('have.length.greaterThan', 0)
      .first()
      .invoke('css', 'max-height')
      .should('match', /^(?:[2-9]\d{2}|\d{4,})px$/)
  })
})
