export default new class testCases {
    checkTestCasesHeader(text) {
        cy.get('h2 b').should('contain', text)
        return this
    }
}