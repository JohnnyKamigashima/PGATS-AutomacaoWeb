import { CartPage } from "./CartPage";
import { Selector } from "./class/Selector";
import { LandingPage } from "./LandingPage";
import { ProductPage } from "./ProductPage";

export class ProductsPage {
    addAllToCart(selectorType: Selector) {
        cy.xget(selectorType, '.features_items .single-products', '').its('length').then((length) => {
            cy.xget(selectorType, '.features_items .single-products', '').each(($el, index) => {
                cy.wrap($el).find('.btn-default.add-to-cart').eq(0).click({ force: true })
                if (index < length - 1) cy.xget(selectorType, '[data-dismiss="modal"]', '').contains('Continue Shopping').click().eq(1);
                else cy.xget(selectorType, '[id="cartModal"] [href="/view_cart"]', '').contains('View Cart').click();
            })
        });
        return new CartPage()
    }
    checkProductsListText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.features_items', '').should('contain', text);
        return new LandingPage()
    }

    viewCart(selectorType: Selector) {
        cy.xget(selectorType, '.modal-body [href="/view_cart"]', '').eq(0).click();;
        return new CartPage()
    }
    continueModal(selectorType: Selector) {
        cy.xget(selectorType, '[data-dismiss="modal"].close-modal', '').contains('Continue Shopping').click();;
        return this
    }
    hoverOverProduct(index: number, selectorType: Selector) {
        cy.xget(selectorType, 'div.product-image-wrapper', '').eq(index - 1).scrollIntoView().realHover('mouse');;
        return this
    }
    hoverAddToCart(index: number, selectorType: Selector) {
        cy.xget(selectorType, `[data-product-id=${index}].add-to-cart`, '').eq(1).click({ waitForAnimations: false });;
        return this
    }
    checkSearchedProducts(product: string, selectorType: Selector) {
        cy.xget(selectorType, 'h2', '').should('contain', 'Searched Products')
        cy.xget(selectorType, '.productinfo', '').each(($el) => {
            cy.wrap($el).should('contain.text', product).should('be.visible');
        });;
        return this
    }
    searchProduct(search: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="search_product"]', '').clear().type(search);
        cy.xget(selectorType, '[id="submit_search"]', '').click();;
        return this
    }
    clickViewProduct(itemno: number, selectorType: Selector) {
        cy.xget(selectorType, `[href="/product_details/${itemno}"]`, '').click();;
        return new ProductPage()
    }
    checkProductsList(selectorType: Selector) {
        cy.xget(selectorType, '.features_items', '').should('be.visible');
        return this
    }
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'h2', '').contains(text);
        return this
    }
}