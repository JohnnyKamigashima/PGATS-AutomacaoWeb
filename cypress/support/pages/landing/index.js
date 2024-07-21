import cart from "../cart"
import products from "../products"

export default new class landing {
    scrollUpToCaroussel() {
        cy.get('[id="slider-carousel"][data-ride="carousel"]').scrollIntoView()
        return this
    }
    carousselShouldHaveText(text) {
        cy.get('[id="slider-carousel"][data-ride="carousel"]').should('contain', text)
        return this
    }
    clickScrollUpButton() {
        cy.get('[id="scrollUp"]').click()
        return this
    }
    scrollToFooter() {
        cy.get('.footer-widget').scrollIntoView()
        return this
    }
    clickModalViewCart() {
        cy.get('.modal-dialog u').contains('View Cart').click()
        return cart
    }
    clickModalContinueShopping() {
        cy.get('[id="recommended-item-carousel"] [data-product-id="1"].add-to-cart').click()
        return this
    }
    addRecommendedToCart(item) {
        cy.get(`[id="recommended-item-carousel"] [data-product-id="${item}"].add-to-cart`).click({ force: true })
        return this
    }
    recommendedItemsVisible() {
        cy.get('.recommended_items').scrollIntoView().should('be.visible')
        return this
    }

    subscribeToNewsletter(fakeEmail) {
        cy.get('footer h2').should('have.text', 'Subscription').scrollIntoView()
        cy.get('[id="susbscribe_email"]').type(fakeEmail)
        cy.get('[id="subscribe"]').click()
        cy.get('.alert').should('contain', 'You have been successfully subscribed!')
        return this
    }

    waitUntilCarrousselIsLoaded() {
        cy.get('[data-ride="carousel"]').eq(0).should('be.visible')
        return this
    }

    visit() {
        cy.visit('/')
        return this
    }

}
