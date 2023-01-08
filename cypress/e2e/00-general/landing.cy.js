describe('landing page', () => {
  beforeEach(() => {
    cy.visit('https://betamasaheft.eu')
  })


  // General Layout
  // TODO(DP): The fake interactiviy on hoover is bad accessibility design, or is this broken and something should happen
  it('displays entities section', () => {
    cy.get('#entities')
      .children()
      .children()
      .should('have.length', 5)
  })

  // Side-Menu

  // Search + Keyboard

  // Menu bar

  // Login

  // Search icon

})

