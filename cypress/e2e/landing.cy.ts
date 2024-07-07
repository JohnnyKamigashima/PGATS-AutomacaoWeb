import { fakeNome, fakeEmail, fakePassword, fakeDay, fakeMonth, fakeYear, firstName, lastName, companyName, address, city, state, mobileNumber, zipCode } from '../support/utility/fakers'
import { LandingPage } from "../support/pages/LandingPage"
import { SignPage } from '../support/pages/SignPage'
import { NewAccountPage } from '../support/pages/NewAccountPage'
import { AccountCreatedPage } from '../support/pages/AccountCreatedPage'
import { LoggedPage } from '../support/pages/LoggedPage'
import { User } from '../support/pages/class/User'
import { Selector } from '../support/pages/class/Selector'

describe('Tests on the landing page', () => {
    const landingPage = new LandingPage()
    const signPage = new SignPage()
    const newAccountPage = new NewAccountPage()
    const accountCreatedPage = new AccountCreatedPage()
    const loggedPage = new LoggedPage()
    const user: User = {
        fakeNome: fakeNome,
        fakeEmail: fakeEmail,
        fakePassword: fakePassword,
        fakeDay: fakeDay,
        fakeMonth: fakeMonth,
        fakeYear: fakeYear,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        address: address,
        city: city,
        state: state,
        mobileNumber: mobileNumber,
        zipCode: zipCode,
        country: 'Australia',
        gender: 'Mr'
    }
    const selector: Selector = Selector.css

    before('Visits the landing page', () => {
        landingPage.visit()
        landingPage.waitUntilCarrousselIsLoaded(selector)
    })

    it('T1 - Should sign up and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.checkLoggedInUser(fakeNome, selector)
        loggedPage.deleteAccount(loggedPage, selector)
    }
    )

    it('T2 - Should login and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selector)
        newAccountPage.login(user, pages)
        loggedPage.checkLoggedInUser(fakeNome, selector)
        loggedPage.deleteAccount(loggedPage, selector)
    })

    it('T3 - Should not login with incorrect email and password', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector }

        newAccountPage.login(user, pages)
        newAccountPage.checkErrorMessage('Your email or password is incorrect!', selector)

    })

    it.only('T4 - Should logout user', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selector)
        newAccountPage.login(user, pages)
        loggedPage.checkLoggedInUser(fakeNome, selector)
        loggedPage.clickLogout(selector)
        signPage.shouldContainText('Login to your account', selector)

    })

    //TODO
    // Test Case 5: Register User with existing email
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'New User Signup!' is visible
    // 6. Enter name and already registered email address
    // 7. Click 'Signup' button
    // 8. Verify error 'Email Address already exist!' is visible

    //TODO
    // Test Case 6: Contact Us Form
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Contact Us' button
    // 5. Verify 'GET IN TOUCH' is visible
    // 6. Enter name, email, subject and message
    // 7. Upload file
    // 8. Click 'Submit' button
    // 9. Click OK button
    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    // 11. Click 'Home' button and verify that landed to home page successfully

    //TODO
    // Test Case 7: Verify Test Cases Page
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Test Cases' button
    // 5. Verify user is navigated to test cases page successfully

    //TODO
    // Test Case 8: Verify All Products and product detail page
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    // 6. The products list is visible
    // 7. Click on 'View Product' of first product
    // 8. User is landed to product detail page
    // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

    //TODO
    // Test Case 9: Search Product
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    // 6. Enter product name in search input and click search button
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    // 8. Verify all the products related to search are visible

    //TODO
    // Test Case 10: Verify Subscription in home page
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Scroll down to footer
    // 5. Verify text 'SUBSCRIPTION'
    // 6. Enter email address in input and click arrow button
    // 7. Verify success message 'You have been successfully subscribed!' is visible

    //TODO
    // Test Case 15: Place Order: Register before Checkout
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click 'Signup / Login' button
    // 5. Fill all details in Signup and create account
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    // 7. Verify ' Logged in as username' at top
    // 8. Add products to cart
    // 9. Click 'Cart' button
    // 10. Verify that cart page is displayed
    // 11. Click Proceed To Checkout
    // 12. Verify Address Details and Review Your Order
    // 13. Enter description in comment text area and click 'Place Order'
    // 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    // 15. Click 'Pay and Confirm Order' button
    // 16. Verify success message 'Your order has been placed successfully!'
    // 17. Click 'Delete Account' button
    // 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
})

