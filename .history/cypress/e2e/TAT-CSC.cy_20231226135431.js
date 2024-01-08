
cy.visit('../../src/index.html')
describe('TAT Customer Service Center', () => {
  
  it('checks the application title', () => {
    cy.title().should('include', 'TAT')


  })
})
