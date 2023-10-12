/// <reference types="cypress" />

describe('Tools QA Login feature', () => {
    let data; //closure variable
    beforeEach(() => {
        cy.visit('/login');
        cy.fixture('login').then((loginData) => {
            data = loginData;
        });
        
    })

    it('logs in successfully', () => {
        const { username, password } = data.validCredentials;
        cy.login(username, password);

        cy.get('#submit').should('exist');
        cy.contains('Log out').should('be.visible');
    })

    it('does not log in successfully with incorrect username', () => {
        const { username, password } = data.incorrectUsername;
        cy.login(username, password);

        cy.contains('Invalid username or password!').should('be.visible');
    })

    it('does not log in successfully with incorrect password', () => {
        const { username, password } = data.incorrectPassword;
        cy.login(username, password);

        cy.contains('Invalid username or password!').should('be.visible');
    })
})