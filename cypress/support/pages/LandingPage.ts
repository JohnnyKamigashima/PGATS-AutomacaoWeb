import { Selector } from "./class/Selector";

export class LandingPage {
    scrollUpToCaroussel(selectorType: Selector) {
        cy.xget(selectorType, '[id="slider-carousel"][data-ride="carousel"]', '').scrollIntoView()
    }
    carousselShouldHaveText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="slider-carousel"][data-ride="carousel"]', '').should('contain', text)
    }
    clickScrollUpButton(selectorType: Selector) {
        cy.xget(selectorType, '[id="scrollUp"]', '').click();
    }
    scrollToFooter(selectorType: Selector) {
        cy.xget(selectorType, '.footer-widget', '').scrollIntoView()
    }
    clickModalViewCart(selectorType: Selector) {
        cy.xget(selectorType, '.modal-dialog u', '').contains('View Cart').click();
    }
    clickModalContinueShopping(selectorType: Selector) {
        cy.xget(selectorType, '[id="recommended-item-carousel"] [data-product-id="1"].add-to-cart', '').click();
    }
    addRecommendedToCart(item: number, selectorType: Selector) {
        cy.xget(selectorType, `[id="recommended-item-carousel"] [data-product-id="${item}"].add-to-cart`, '').click({ force: true });
    }
    recommendedItemsVisible(selectorType: Selector) {
        cy.xget(selectorType, '.recommended_items', '').scrollIntoView().should('be.visible')
    }
    selectBrand(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.brands-name', '').contains(text).click()
    }
    containBrandsPanel(selectorType: Selector) {
        cy.xget(selectorType, '.brands_products h2', '').should('contain', 'Brands')
    }
    selectSubCategory(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.panel-body', '').contains(text).click()
    }
    selectCategory(text: string, selectorType: Selector) {
        cy.xget(selectorType, '.panel-heading', '').contains(text).find('.fa-plus').click()
    }
    containCatagoryPanel(selectorType: Selector) {
        cy.xget(selectorType, '.left-sidebar h2', '').should('contain', 'Category')
    }
    clickCart(selectorType: Selector) {
        cy.xget(selectorType, '.navbar-nav .fa-shopping-cart', '').click({ waitForAnimations: false });
        cy.xget(selectorType, '.container div.breadcrumbs', '').should('contain', 'Shopping Cart')
    }

    subscribeToNewsletter(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, 'footer h2', '').should('have.text', 'Subscription').scrollIntoView();
        cy.xget(selectorType, '[id="susbscribe_email"]', '').type(fakeEmail);
        cy.xget(selectorType, '[id="subscribe"]', '').click();
        cy.xget(selectorType, '.alert', '').should('contain', 'You have been successfully subscribed!')
    }
    clickProducts(selectorType: Selector) {
        cy.xget(selectorType, '[href="/products"]', '').click();
    }
    clickTestCases(selectorType: Selector) {
        cy.xget(selectorType, '[id="header"] .navbar-nav [href="/test_cases"]', '').click();
        cy.xget(selectorType, 'h2 b', '').should('contain', 'Test Cases')
    }
    clickContactUs(selectorType: Selector) {
        cy.xget(selectorType, '[href="/contact_us"]', '').click();
    }
    clickSigninLogIn(selectorType: Selector) {
        cy.xget(selectorType, '[href="/login"]', '//*[@href="/login"]').eq(0).click();
    }

    waitUntilCarrousselIsLoaded(selectorType: Selector) {
        cy.xget(selectorType, '[data-ride="carousel"]', '//*[@data-ride="carousel"]').eq(0).should('be.visible');
    }

    visit() {
        cy.visit('/');
    }

}
