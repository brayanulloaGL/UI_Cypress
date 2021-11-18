//List of Selectors that will be used in this Page Object

const cartSelectors = {
    shopTab: 'Shop',
    cartButton: 'Cart',
    woocommerceMessage: '.woocommerce-message',
}

export class CartPage{
    
    verifyCartUpdate(){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct('Album')
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('[class="plus"]').click()
        cy.get('[value="Update cart"]').click()
        cy.get(cartSelectors.woocommerceMessage).should('contain', 'Cart updated.')
    }

    verifyCartDeleteItem(){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct('Belt')
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('.remove').click()
        cy.get(cartSelectors.woocommerceMessage).should('contain', 'removed.')
    }

    verifyVariableItemAdded(){
        cy.contains(cartSelectors.shopTab).click()
        cy.clickProduct('Hoodie')
        cy.get('#pa_color').select('Blue')
        cy.get('#logo').select('Yes')
        cy.get('.single_add_to_cart_button').click()
        cy.wait(1000)
        cy.contains(cartSelectors.cartButton).click({force: true})
        cy.get('[data-title="Product"]').should('contain', 'Hoodie - Blue, Yes')
    }
}

export const cartPage = new CartPage()

// UPDATES:

    //1. User y Pass con variables de ambiente / DONE
    //2. Reutilizar selectores y metodos / DONE
    //3. Para escoger el producto hacerlo de manera dinamica / DONE