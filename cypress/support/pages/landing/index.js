import sign from "../sign"
import cart from "../cart"
import contacts from "../contacts"
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
    selectBrand(text) {
        cy.get('.brands-name').contains(text).click()
        return products
    }
    containBrandsPanel() {
        cy.get('.brands_products h2').should('contain', 'Brands')
        return this
    }
    selectSubCategory(text) {
        cy.get('.panel-body').contains(text).click()
        return products
    }
    selectCategory(text) {
        cy.get('.panel-heading').contains(text).find('.fa-plus').click()
        return this
    }
    containCatagoryPanel() {
        cy.get('.left-sidebar h2').should('contain', 'Category')
        return this
    }
    clickCart() {
        cy.get('.navbar-nav .fa-shopping-cart').click({ waitForAnimations: false })
        cy.get('.container div.breadcrumbs').should('contain', 'Shopping Cart')
        return cart
    }

    subscribeToNewsletter(fakeEmail) {
        cy.get('footer h2').should('have.text', 'Subscription').scrollIntoView()
        cy.get('[id="susbscribe_email"]').type(fakeEmail)
        cy.get('[id="subscribe"]').click()
        cy.get('.alert').should('contain', 'You have been successfully subscribed!')
        return this
    }
    clickProducts() {
        cy.get('[href="/products"]').click()
        return products
    }
    clickTestCases() {
        cy.get('[id="header"] .navbar-nav [href="/test_cases"]').click()
        cy.get('h2 b').should('contain', 'Test Cases')
        return this
    }
    clickContactUs() {
        cy.get('[href="/contact_us"]').click()
        return contacts
    }
    clickSigninLogIn() {
        cy.get('[href="/login"]').eq(0).click()
        return sign
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
