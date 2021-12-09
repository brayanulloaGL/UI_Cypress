import { cartPage } from "../../support/page_objects/cartPage"


describe('Cart Tests', () => {

    beforeEach('Open Page', () => {
        cy.openHomePage()
    })

    it.only('Verify that the cart can be updated', () => {
        cartPage.cartUpdate('Album')
        //doing assert
    })

    it('Verify that an item can be successfully removed from the cart', () => {
        cartPage.verifyCartDeleteItem('Belt')
    })

    it('Verify that a variable product can be added to the cart correcty', () => {
        cartPage.verifyVariableItemAdded('Hoddie')
    })
})