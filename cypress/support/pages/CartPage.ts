import { CheckoutPage } from "./CheckoutPage";
import { Pricing } from "./class/Pricing";
import { Selector } from "./class/Selector";
import { NewAccountPage } from "./NewAccountPage";

export class CartPage {
    isEmpty(selectorType: Selector) {
        cy.xget(selectorType, '[id="empty_cart"]', '').should('be.visible');
        return this
    }
    removeItem(itemNo: number, selectorType: Selector) {
        cy.xget(selectorType, '.cart_quantity_delete', '').eq(itemNo - 1).click();;
        return this
    }
    clickSigninLogIn(selectorType: Selector) {
        cy.xget(selectorType, '[id="checkoutModal"] [href="/login"]', '').contains('Register / Login').click();;
        return new NewAccountPage()
    }
    proceedToCheckout(selectorType: Selector) {
        cy.xget(selectorType, 'a.btn-default', '').click();;
        return new CheckoutPage()
    }
    productsInCart(quantity: number, selectorType: Selector) {
        cy.xget(selectorType, '[id="cart_info"] tr', '').should('have.length', quantity + 1);
        return this
    }
    productsPricesInCart(pricing: Pricing[], selectorType: Selector) {
        cy.xget(selectorType, '[id="cart_info"] tr', '').each(($el, index) => {
            if (index != 0) {
                cy.wrap($el).within(() => {
                    cy.xget(selectorType, '.cart_description', '').should('contain', pricing[index - 1].description);
                    cy.xget(selectorType, '.cart_price', '').should('contain', pricing[index - 1].price);
                    cy.xget(selectorType, '.cart_quantity', '').should('contain', pricing[index - 1].quantiy);
                    cy.xget(selectorType, '.cart_total', '').should('contain', pricing[index - 1].totalPrice);
                })
            }
        });;
        return this
    }
}