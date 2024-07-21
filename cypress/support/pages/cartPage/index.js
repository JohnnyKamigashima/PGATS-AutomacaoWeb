import { newAccount } from "../newAccount";

export default new class cart {
    isEmpty() {
        cy.get('[id="empty_cart"]').should('be.visible');
        return this;
    }
    removeItem(itemNo) {
        cy.get('.cart_quantity_delete').eq(itemNo - 1).click();
        return this;
    }
    clickSigninLogIn() {
        cy.get('[id="checkoutModal"] [href="/login"]').contains('Register / Login').click();
        return new newAccount();
    }
    proceedToCheckout() {
        cy.get('a.btn-default').click();
        return new CheckoutPage();
    }
    productsInCart(quantity) {
        cy.get('[id="cart_info"] tr').should('have.length', quantity + 1);
        return this;
    }
    productsPricesInCart(pricing) {
        cy.get('[id="cart_info"] tr').each(($el, index) => {
            if (index != 0) {
                cy.wrap($el).within(() => {
                    cy.get('.cart_description').should('contain', pricing[index - 1].description);
                    cy.get('.cart_price').should('contain', pricing[index - 1].price);
                    cy.get('.cart_quantity').should('contain', pricing[index - 1].quantiy);
                    cy.get('.cart_total').should('contain', pricing[index - 1].totalPrice);
                });
            }
        });
        return this;
    }
};