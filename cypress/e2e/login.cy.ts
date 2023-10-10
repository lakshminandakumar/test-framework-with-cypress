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
})