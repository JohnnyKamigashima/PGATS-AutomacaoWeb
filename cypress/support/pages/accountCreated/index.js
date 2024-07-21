import logged from "../logged"

export default new class accountCreated {
    checkUrl() {
        cy.url().should('contain', 'account_created')
        return this
    }
    clickContinueButton() {
        cy.get('[data-qa="continue-button"]').click()
        return this
    }
    checkHeaderText(text) {
        cy.get('[data-qa="account-created"]').should('have.text', text)
        return this
    }

    checkSuccessMessage(text) {
        this.checkHeaderText(text)
        this.checkUrl()
        this.clickContinueButton()
        return logged
    }
}