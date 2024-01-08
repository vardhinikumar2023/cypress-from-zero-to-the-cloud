

describe('TAT Customer Service Center', () => {
  beforeEach(()=> {
    cy.visit('../../src/index.html')
  })
  
  it('checks the application title', () => {
          cy.title().should('be.equal', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form',() => {
    cy.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress.com')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({}))
    cy.get('button[type="submit"]').click()


    //success message is shown after successful submit click
    cy.get('.success').should('be.visible')
  })
})


  
