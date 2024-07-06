export class NewAccountPage {
    clickCreateAccountButton() {
        cy.get('[data-qa="create-account"]').click();
    }
    fillMobileNumber(mobileNumber: string) {
        cy.get('[name="mobile_number"]').type(mobileNumber);
    }
    fillZipcode(zipCode: string) {
        cy.get('[data-qa="zipcode"]').type(zipCode);
    }
    fillCity(city: string) {
        cy.get('[data-qa="city"]').type(city);
    }
    fillState(state: string) {
        cy.get('[data-qa="state"]').type(state);
    }
    selectCountry(pais: string) {
        cy.get('[data-qa="country"]').select(pais)
    }
    fillAddress(address: string) {
        cy.get('[data-qa="address"]').type(address);
    }
    fillCompanyName(companyName: string) {
        cy.get('[id="company"]').type(companyName);
    }
    fillLastName(lastName: string) {
        cy.get('[data-qa="last_name"]').type(lastName);
    }
    fillFirstName(fakeFirstName: any) {
        cy.get('[data-qa="first_name"]').type(fakeFirstName);
    }
    checkSpecialOffers() {
        cy.get('[type="checkbox"][id="optin"]').check()
    }
    checkNewsletter() {
        cy.get('[type="checkbox"][name="newsletter"]').check()
    }
    selectBirthYear(fakeYear: string) {
        cy.get('[data-qa="years"]').select(fakeYear)
    }
    selectBirthMonth(fakeMonth: string) {
        cy.get('[data-qa="months"]').select(fakeMonth)
    }
    fillPassword(fakePassword: string) {
        cy.get('[data-qa="password"]').type(fakePassword);
    }
    fillEmail(fakeEmail: string) {
        cy.get('[data-qa="email"]').type(fakeEmail);
    }
    fillName(fakeNome: string) {
        cy.get('[data-qa="name"]').type(fakeNome);
    }
    selectRadioGender(name: string) {
        cy.get(`.radio-inline [value=${name}]`).click()
    }
    checkHeaderText(text: string) {
        cy.get('section b').contains(text)
    }

    selectBirthDay(day: string) {
        cy.get('[data-qa="days"]').select(day)
    }

}