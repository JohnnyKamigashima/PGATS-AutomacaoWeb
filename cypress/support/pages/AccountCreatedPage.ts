import { Selector } from "./class/Selector";

export class AccountCreatedPage {
    checkUrl() {
        cy.url().should('contain', 'account_created')
    }
    clickContinueButton(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="continue-button"]', '//*[@data-qa="continue-button"]').click();
    }
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="account-created"]', '//*[@data-qa="account-created"]').should('have.text', text)
    }
}