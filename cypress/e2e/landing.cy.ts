import { fakeNome, fakeEmail } from './../support/utility/fakers';
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
        checkoutPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Order Placed!', selectorType)
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
        checkoutPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Order Placed!', selectorType)
        paymentPage.checkOrderPlacedMessage('Congratulations! Your order has been confirmed!', selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T16 - Place order: Login before Checkout', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        landingPage.clickProducts(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.addToCart(1, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        checkoutPage.reviewOrder(user, selectorType)
        checkoutPage.postComment('Teste', selectorType)
        checkoutPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Order Placed!', selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T17 - Remove Products From Cart', () => {
        productsPage.clickViewProduct(1, selectorType)
        productPage.addToCart(1, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.removeItem(1, selectorType)
        cartPage.isEmpty(selectorType)
    })

    it('T18 - View Category Products', () => {
        landingPage.containCatagoryPanel(selectorType)
        landingPage.selectCategory('Women', selectorType)
        landingPage.selectSubCategory('Dress', selectorType)
        productsPage.checkProductsListText('Women - Dress Products', selectorType)
        landingPage.selectCategory('Men', selectorType)
        landingPage.selectSubCategory('Tshirts', selectorType)
        productsPage.checkProductsListText('Men - Tshirts Products', selectorType)
    })

    it('T19 - View & Cart Brand Products', () => {
        landingPage.clickProducts(selectorType)
        landingPage.containBrandsPanel(selectorType)
        landingPage.selectBrand('Polo', selectorType)
        productsPage.checkProductsListText('Brand - Polo Products', selectorType)
        landingPage.selectBrand('Babyhug', selectorType)
        productsPage.checkProductsListText('Brand - Babyhug Products', selectorType)
    })

    it('T20 - Search Products and Verify Cart After Login', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.clickLogout(selectorType)
        landingPage.clickProducts(selectorType)
        productsPage.searchProduct('Polo', selectorType)
        productsPage.checkSearchedProducts('Polo', selectorType)
        productsPage.addAllToCart(selectorType)
        cartPage.productsInCart(1, selectorType)
        newAccountPage.login(user, pages)
        landingPage.clickCart(selectorType)
        cartPage.productsInCart(1, selectorType)

    })

    it('T21 - Add review on product', () => {
        landingPage.clickProducts(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.containWriteYourReview(selectorType)
        productPage.reviewerName(user.fakeNome, selectorType)
        productPage.reviewerEmail(user.fakeEmail, selectorType)
        productPage.reviewText('Teste', selectorType)
        productPage.submitReview(selectorType)

    })

    it('T22 - Add to cart from Recommended items', () => {
        landingPage.recommendedItemsVisible(selectorType)
        landingPage.addRecommendedToCart(1, selectorType)
        landingPage.clickModalViewCart(selectorType)
        cartPage.productsInCart(1, selectorType)
    })

    it('T23 - Verify address details in checkout page', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        loggedPage.checkLoggedInUser(user.fakeNome, selectorType)
        landingPage.clickProducts(selectorType)
        productsPage.clickViewProduct(1, selectorType)
        productPage.addToCart(1, selectorType)
        productsPage.viewCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        landingPage.clickCart(selectorType)
        cartPage.proceedToCheckout(selectorType)
        checkoutPage.reviewOrder(user, selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T24 - Download Invoice after purchase order', () => {
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
        checkoutPage.placeOrder(selectorType)
        paymentPage.enterPaymentDetails(user, selectorType)
        paymentPage.payAndConfirmOrder(selectorType)
        paymentPage.checkSuccessMessage('Order Placed!', selectorType)
        paymentPage.clickDownloadInvoice(selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T25 - Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        landingPage.scrollToFooter(selectorType)
        landingPage.clickScrollUpButton(selectorType)
        landingPage.carousselShouldHaveText('Full-Fledged practice website for Automation Engineers', selectorType)
    })

    it('T26 - Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        landingPage.scrollToFooter(selectorType)
        landingPage.scrollUpToCaroussel(selectorType)
        landingPage.carousselShouldHaveText('Full-Fledged practice website for Automation Engineers', selectorType)
    })
})

