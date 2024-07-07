import { Pricing } from './../support/pages/class/Pricing';
import { LandingPage } from "../support/pages/LandingPage"
import { SignPage } from '../support/pages/SignPage'
import { NewAccountPage } from '../support/pages/NewAccountPage'
import { AccountCreatedPage } from '../support/pages/AccountCreatedPage'
import { LoggedPage } from '../support/pages/LoggedPage'
import { User } from '../support/pages/class/User'
import { Selector } from '../support/pages/class/Selector'
import { ContactsPage } from '../support/pages/ContactsPage'
import { ProductsPage } from '../support/pages/ProductsPage'
import { ProductPage } from '../support/pages/ProductPage'
import { CartPage } from '../support/pages/CartPage'
import { CheckoutPage } from '../support/pages/CheckoutPage'
import { PaymentPage } from '../support/pages/PaymentPage'

describe('Tests on the landing page', () => {
    const landingPage = new LandingPage()
    const signPage = new SignPage()
    const newAccountPage = new NewAccountPage()
    const accountCreatedPage = new AccountCreatedPage()
    const contactsPage = new ContactsPage()
    const productsPage = new ProductsPage()
    const loggedPage = new LoggedPage()
    const cartPage = new CartPage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()
    const paymentPage = new PaymentPage()
    const selectorType: Selector = Selector.css
    let user 

    beforeEach('Visits the landing page', () => {
        user = new User()
        landingPage.visit()
        landingPage.waitUntilCarrousselIsLoaded(selectorType)
    })

    it('T1 - Should sign up and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    }
    )

    it('T2 - Should login and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selectorType)
        newAccountPage.login(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T3 - Should not login with incorrect email and password', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.login(user, pages)
        signPage.checkErrorMessage('Your email or password is incorrect!', selectorType)

    })

    it('T4 - Should logout user', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selectorType)
        newAccountPage.login(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        loggedPage.clickLogout(selectorType)
        signPage.shouldContainText('Login to your account', selectorType)

    })

    it('T5 - Should not register user with existing email', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selectorType)
        landingPage.clickSigninLogIn(selectorType)
        signPage.shouldContainText('New User Signup!', selectorType)
        signPage.fillSignUpName(user.fakeNome, selectorType)
        signPage.fillEmail(user.fakeEmail, selectorType)
        signPage.clickSignUp(selectorType)
        signPage.checkErrorMessage('Email Address already exist!', selectorType)
    })

    it('T6 - Should submit contact form', () => {
        landingPage.clickContactUs(selectorType)
        contactsPage.checkHeaderText('Get In Touch', selectorType)
        contactsPage.fillName(user.fakeNome, selectorType)
        contactsPage.fillEmail(user.fakeEmail, selectorType)
        contactsPage.fillSubject('Test', selectorType)
        contactsPage.fillMessage('Test', selectorType)
        contactsPage.uploadFile('cypress/fixtures/example.json', selectorType)
        contactsPage.clickSubmit(selectorType)
        contactsPage.checkSuccessMessage('Success! Your details have been submitted successfully.', selectorType)
        contactsPage.clickOk(selectorType)
        landingPage.waitUntilCarrousselIsLoaded(selectorType)
    })

    it('T7 - Should navigate to test cases page', () => {
        landingPage.clickTestCases(selectorType)
    })

    it('T8 - Should navigate to test cases page', () => {
        landingPage.clickProducts(selectorType)
        productsPage.checkHeaderText('All Products', selectorType)
        productsPage.checkProductsList(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.checkProductDetail(selectorType)

    })

    it('T9 - Should search for a product', () => {
        landingPage.clickProducts(selectorType)
        productsPage.checkHeaderText('All Products', selectorType)
        productsPage.searchProduct('Women', selectorType)
        productsPage.checkSearchedProducts('Women', selectorType)
    })

    it('T10 - Should subscribe to newsletter', () => {
        landingPage.subscribeToNewsletter(user.fakeEmail, selectorType)
    })

    it('T11 - Should verify subscription in cart page', () => {

        landingPage.clickCart(selectorType)
        landingPage.subscribeToNewsletter(user.fakeEmail, selectorType)
    })

    it('T12 - Should add products to cart', () => {
        const pricingList = []
        const pricing1: Pricing = {
            description: 'Blue Top',
            price: 500,
            quantiy: 1,
            totalPrice: 500
        }
        const pricing2: Pricing = {
            description: 'Men Tshirt',
            price: 400,
            quantiy: 1,
            totalPrice: 400
        }
        pricingList.push(pricing1)
        pricingList.push(pricing2)

        landingPage.clickProducts(selectorType)
        productsPage.searchProduct(pricingList[0].description, selectorType)
        productsPage.hoverOverProduct(1, selectorType)
        productsPage.hoverAddToCart(1, selectorType)
        productsPage.continueModal(selectorType)
        productsPage.searchProduct(pricingList[1].description, selectorType)
        productsPage.hoverOverProduct(1, selectorType)
        productsPage.hoverAddToCart(2, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.productsInCart(2, selectorType)
        cartPage.productsPricesInCart(pricingList, selectorType)
    })

    it('T13 - Should verify product quantity in cart', () => {
        const pricingList = []
        const pricing1: Pricing = {
            description: 'Blue Top',
            price: 500,
            quantiy: 4,
            totalPrice: 2000
        }
        pricingList.push(pricing1)

        productsPage.clickViewProduct(1, selectorType)
        productPage.increaseQuantity(4, selectorType)
        productPage.addToCart(1, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.productsPricesInCart(pricingList, selectorType)

    })

    it('T14 - Should place order and register while checkout', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        landingPage.clickProducts(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.addToCart(1, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        cartPage.clickSigninLogIn(selectorType)
        newAccountPage.createNewAccount(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        landingPage.clickCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        checkoutPage.reviewOrder(user, selectorType)
        checkoutPage.postComment('Test', selectorType)
        productPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Your order has been placed successfully!', selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })
    it('T15 - Should place order', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        landingPage.clickProducts(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.addToCart(1, selectorType)
        landingPage.clickCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        checkoutPage.reviewOrder(user, selectorType)
        checkoutPage.postComment('Test', selectorType)
        productPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Your order has been placed successfully!', selectorType)
        paymentPage.checkOrderPlacedMessage('Congratulations! Your order has been confirmed!', selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })
})

