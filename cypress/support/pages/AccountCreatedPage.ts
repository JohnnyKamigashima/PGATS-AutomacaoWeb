import { Selector } from "./class/Selector";

export class AccountCreatedPage {
    checkUrl() {
        cy.url().should('contain', 'account_created');
        return this
    }
    clickContinueButton(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="continue-button"]', '//*[@data-qa="continue-button"]').click();
        ;
        return this
    }
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="account-created"]', '//*[@data-qa="account-created"]').should('have.text', text)
            ;
        return this
    }
}