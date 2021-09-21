import { loginPage, LoginPage } from "../../support/page_objects/loginPage"

describe('Login Tests', () => {

    beforeEach('Open Page', () => {
        cy.openHomePage()
    })

    it('Verify that the login functionality works as expected', () => {
        loginPage.submitUsernameAndPassword('auto','auto')
    })
})