import { cartPage } from "../../support/page_objects/cartPage"

describe('Cart Tests', () => {

    beforeEach('Open Page', () => {
        cy.openHomePage()
    })

    it('Verify that the cart can be updated', () => {
        cartPage.verifyCartUpdate()
    })
})