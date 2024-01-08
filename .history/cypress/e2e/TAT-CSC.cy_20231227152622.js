

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

// validate if the phone number is a non numeric
    cy.get('#phone').type('1234564567')
      .should('not.have.value', 'abc')
     /* .should(($test) => {
        expect($test).to.have.length(1)
        expect($test).to.match('/^[0-9]*$/')
      })*/
      //.should('match', /^[0-9]*$/)

    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    cy.get('button[type="submit"]').click()


    //success message is shown after successful submit click
    cy.get('.success').should('be.visible')
  })


  it('displays an error message when submitting the form with an email with invalid formatting',()=> {
    cy.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')

  })
  it('displays an error message when the phone becomes required but is not filled in before the form submission',() => {
    cy.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress.com')
    cy.get('[type="checkbox"]').check()// checkbox enabling
      .should('be.checked')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    
    
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('fills and clears the first name, last name, email, and phone field',() => {
    cy.get('#firstName').type('Parvatha').should('have.value','Parvatha')
    .clear().should('have.value','')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress.com')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    
    
    cy.get('button[type="submit"]').click()

})
it.only('displays an error message when submitting the form without filling the required fields', () => {
  cy.get('button[type="submit"]').click()
  cy.get('.error').should('be.visible')
})

})
  
