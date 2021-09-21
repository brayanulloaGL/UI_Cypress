export class LoginPage {

    submitUsernameAndPassword(username, password){
        cy.contains('My account').click()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Log in').click()
        cy.contains('Logout').should('contain', 'Logout')
    }
}

export const loginPage = new LoginPage()