describe('TAT Customer Service Center', () => {
  cy.visit('./src/index.html')
  it('checks the application title', () => {
    cy.title().should('include', 'TAT')


  })
})
