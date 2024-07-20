import { Selector } from "./class/Selector";
import { User } from "./class/User";
import { LandingPage } from "./LandingPage";
import { NewAccountPage } from "./NewAccountPage";

export class LoggedPage {
    login(user: User, pages: { landingPage: import("./LandingPage").LandingPage; signPage: import("./SignPage").SignPage; accountCreatedPage: import("./AccountCreatedPage").AccountCreatedPage; selector: Selector.xpath; }) {
        throw new Error('Method not implemented.');
    }
    deleteAccount(loggedPage: LoggedPage, selectorType: Selector) {
        loggedPage.clickDeleteAccount(selectorType)
        loggedPage.checkDeletedAccountMessage('Account Deleted!', selectorType)
        loggedPage.clickContinueDeletedAccount(selectorType)
            ; return this
    }
    clickContinueDeletedAccount(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="continue-button"]', '//*[@data-qa="continue-button"]').click();
        ; return this
    }
    checkDeletedAccountMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="account-deleted"] b', '//*[@data-qa="account-deleted"]//b').contains(message)
            ; return this
    }
    clickDeleteAccount(selectorType: Selector) {
        cy.xget(selectorType, '[href="/delete_account"]', '//*[@href="/delete_account"]').click();
        ; return this
    }

    checkLoggedInUser(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, 'ul.nav.navbar-nav', '//ul[@class="nav navbar-nav"]').should('contain', `Logged in as ${fakeNome}`);
        ; return new LoggedPage()
    }

    clickLogout(selectorType: Selector) {
        cy.xget(selectorType, '[href="/logout"]', '').click();
        ; return new LandingPage()
    }
}