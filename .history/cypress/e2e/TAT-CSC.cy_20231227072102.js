

describe('TAT Customer Service Center', () => {
  
  it('checks the application title', () => {
    cy.visit('../../src/index.html')
      .title().should('be.equal', 'TAT Customer Service Center')


  })
})
