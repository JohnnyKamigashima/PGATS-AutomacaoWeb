import { Selector } from "./class/Selector";
import { User } from './class/User';

export class PaymentPage {
    clickDownloadInvoice(selectorType: Selector) {
        cy.xget(selectorType, '.btn-default', '').contains('Download Invoice').click()
            .xget(selectorType, '[data-qa="continue-button"]', '').contains('Continue').click()
    }
    checkSuccessMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="order-placed"] b', '').should('contain', message)

    }

    checkOrderPlacedMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, 'section p', '').should('contain', message)
    }

    payAndConfirmOrder(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="pay-button"]', '').click();
    }

    enterPaymentDetails(user: User, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="name-on-card"]', '').type(user.fakeNome);
        cy.xget(selectorType, '[data-qa="card-number"]', '').type(user.cardNumber);
        cy.xget(selectorType, '[data-qa="expiry-month"]', '').type(user.cardExpirationDate.getMonth().toString());
        cy.xget(selectorType, '[data-qa="expiry-year"]', '').type(user.cardExpirationDate.getFullYear().toString());
        cy.xget(selectorType, '[data-qa="cvc"]', '').type(user.cardCVC);

    }
}