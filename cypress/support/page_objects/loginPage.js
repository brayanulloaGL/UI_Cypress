export class LoginPage {

    verifyLogin(){
        cy.contains('My account').click()
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.contains('Log in').click()
        cy.contains('Logout').should('contain', 'Logout')
    }

    verifyLogout(username, password){
        cy.contains('My account').click()
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.contains('Log in').click()
        cy.contains('Logout').click({force: true})
        cy.get('.site-title').should('contain', 'Automation Playground')
    }
}

export const loginPage = new LoginPage()