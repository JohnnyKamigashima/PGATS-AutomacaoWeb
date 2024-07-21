import landing from "../landing"

export default new class contacts {
    checkHeaderText(text) {
        cy.get('h2').should('contain', text)
        return this
    }
    fillName(fakeNome) {
        cy.get('[data-qa="name"]').type(fakeNome)
        return this
    }
    fillEmail(fakeEmail) {
        cy.get('[data-qa="email"]').type(fakeEmail)
        return this
    }
    fillSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject)
        return this
    }
    fillMessage(message) {
        cy.get('[data-qa="message"]').type(message)
        return this
    }
    uploadFile(filename) {
        cy.get('[name="upload_file"]').selectFile(filename)
        return this
    }
    clickSubmit() {
        cy.get('[data-qa="submit-button"]').click()
        // Interceptar e aceitar a confirmação
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press OK to proceed!')
            return true // Retorna true para aceitar a confirmação
        })
        return this

    }
    checkSuccessMessage(message) {
        cy.get('.status.alert-success').should('contain', message)
        return this
    }
    clickOk() {
        cy.get('.btn-success').click()
        return landing
    }

}