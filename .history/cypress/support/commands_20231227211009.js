Cypress.Commands.add('fillMadatoryFieldsAndSubmit', ()=>{
    cy.get('#firstName').type('Parvatha')
    cy.get('#lastName').type('Arunkumar')
    cy.get('#email').type('parvatha@cypress.com')
    cy.get('[type="checkbox"]').check()// checkbox enabling
      .should('be.checked')
    cy.get('#open-text-area').type('hello welcome to world of cypress,hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress, hello welcome to world of cypress',({delay:0}))
    cy.get('button[type="submit"]').click()
}


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })