import { Selector } from "./class/Selector";

export class ContactsPage {
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'h2', '').should('contain', text)
    }
    fillName(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="name"]', '').type(fakeNome);
    }
    fillEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="email"]', '').type(fakeEmail);
    }
    fillSubject(subject: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="subject"]', '').type(subject);
    }
    fillMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="message"]', '').type(message);
    }
    uploadFile(filename: string, selectorType: Selector) {
        cy.xget(selectorType, '[name="upload_file"]', '').selectFile(filename)
    }
    clickSubmit(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="submit-button"]', '').click();
        // Interceptar e aceitar a confirmação
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press OK to proceed!');
            return true; // Retorna true para aceitar a confirmação
        });

    }
    checkSuccessMessage(message: string, selectorType: Selector) {
        cy.xget(selectorType, '.status.alert-success', '').should('contain', message)
    }
    clickOk(selectorType: Selector) {
        cy.xget(selectorType, '.btn-success', '').click();
    }

}