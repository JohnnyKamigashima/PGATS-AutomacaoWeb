import accountCreated from "../accountCreated"

export default new class newAccount {

    createNewAccount(user) {
        this.checkHeaderText('Enter Account Information')
        this.selectRadioGender(user.gender)
        this.fillPassword(user.fakePassword)
        this.selectBirthDay(user.fakeDay)
        this.selectBirthMonth(user.fakeMonth)
        this.selectBirthYear(user.fakeYear)
        this.checkNewsletter()
        this.checkSpecialOffers()
        this.fillFirstName(user.firstName)
        this.fillLastName(user.lastName)
        this.fillCompanyName(user.companyName)
        this.fillAddress(user.address)
        this.selectCountry(user.country)
        this.fillState(user.state)
        this.fillCity(user.city)
        this.fillZipcode(user.zipCode)
        this.fillMobileNumber(user.mobileNumber)
        this.clickCreateAccountButton()
        return accountCreated

    }
    clickCreateAccountButton() {
        cy.get('[data-qa="create-account"]').click()
        return this
    }
    fillMobileNumber(mobileNumber) {
        cy.get('[name="mobile_number"]').type(mobileNumber)
        return this
    }
    fillZipcode(zipCode) {
        cy.get('[data-qa="zipcode"]').type(zipCode)
        return this
    }
    fillCity(city) {
        cy.get('[data-qa="city"]').type(city)
        return this
    }
    fillState(state) {
        cy.get('[data-qa="state"]').type(state)
        return this
    }
    selectCountry(pais) {
        cy.get('[data-qa="country"]').select(pais)
        return this
    }
    fillAddress(address) {
        cy.get('[data-qa="address"]').type(address)
        return this
    }
    fillCompanyName(companyName) {
        cy.get('[id="company"]').type(companyName)
        return this
    }
    fillLastName(lastName) {
        cy.get('[data-qa="last_name"]').type(lastName)
        return this
    }
    fillFirstName(fakeFirstName) {
        cy.get('[data-qa="first_name"]').type(fakeFirstName)
        return this
    }
    checkSpecialOffers() {
        cy.get('[type="checkbox"][id="optin"]').check()

        return this
    }
    checkNewsletter() {
        cy.get('[type="checkbox"][id="newsletter"]').check()

        return this
    }
    selectBirthYear(fakeYear) {
        cy.get('[data-qa="years"]').select(fakeYear)
        return this
    }
    selectBirthMonth(fakeMonth) {
        cy.get('[data-qa="months"]').select(fakeMonth)
        return this
    }
    fillPassword(fakePassword) {
        cy.get('[data-qa="password"]').type(fakePassword)
        return this
    }
    fillEmail(fakeEmail) {
        cy.get('[data-qa="email"]').type(fakeEmail)

        return this
    }
    fillName(fakeNome) {
        cy.get('[data-qa="name"]').type(fakeNome)

        return this
    }
    selectRadioGender(name) {
        cy.get(`.radio-inline [value=${name}]`).click()

        return this
    }
    checkHeaderText(text) {
        cy.get('section b').contains(text)
        return this
    }
    selectBirthDay(day) {
        cy.get('[data-qa="days"]').select(day)

        return this
    }

}