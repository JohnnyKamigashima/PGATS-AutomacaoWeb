
export default new class payment {
    clickDownloadInvoice() {
        cy.get('.btn-default').contains('Download Invoice').click()
            .get('[data-qa="continue-button"]').contains('Continue').click()
        return this
    }
    checkSuccessMessage(message) {
        cy.get('[data-qa="order-placed"] b').should('contain', message)
        return this

    }

    checkOrderPlacedMessage(message) {
        cy.get('section p').should('contain', message)
        return this
    }

    payAndConfirmOrder() {
        cy.get('[data-qa="pay-button"]').click()
        return this
    }

    enterPaymentDetails(user) {
        cy.get('[data-qa="name-on-card"]').type(user.fakeNome)
        cy.get('[data-qa="card-number"]').type(user.cardNumber)
        cy.get('[data-qa="expiry-month"]').type(user.cardExpirationDate.getMonth().toString())
        cy.get('[data-qa="expiry-year"]').type(user.cardExpirationDate.getFullYear().toString())
        cy.get('[data-qa="cvc"]').type(user.cardCVC)
        return this

    }
}