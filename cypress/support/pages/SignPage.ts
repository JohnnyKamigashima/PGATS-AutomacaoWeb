export class SignPage {
    shouldContainText(text: string) {
        cy.get('section h2').contains(text)
    }
    clickSignUp() {
        cy.get('[data-qa="signup-button"]').click();
    }
    fillEmail(fakeEmail: string) {
        cy.get('[data-qa="signup-email"]').type(fakeEmail)
    }

    fillSignUpName(name: string) {
        cy.get('[data-qa="signup-name"]').type(name);
    }
}