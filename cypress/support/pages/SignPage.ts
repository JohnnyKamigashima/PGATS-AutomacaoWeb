import { Selector } from "./class/Selector";
import { User } from "./class/User";

export class SignPage {
    clickLogin(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-button"]', '').click();
    }
    loginPassword(fakePassword: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-password"]', '').type(fakePassword);
    }
    loginEmail(email: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-email"]', '').type(email);
    }
    shouldContainText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'section h2', '//section//h2').contains(text)
    }
    clickSignUp(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-button"]', '//*[@data-qa="signup-button"]').click();
    }
    fillEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-email"]', '//*[@data-qa="signup-email"]').type(fakeEmail)
    }

    fillSignUpName(name: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-name"]', '//*[@data-qa="signup-name"]').type(name);
    }
}