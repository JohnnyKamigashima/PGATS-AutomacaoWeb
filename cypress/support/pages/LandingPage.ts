import { Sign } from "crypto";
import { Selector } from "./class/Selector";
import { SignPage } from "./SignPage";
import { ContactsPage } from "./ContactsPage";
import { ProductPage } from "./ProductPage";
import { ProductsPage } from "./ProductsPage";
import { CartPage } from "./CartPage";

export class LandingPage {
    scrollUpToCaroussel(selectorType: Selector) {
        cy.xget(selectorType, '[id="slider-carousel"][data-ride="carousel"]', '').scrollIntoView()
        return this;
    }
    carousselShouldHaveText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="slider-carousel"][data-ride="carousel"]', '').should('contain', text)
        return this
    }
    clickScrollUpButton(selectorType: Selector) {
        cy.xget(selectorType, '[id="scrollUp"]', '').click();
        return this
    }
    scrollToFooter(selectorType: Selector) {
        cy.xget(selectorType, '.footer-widget', '').scrollIntoView()
        return this
    }
    clickModalViewCart(selectorType: Selector) {
        cy.xget(selectorType, '.modal-dialog u', '').contains('View Cart').click();
        return new CartPage()
    }
    clickModalContinueShopping(selectorType: Selector) {
        cy.xget(selectorType, '[id="recommended-item-carousel"] [data-product-id="1"].add-to-cart', '').click();
        return this
    }
    addRecommendedToCart(item: number, selectorType: Selector) {
        cy.xget(selectorType, `[id="recommended-item-carousel"] [data-product-id="${item}"].add-to-cart`, '').click({ force: true });
        return this
    }
    recommendedItemsVisible(selectorType: Selector) {
        cy.xget(selectorType, '.recommended_items', '').scrollIntoView().should('be.visible')
        return this
    }
    selectBrand(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.brands-name', '').contains(text).click()
        return new ProductsPage()
    }
    containBrandsPanel(selectorType: Selector) {
        cy.xget(selectorType, '.brands_products h2', '').should('contain', 'Brands')
        return this
    }
    selectSubCategory(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.panel-body', '').contains(text).click();
        return new ProductsPage()
    }
    selectCategory(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.panel-heading', '').contains(text).find('.fa-plus').click()
        return this
    }
    containCatagoryPanel(selectorType: Selector) {
        cy.xget(selectorType, '.left-sidebar h2', '').should('contain', 'Category');
        return this
    }
    clickCart(selectorType: Selector) {
        cy.xget(selectorType, '.navbar-nav .fa-shopping-cart', '').click({ waitForAnimations: false });
        cy.xget(selectorType, '.container div.breadcrumbs', '').should('contain', 'Shopping Cart');
        return new CartPage()
    }

    subscribeToNewsletter(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, 'footer h2', '').should('have.text', 'Subscription').scrollIntoView();
        cy.xget(selectorType, '[id="susbscribe_email"]', '').type(fakeEmail);
        cy.xget(selectorType, '[id="subscribe"]', '').click();
        cy.xget(selectorType, '.alert', '').should('contain', 'You have been successfully subscribed!');
        return this
    }
    clickProducts(selectorType: Selector) {
        cy.xget(selectorType, '[href="/products"]', '').click();
        ; return new ProductsPage()
    }
    clickTestCases(selectorType: Selector) {
        cy.xget(selectorType, '[id="header"] .navbar-nav [href="/test_cases"]', '').click();
        cy.xget(selectorType, 'h2 b', '').should('contain', 'Test Cases');
        return this
    }
    clickContactUs(selectorType: Selector) {
        cy.xget(selectorType, '[href="/contact_us"]', '').click();;
        return new ContactsPage()
    }
    clickSigninLogIn(selectorType: Selector) {
        cy.xget(selectorType, '[href="/login"]', '//*[@href="/login"]').eq(0).click();;
        return new SignPage()
    }

    waitUntilCarrousselIsLoaded(selectorType: Selector) {
        cy.xget(selectorType, '[data-ride="carousel"]', '//*[@data-ride="carousel"]').eq(0).should('be.visible');;
        return this
    }

    visit() {
        cy.visit('/');;
        return this
    }

}
