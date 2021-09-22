import { shopPage } from "../../support/page_objects/shopPage"

describe('Shop Tests', () => {

    beforeEach('Open Page', () => {
        cy.openHomePage()
    })

    it('Verify that the product details section shows the content correctly', () => {
        shopPage.verifyProductInfo()
    })
})