export class AccountCreatedPage {
    checkUrl() {
        cy.url().should('contain', 'account_created')
    }
    clickContinueButton() {
        cy.get('[data-qa="continue-button"]').click();
    }
    checkHeaderText(text: string) {
        cy.get('[data-qa="account-created"]').should('have.text', text)
    }
}