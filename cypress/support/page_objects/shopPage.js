export class ShopPage {
    
    verifyProductInfo(){
        cy.contains('Shop').click()
        cy.get('[data-product_id="15"]').click()
        cy.wait(4000)
        cy.contains('Cart').click({force: true})
        cy.contains('Beanie').click()
        cy.get('[class="product_title entry-title"]').should('contain', 'Beanie')
        cy.get('#tab-description').should('contain', 'Description')
    }
}

export const shopPage = new ShopPage()