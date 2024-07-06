import { fakeNome, fakeEmail, fakePassword, fakeDay, fakeMonth, fakeYear, fakeCountry, firstName, lastName, companyName, address, city, state, mobileNumber, zipCode } from '../support/utility/fakers'
import { LandingPage } from '../support/pages/LandingPage'
import { SignPage } from '../support/pages/SignPage'
import { NewAccountPage } from '../support/pages/NewAccountPage'
import { AccountCreatedPage } from '../support/pages/AccountCreatedPage'

describe('Tests on the landing page', () => {
    const landingPage = new LandingPage()
    const signPage = new SignPage()
    const newAccountPage = new NewAccountPage()
    const accountCreatedPage = new AccountCreatedPage()

    before('Visits the landing page', () => {
        landingPage.visit()
        landingPage.waitUntilCarrousselIsLoaded()
    })

    it('Should sign in', () => {
        landingPage.clickSigninLogIn()
        signPage.shouldContainText('New User Signup!')
        signPage.fillSignUpName(fakeNome)
        signPage.fillEmail(fakeEmail)
        signPage.clickSignUp()
        newAccountPage.checkHeaderText('Enter Account Information')
        newAccountPage.selectRadioGender('Mr')
        newAccountPage.fillPassword(fakePassword)
        newAccountPage.selectBirthDay(fakeDay)
        newAccountPage.selectBirthMonth(fakeMonth)
        newAccountPage.selectBirthYear(fakeYear)
        newAccountPage.checkNewsletter()
        newAccountPage.checkSpecialOffers()
        newAccountPage.fillFirstName(firstName)
        newAccountPage.fillLastName(lastName)
        newAccountPage.fillCompanyName(companyName)
        newAccountPage.fillAddress(address)
        newAccountPage.selectCountry('Australia')
        newAccountPage.fillState(state)
        newAccountPage.fillCity(city)
        newAccountPage.fillZipcode(zipCode)
        newAccountPage.fillMobileNumber(mobileNumber)
        newAccountPage.clickCreateAccountButton()
        accountCreatedPage.checkHeaderText('Account Created!')
        accountCreatedPage.checkUrl()
        accountCreatedPage.clickContinueButton()
    }
    )
})