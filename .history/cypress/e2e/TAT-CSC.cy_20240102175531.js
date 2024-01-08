

describe('TAT Customer Service Center', () => {
  beforeEach(()=> {
    cy.visit('../../src/index.html')
  })
  
  it('checks the application title', () => {
          cy.title().should('be.equal', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form',() => {
    const test= Cypress._.repeat('Welcome to the Cypress World! ',10)
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

    cy.get('#open-text-area').type(test,{delay:0})
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
it('displays an error message when submitting the form without filling the required fields', () => {
  cy.get('button[type="submit"]').click()
  cy.get('.error').should('be.visible')
})

it('custom commands',()=>{
  const data= {
    firstName: 'Gayathri',
    lastName: 'Arunkumar',
    email: 'parvatha@gayathri.com',
    text:'Welcome to cypress world'
  }
  cy.fillMandatoryFieldsAndSubmit(data)

  cy.get('.success').should('be.visible')

})
it('selects a product (YouTube) by its content',()=> {

  //cy.get('#firstName').type('Parvatha')
  //cy.get('#lastName').type('Arunkumar')
 // cy.get('#email').type('parvatha@cypress.com')
 // cy.get('#open-text-area').type('Hello World')
  cy.get('#product').select(3).should('have.value','mentorship')

 // cy.contains('button','Send').click()

 // cy.get('.success').should('be.visible')
})

it('checks the type of service "Feedback"', ()=> {
  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
})
it('checks each type of service',() =>{

  cy.get('#support-type')
    .find('input[type="radio"]') // looping using each stmt
    .each(typeOfService =>{
      cy.wrap(typeOfService)
      .check()
      .should('be.checked')
    })

})

it.only('checks both checkboxes, then unchecks the last one',()=>{
cy.get('#check')
  .find('input[type="checkbox"]')
  .each(preferredMeans=>{
    cy.wrap(preferredMeans)
    .check()
    .should('be.checked')
  })
cy.get('input[type="checkbox"]').last().uncheck()
})
})
  
