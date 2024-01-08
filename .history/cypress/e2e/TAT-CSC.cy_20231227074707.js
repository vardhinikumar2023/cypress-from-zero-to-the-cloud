

describe('TAT Customer Service Center', () => {
  
  it('checks the application title', () => {
    cy.visit('../../src/index.html')
      .title().should('be.equal', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form'),() => {
    cy.get('input[type="firstName"]')
      .type('Parvatha')
      .should('have.value', 'Parvatha')
  })
})


  
