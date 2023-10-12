export class LoginPage {

    userNameField = "#userName";
    passwordField = "#password";
    loginButton = "button#login";


    isOnLoginPage() {
        cy.contains('h5', 'Login in Book Store');
        cy.get(this.loginButton).should('exist');
    }

    getFixtureData() {
        let data;
        cy.fixture('login').then((loginData) => {
            data = loginData;
        });
        console.log(data);
        return data;
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
        let data = this.getFixtureData();
        this.enterEmail(data.validCredentials.username);
        this.enterPassword(data.validCredentials.password);
        this.clickLoginButton();
    }

    doLoginWithInvalidCredentials() {
        let data = this.getFixtureData();
        this.enterEmail(data.invalidCredentials.username);
        this.enterPassword(data.invalidCredentials.password);
        this.clickLoginButton();
    }

}

export const onLoginPage = new LoginPage();