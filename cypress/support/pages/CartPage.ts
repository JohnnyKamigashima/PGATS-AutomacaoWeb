import { Pricing } from "./class/Pricing";
import { Selector } from "./class/Selector";

export class CartPage {
    clickSigninLogIn(selectorType: Selector) {
        cy.xget(selectorType, '[id="checkoutModal"] [href="/login"]', '').contains('Register / Login').click();
    }
    proceedToCheckout(selectorType: Selector) {
        cy.xget(selectorType, 'a.btn-default', '').click();
    }
    productsInCart(quantity: number, selectorType: Selector) {
        cy.xget(selectorType, '[id="cart_info"] tr', '').should('have.length', quantity + 1)
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
        });
    }
}