/// <reference types="cypress" />

describe('Tools QA', () => {
    beforeEach(() => {
        cy.visit('/login');
    })

    it('logs in successfully', () => {
        cy.get('#userName').type('demo.user');
        cy.get('#password').type('Dem0u$er');
        cy.get('button#login').click();
        cy.contains('Log out').should('exist');
    })

    it('does not log in successfully with incorrect username', () => {
        cy.get('#userName').type('demo.user1');
        cy.get('#password').type('Dem0u$er');
        cy.get('button#login').click();
        cy.contains('Invalid username or password!').should('exist');
    })

    it('does not log in successfully with incorrect password', () => {
        cy.get('#userName').type('demo.user');
        cy.get('#password').type('Dem0u$er1');
        cy.get('button#login').click();
        cy.contains('Invalid username or password!').should('exist');
    })
})