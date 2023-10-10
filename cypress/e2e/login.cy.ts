/// <reference types="cypress" />

describe('Tools QA Login feature', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('login').as('data');
        
    })

    it('logs in successfully', () => {
        const { username, password } = this.data.validCredentials;
        cy.login(username, password);

        cy.get('#submit').should('exist');
        cy.contains('Log out').should('be.visible');
    })

    it('does not log in successfully with incorrect username', () => {
        const { username, password } = this.data.incorrectUsername;
        cy.login(username, password);

        cy.contains('Invalid username or password!').should('be.visible');
    })

    it('does not log in successfully with incorrect password', () => {
        const { username, password } = this.data.incorrectPassword;
        cy.login(username, password);

        cy.contains('Invalid username or password!').should('be.visible');
    })
})