export class LoginPage {

    verifyLogin(username, password){
        cy.contains('My account').click()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Log in').click()
        cy.contains('Logout').should('contain', 'Logout')
    }

    verifyLogout(username, password){
        cy.contains('My account').click()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Log in').click()
        cy.contains('Logout').click({force: true})
        cy.get('.site-title').should('contain', 'Automation Playground')
    }
}

export const loginPage = new LoginPage()