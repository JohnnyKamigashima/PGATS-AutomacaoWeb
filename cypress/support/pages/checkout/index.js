import payment from "../payment"

export default new class checkout {
    postComment(message) {
        cy.get('[name="message"]').type(message)
        return this
    }
    placeOrder() {
        cy.get('[href="/payment"]').click()
        return payment
    }
    reviewOrder(user) {
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_firstname').should('contain', user.firstName)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_firstname').should('contain', user.lastName)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_address1').should('contain', user.address)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode').should('contain', user.city)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode').should('contain', user.state)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode').should('contain', user.zipCode)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_country_name').should('contain', user.country)
        cy.get('[data-qa="checkout-info"] [id="address_delivery"] li.address_phone').should('contain', user.mobileNumber)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_firstname').should('contain', user.firstName)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_firstname').should('contain', user.lastName)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_address1').should('contain', user.address)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode').should('contain', user.city)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode').should('contain', user.state)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode').should('contain', user.zipCode)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_country_name').should('contain', user.country)
        cy.get('[data-qa="checkout-info"] [id = "address_invoice"] li.address_phone').should('contain', user.mobileNumber)

        return this
    }
}