import { Selector } from "./class/Selector";
import { User } from "./class/User";

export class CheckoutPage {
    postComment(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[name="message"]', '').type(message);
    }
    placeOrder(selectorType: Selector) {
        cy.xget(selectorType, '[href="/payment"]', '').click();
    }
    reviewOrder(user: User, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_firstname', '').should('contain', user.firstName)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_firstname', '').should('contain', user.lastName)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_address1', '').should('contain', user.address)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode', '').should('contain', user.city)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode', '').should('contain', user.state)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_city.address_state_name.address_postcode', '').should('contain', user.zipCode)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_country_name', '').should('contain', user.country)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id="address_delivery"] li.address_phone', '').should('contain', user.mobileNumber)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_firstname', '').should('contain', user.firstName)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_firstname', '').should('contain', user.lastName)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_address1', '').should('contain', user.address)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode', '').should('contain', user.city)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode', '').should('contain', user.state)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_city.address_state_name.address_postcode', '').should('contain', user.zipCode)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_country_name', '').should('contain', user.country)
        cy.xget(selectorType, '[data-qa="checkout-info"] [id = "address_invoice"] li.address_phone', '').should('contain', user.mobileNumber)
    }
}