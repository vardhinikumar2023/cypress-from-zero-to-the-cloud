

describe('TAT Customer Service Center', () => {
  beforeEach(()=> {
    cy.visit('../../src/index.html')
  })
  
  it('checks the application title', () => {
          cy.title().should('be.equal', 'TAT Customer Service Center')
  })

  it.only('fills in the required fields and submits the form',() => {
    cy.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress.com')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    cy.get('button[type="submit"]').click()


    //success message is shown after successful submit click
    cy.get('.success').should('be.visible')
  })


  it.only('displays an error message when submitting the form with an email with invalid formatting',()=> {
    y.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })
})


  
