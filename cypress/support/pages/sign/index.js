import newAccount from "../newAccount"
import logged from "../logged"

export default new class sign {
    login(user) {
        this.shouldContainText('Login to your account')
        this.loginEmail(user.fakeEmail)
        this.loginPassword(user.fakePassword)
        this.clickLogin()
        return logged
    }
    newUserSignup(user) {
        this.shouldContainText('New User Signup!')
        this.fillSignUpName(user.fakeNome)
        this.fillEmail(user.fakeEmail)
        this.clickSignUp()
        return newAccount
    }
    checkErrorMessage(text) {
        cy.get('p[style="color: red;"]').should('contain', text).should('be.visible')
        return this
    }

    clickLogin() {
        cy.get('[data-qa="login-button"]').click()
        return this
    }
    loginPassword(fakePassword) {
        cy.get('[data-qa="login-password"]').type(fakePassword)
        return this
    }
    loginEmail(email) {
        cy.get('[data-qa="login-email"]').type(email)
        return this
    }
    shouldContainText(text) {
        cy.get('section h2').contains(text)
        return this
    }
    clickSignUp() {
        cy.get('[data-qa="signup-button"]').click()
        return this
    }
    fillEmail(fakeEmail) {
        cy.get('[data-qa="signup-email"]').type(fakeEmail)
        return this
    }

    fillSignUpName(name) {
        cy.get('[data-qa="signup-name"]').type(name)
        return this
    }
}