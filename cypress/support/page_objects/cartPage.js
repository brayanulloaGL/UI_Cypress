export class CartPage{
    
    verifyCartUpdate(){
        cy.contains('Shop').click()
        cy.get('[data-product_id="23"]').click()
        cy.wait(1000)
        cy.contains('Cart').click({force: true})
        cy.get('[class="plus"]').click()
        cy.get('[value="Update cart"]').click()
        cy.get('.woocommerce-message').should('contain', 'Cart updated.')
    }

    verifyCartDeleteItem(){
        cy.contains('Shop').click()
        cy.get('[data-product_id="16"]').click()
        cy.wait(1000)
        cy.contains('Cart').click({force: true})
        cy.get('.remove').click()
        cy.get('.woocommerce-message').should('contain', 'removed.')
    }

    verifyVariableItemAdded(){
        cy.contains('Shop').click()
        cy.get('[data-product_id="12"]').click()
        cy.get('#pa_color').select('Blue')
        cy.get('#logo').select('Yes')
        cy.get('.single_add_to_cart_button').click()
        cy.wait(1000)
        cy.contains('Cart').click({force: true})
        cy.get('[data-title="Product"]').should('contain', 'Hoodie - Blue, Yes')
    }
}

export const cartPage = new CartPage()

// UPDATES:

    //1. Reutilizar selectores y metodos
    //2. Para escoger el producto hacerlo de manera dinamica
    //3. User y Pass con variables de ambiente