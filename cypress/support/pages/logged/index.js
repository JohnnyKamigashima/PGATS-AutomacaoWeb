import landing from '../header/index'

export default new class logged {
    deleteAccount() {
        this.clickDeleteAccount()
        this.checkDeletedAccountMessage('Account Deleted!')
        this.clickContinueDeletedAccount()
        return this
    }
    clickContinueDeletedAccount() {
        cy.get('[data-qa="continue-button"]').click()
        return this
    }
    checkDeletedAccountMessage(message) {
        cy.get('[data-qa="account-deleted"] b').contains(message)
        return this
    }
    clickDeleteAccount() {
        cy.get('[href="/delete_account"]').click()
        return this
    }

    checkLoggedInUser(fakeNome) {
        cy.get('ul.nav.navbar-nav').should('contain', `Logged in as ${fakeNome}`)
        return this
    }

    clickLogout() {
        cy.get('[href="/logout"]').click()
        return landing
    }
}