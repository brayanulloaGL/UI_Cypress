//List of Selectors that will be used in this Page Object

const shopSelectors = {
    shopTab: 'Shop',
    cartButton: 'Cart',
}

export class ShopPage {
    
    verifyProductInfo(){
        cy.contains(shopSelectors.shopTab).click()
        cy.clickProduct('Beanie')
        cy.wait(1000)
        cy.contains(shopSelectors.cartButton).click({force: true})
        cy.contains('Beanie').click()
        cy.get('[class="product_title entry-title"]').should('contain', 'Beanie')
        cy.get('#tab-description').should('contain', 'Description')
    }
}

export const shopPage = new ShopPage()