export class LoginPage {

    userNameField = "#userName";
    passwordField = "#password";
    loginButton = "button#login";


    isOnLoginPage() {
        cy.contains('h5', 'Login in Book Store');
        cy.get(this.loginButton).should('exist');
    }

    enterEmail(email: string) {
        cy.get(this.userNameField).clear().type(email);
    }

    enterPassword(password: string) {
        cy.get(this.passwordField).clear().type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    doLoginWithValidCredentials() {
        this.enterEmail(Cypress.env('validUsername'));
        this.enterPassword(Cypress.env('validPassword'));
        this.clickLoginButton();
    }

    doLoginWithInvalidCredentials() {
        this.enterEmail(Cypress.env('invalidUsername'));
        this.enterPassword(Cypress.env('invalidPassword'));
        this.clickLoginButton();
    }

}

export const onLoginPage = new LoginPage();