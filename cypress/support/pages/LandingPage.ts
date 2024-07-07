import { Selector } from "./class/Selector";

export class LandingPage {
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
