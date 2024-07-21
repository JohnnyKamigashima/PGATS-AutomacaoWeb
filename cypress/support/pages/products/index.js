import product from '../product'
import cart from '../cart'
import landing from '../landing'

export default new class products {
    addAllToCart() {
        cy.get('.features_items .single-products').its('length').then((length) => {
            cy.get('.features_items .single-products').each(($el, index) => {
                cy.wrap($el).find('.btn-default.add-to-cart').eq(0).click({ force: true })
                if (index < length - 1) cy.get('[data-dismiss="modal"]').contains('Continue Shopping').click().eq(1)
                else cy.get('[id="cartModal"] [href="/view_cart"]').contains('View Cart').click()
            })
        })
        return cart
    }
    checkProductsListText(text) {
        cy.get('.features_items').should('contain', text)
        return landing
    }

    viewCart() {
        cy.get('.modal-body [href="/view_cart"]').eq(0).click()
        return cart
    }
    continueModal() {
        cy.get('[data-dismiss="modal"].close-modal').contains('Continue Shopping').click()
        return this
    }
    hoverOverProduct(index) {
        cy.get('div.product-image-wrapper').eq(index - 1).scrollIntoView().realHover('mouse')
        return this
    }
    hoverAddToCart(index) {
        cy.get(`[data-product-id=${index}].add-to-cart`).eq(1).click({ waitForAnimations: false })
        return this
    }
    checkSearchedProducts(product) {
        cy.get('h2').should('contain', 'Searched Products')
        cy.get('.productinfo').each(($el) => {
            cy.wrap($el).should('contain.text', product).should('be.visible')
        })
        return this
    }
    searchProduct(search) {
        cy.get('[id="search_product"]').clear().type(search)
        cy.get('[id="submit_search"]').click()
        return this
    }
    clickViewProduct(itemno) {
        cy.get(`[href="/product_details/${itemno}"]`).click()
        return product
    }
    checkProductsList() {
        cy.get('.features_items').should('be.visible')
        return this
    }
    checkHeaderText(text) {
        cy.get('h2').contains(text)
        return this
    }
}