describe('team page', { tags: '@container' }, () => {
  beforeEach(() => {
    cy.visit('team.html')
  })

  it('lists at least two team members', () => {
    cy.get('ul > li')
      .should('have.length.at.least', 2)
  })

  it('has a working link in a team item', () => {
    cy.get('li a[href]')
      .first()
      .should('have.attr', 'href')
      .then((href) => {
        cy.request({ url: href, failOnStatusCode: false })
          .its('status')
          .should('eq', 200)
      })
  })
})
