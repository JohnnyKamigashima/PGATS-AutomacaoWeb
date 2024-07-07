import { Selector } from "./class/Selector";
import { User } from "./class/User";

export class LoggedPage {
    login(user: User, pages: { landingPage: import("./LandingPage").LandingPage; signPage: import("./SignPage").SignPage; accountCreatedPage: import("./AccountCreatedPage").AccountCreatedPage; selector: Selector.xpath; }) {
        throw new Error('Method not implemented.');
    }
    deleteAccount(loggedPage: LoggedPage, selectorType: Selector) {
        loggedPage.clickDeleteAccount(selectorType)
        loggedPage.checkDeletedAccountMessage('Account Deleted!', selectorType)
        loggedPage.clickContinueDeletedAccount(selectorType)
    }
    clickContinueDeletedAccount(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="continue-button"]', '//*[@data-qa="continue-button"]').click();
    }
    checkDeletedAccountMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="account-deleted"] b', '//*[@data-qa="account-deleted"]//b').contains(message)
    }
    clickDeleteAccount(selectorType: Selector) {
        cy.xget(selectorType, '[href="/delete_account"]', '//*[@href="/delete_account"]').click();
    }

    checkLoggedInUser(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, 'ul.nav.navbar-nav', '//ul[@class="nav navbar-nav"]').should('contain', `Logged in as ${fakeNome}`);
    }

    clickLogout(selectorType: Selector) {
        cy.xget(selectorType, '[href="/logout"]', '').click();
    }
}