import { Selector } from "./class/Selector";
import { User } from './class/User';

export class PaymentPage {
    checkSuccessMessage(message: string, selectorType: Selector) {
        // cy.xget(selectorType, '#success_message', '').contains(message).should('exist')
        cy.xget(selectorType, '[data-qa="order-placed"] b', '').should('contain', 'Order Placed!')

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