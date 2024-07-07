import { Selector } from "./class/Selector";

export class LandingPage {
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
        cy.xget(selectorType, '[href="/login"]', '//*[@href="/login"]').click();
    }

    waitUntilCarrousselIsLoaded(selectorType: Selector) {
        cy.xget(selectorType, '[data-ride="carousel"]', '//*[@data-ride="carousel"]').eq(0).should('be.visible');
    }

    visit() {
        cy.visit('/');
    }

}
