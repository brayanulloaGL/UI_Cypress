//List of Selectors that will be used in this Page Object

const loginSelectors = {
    myAccountTab: 'My account',
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: 'Log in',
    logoutButton: 'Logout',
    siteTitle: '.site-title',
}

export class LoginPage {

    verifyLogin(){
        cy.contains(loginSelectors.myAccountTab).click()
        cy.get(loginSelectors.usernameInput).type(Cypress.env('username'))
        cy.get(loginSelectors.passwordInput).type(Cypress.env('password'))
        cy.contains(loginSelectors.loginButton).click()
        cy.contains(loginSelectors.logoutButton).should('contain', 'Logout')
    }

    verifyLogout(){
        cy.contains(loginSelectors.myAccountTab).click()
        cy.get(loginSelectors.usernameInput).type(Cypress.env('username'))
        cy.get(loginSelectors.passwordInput).type(Cypress.env('password'))
        cy.contains(loginSelectors.loginButton).click()
        cy.contains(loginSelectors.logoutButton).click({force: true})
        cy.get(loginSelectors.siteTitle).should('contain', 'Automation Playground')
    }
}

export const loginPage = new LoginPage()
