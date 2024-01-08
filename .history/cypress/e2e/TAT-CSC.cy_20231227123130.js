

describe('TAT Customer Service Center', () => {
  beforeEach(()=> {
    cy.visit('../../src/index.html')
  })
  
  it('checks the application title', () => {
          .title().should('be.equal', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form',() => {
    
  })
})


  
