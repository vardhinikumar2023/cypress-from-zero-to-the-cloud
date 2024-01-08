

describe('TAT Customer Service Center', () => {
  
  it('checks the application title', () => {
    cy.visit('../../src/index.html')
      .title().should('include', 'TAT')


  })
})
