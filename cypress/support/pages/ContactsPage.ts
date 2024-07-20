import { Selector } from "./class/Selector";
import { LandingPage } from "./LandingPage";

export class ContactsPage {
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'h2', '').should('contain', text);
        return this
    }
    fillName(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="name"]', '').type(fakeNome);;
        return this
    }
    fillEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="email"]', '').type(fakeEmail);;
        return this
    }
    fillSubject(subject: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="subject"]', '').type(subject);;
        return this
    }
    fillMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="message"]', '').type(message);;
        return this
    }
    uploadFile(filename: string, selectorType: Selector) {
        cy.xget(selectorType, '[name="upload_file"]', '').selectFile(filename);
        return this
    }
    clickSubmit(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="submit-button"]', '').click();
        // Interceptar e aceitar a confirmação
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press OK to proceed!');
            return true; // Retorna true para aceitar a confirmação
        });;
        return this

    }
    checkSuccessMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '.status.alert-success', '').should('contain', message);
        return this
    }
    clickOk(selectorType: Selector) {
        cy.xget(selectorType, '.btn-success', '').click();;
        return new LandingPage()
    }

}