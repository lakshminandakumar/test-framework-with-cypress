/// <reference types="cypress" />

import { onLoginPage } from '../e2e/pageObjects/LoginPage';

describe('ToolsQA Login Feature', () =>{
    beforeEach(() => {
        cy.visit('/login');
        onLoginPage.isOnLoginPage();
    })

    it('logs in successfully', () => {
        onLoginPage.doLoginWithValidCredentials();

        cy.get('#submit').should('exist');
        cy.contains('Log out').should('be.visible');
    })

    it('does not log in successfully with invalid credentials', () => {
        onLoginPage.doLoginWithInvalidCredentials();
        
        cy.contains('Invalid username or password!').should('be.visible');
    })
})