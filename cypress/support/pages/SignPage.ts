import { Selector } from "./class/Selector";

export class SignPage {

    checkErrorMessage(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'p[style="color: red;"]', '').should('contain', text).should('be.visible')
            ; return this
    }

    clickLogin(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-button"]', '').click();
        ; return this
    }
    loginPassword(fakePassword: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-password"]', '').type(fakePassword);; return this
    }
    loginEmail(email: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="login-email"]', '').type(email);; return this
    }
    shouldContainText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'section h2', '//section//h2').contains(text); return this
    }
    clickSignUp(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-button"]', '//*[@data-qa="signup-button"]').click();;
        return this
    }
    fillEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-email"]', '//*[@data-qa="signup-email"]').type(fakeEmail);
        return this
    }

    fillSignUpName(name: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="signup-name"]', '//*[@data-qa="signup-name"]').type(name);;
        return this
    }
}