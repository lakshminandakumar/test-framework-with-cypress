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
Cypress.Commands.add('login', (username, password) => {   
        cy.get('#userName').clear().type(username);
        cy.get('#password').clear().type(password);
        cy.get('button#login').click();
  });

Cypress.Commands.add('loginViaApi', () => {
        cy.request({
          method: 'POST',
          url: 'https://demoqa.com/Account/v1/Authorized',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            userName: Cypress.env('validUsername'),
            password: Cypress.env('validPassword')
          }
        }).its('status').should('equal', 200)
})
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