export class LandingPage {
    waitUntilCarrousselIsLoaded() {
        cy.get('[data-ride="carousel"]').eq(0).should('be.visible')
    }
    visit() {
        cy.visit('/')
    }
    clickSigninLogIn() {
        cy.get('[href="/login"]').click()
    }

}