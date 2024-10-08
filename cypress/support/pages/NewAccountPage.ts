import { LoggedPage } from './LoggedPage';
import { User } from "./class/User";
import { Selector } from "./class/Selector";

export class NewAccountPage {

    login(user: User, pages: { landingPage: import("./LandingPage").LandingPage; signPage: import("./SignPage").SignPage; accountCreatedPage: import("./AccountCreatedPage").AccountCreatedPage; selector: Selector; }) {
        pages.landingPage.clickSigninLogIn(pages.selector)
        pages.signPage.shouldContainText('Login to your account', pages.selector)
        pages.signPage.loginEmail(user.fakeEmail, pages.selector)
        pages.signPage.loginPassword(user.fakePassword, pages.selector)
        pages.signPage.clickLogin(pages.selector);
        return new LoggedPage()
    }

    createNewAccount(user: User,
        pages:
            {
                landingPage: import("./LandingPage").LandingPage;
                signPage: import("./SignPage").SignPage;
                accountCreatedPage: import("./AccountCreatedPage").AccountCreatedPage;
                selector: Selector
            }
    ) {
        pages.landingPage.clickSigninLogIn(pages.selector)
        pages.signPage.shouldContainText('New User Signup!', pages.selector)
        pages.signPage.fillSignUpName(user.fakeNome, pages.selector)
        pages.signPage.fillEmail(user.fakeEmail, pages.selector)
        pages.signPage.clickSignUp(pages.selector)
        this.checkHeaderText('Enter Account Information', pages.selector)
        this.selectRadioGender(user.gender, pages.selector)
        this.fillPassword(user.fakePassword, pages.selector)
        this.selectBirthDay(user.fakeDay, pages.selector)
        this.selectBirthMonth(user.fakeMonth, pages.selector)
        this.selectBirthYear(user.fakeYear, pages.selector)
        this.checkNewsletter(pages.selector)
        this.checkSpecialOffers(pages.selector)
        this.fillFirstName(user.firstName, pages.selector)
        this.fillLastName(user.lastName, pages.selector)
        this.fillCompanyName(user.companyName, pages.selector)
        this.fillAddress(user.address, pages.selector)
        this.selectCountry(user.country, pages.selector)
        this.fillState(user.state, pages.selector)
        this.fillCity(user.city, pages.selector)
        this.fillZipcode(user.zipCode, pages.selector)
        this.fillMobileNumber(user.mobileNumber, pages.selector)
        this.clickCreateAccountButton(pages.selector)
        pages.accountCreatedPage.checkHeaderText('Account Created!', pages.selector)
        pages.accountCreatedPage.checkUrl()
        pages.accountCreatedPage.clickContinueButton(pages.selector);
        return new LoggedPage()
    }
    clickCreateAccountButton(selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="create-account"]', '//*[@data-qa="create-account"]').click();
        ;
        return this
    }
    fillMobileNumber(mobileNumber: string, selectorType: Selector) {
        cy.xget(selectorType, '[name="mobile_number"]', '//*[@name="mobile_number"]').type(mobileNumber);
        ;
        return this
    }
    fillZipcode(zipCode: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="zipcode"]', '//*[@data-qa="zipcode"]').type(zipCode);
        ;
        return this
    }
    fillCity(city: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="city"]', '//*[@data-qa="city"]').type(city);
        ;
        return this
    }
    fillState(state: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="state"]', '//*[@data-qa="state"]').type(state);
        ;
        return this
    }
    selectCountry(pais: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="country"]', '//*[@data-qa="country"]').select(pais)
            ;
        return this
    }
    fillAddress(address: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="address"]', '//*[@data-qa="address"]').type(address);
        ;
        return this
    }
    fillCompanyName(companyName: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="company"]', '//*[@id="company"]').type(companyName);
        ;
        return this
    }
    fillLastName(lastName: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="last_name"]', '//*[@data-qa="last_name"]').type(lastName);
        ;
        return this
    }
    fillFirstName(fakeFirstName: any, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="first_name"]', '//*[@data-qa="first_name"]').type(fakeFirstName);
        ;
        return this
    }
    checkSpecialOffers(selectorType: Selector) {
        cy.xget(selectorType, '[type="checkbox"][id="optin"]', '//*[@type="checkbox" and @id="optin"]').check()
            ;
        return this
    }
    checkNewsletter(selectorType: Selector) {
        cy.xget(selectorType, '[type="checkbox"][id="newsletter"]', '//*[@type="checkbox" and @id="newsletter"]').check()
            ;
        return this
    }
    selectBirthYear(fakeYear: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="years"]', '//*[@data-qa="years"]').select(fakeYear)
            ;
        return this
    }
    selectBirthMonth(fakeMonth: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="months"]', '//*[@data-qa="months"]').select(fakeMonth)
            ;
        return this
    }
    fillPassword(fakePassword: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="password"]', '//*[@data-qa="password"]').type(fakePassword);
        ;
        return this
    }
    fillEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="email"]', '//*[@data-qa="email"]').type(fakeEmail);
        ;
        return this
    }
    fillName(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="name"]', '//*[@data-qa="name"]').type(fakeNome);
        ;
        return this
    }
    selectRadioGender(name: string, selectorType: Selector) {
        cy.xget(selectorType, `.radio-inline [value=${name}]`, `//*[@value="${name}"]`).click()
            ;
        return this
    }
    checkHeaderText(text: string, selectorType: Selector) {
        cy.xget(selectorType, 'section b', '//section//b').contains(text);
        return this
    }
    selectBirthDay(day: string, selectorType: Selector) {
        cy.xget(selectorType, '[data-qa="days"]', '//*[@data-qa="days"]').select(day)
            ;
        return this
    }

}