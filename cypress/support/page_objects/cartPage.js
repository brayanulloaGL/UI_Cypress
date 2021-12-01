//List of Selectors that will be used in this Page Object

const cartSelectors = {
    shopTab: 'Shop',
    cartButton: 'Cart',
    woocommerceMessage: '.woocommerce-message',
    productTitle: '.woocommerce-loop-product__title',
}

export class CartPage{
    
    cartUpdate(productName){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct(productName) //This is a Cypress Command
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('[class="plus"]').click()
        cy.get('[value="Update cart"]').click()
        cy.get(cartSelectors.woocommerceMessage).should('contain', 'Cart updated.')
    }

    verifyCartDeleteItem(productName){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct(productName) //This is a Cypress Command
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('.remove').click()
        cy.get(cartSelectors.woocommerceMessage).should('contain', 'removed.')
    }

    verifyVariableItemAdded(){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct(productName) //This is a Cypress Command
        cy.get('#pa_color').select('Blue')
        cy.get('#logo').select('Yes')
        cy.get('.single_add_to_cart_button').click()
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('[data-title="Product"]').should('contain', 'Hoodie - Blue, Yes')
    }
}

export const cartPage = new CartPage()



