import cart from '../cart'
import products from '../products'
import contacts from '../contacts'
import sign from '../sign'
import testCases from '../testCases'

export default new class header {

    clickCart() {
        cy.get('.navbar-nav .fa-shopping-cart').click({ waitForAnimations: false })
        cy.get('.container div.breadcrumbs').should('contain', 'Shopping Cart')
        return cart
    }

    clickProducts() {
        cy.get('[href="/products"]').click()
        return products
    }
    clickTestCases() {
        cy.get('[id="header"] .navbar-nav [href="/test_cases"]').click()
        return testCases
    }
    clickContactUs() {
        cy.get('[href="/contact_us"]').click()
        return contacts
    }
    clickSigninLogIn() {
        cy.get('[href="/login"]').eq(0).click()
        return sign
    }
}