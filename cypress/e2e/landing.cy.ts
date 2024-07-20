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
            .waitUntilCarrousselIsLoaded(selectorType)
    })

    it('T1 - Should sign up and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType);
        loggedPage.deleteAccount(loggedPage, selectorType)
    }
    )

    it('T2 - Should login and delete account', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .clickLogout(selectorType);
        newAccountPage.login(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType)
            .deleteAccount(loggedPage, selectorType)
    })

    it('T3 - Should not login with incorrect email and password', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.login(user, pages)
        signPage.checkErrorMessage('Your email or password is incorrect!', selectorType)

    })

    it('T4 - Should logout user', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .clickLogout(selectorType);
        newAccountPage.login(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType)
            .clickLogout(selectorType);
        signPage.shouldContainText('Login to your account', selectorType)

    })

    it('T5 - Should not register user with existing email', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .clickLogout(selectorType)
            .clickSigninLogIn(selectorType)
            .shouldContainText('New User Signup!', selectorType)
            .fillSignUpName(user.fakeNome, selectorType)
            .fillEmail(user.fakeEmail, selectorType)
            .clickSignUp(selectorType)
            .checkErrorMessage('Email Address already exist!', selectorType)
    })

    it('T6 - Should submit contact form', () => {
        landingPage.clickContactUs(selectorType)
            .checkHeaderText('Get In Touch', selectorType)
            .fillName(user.fakeNome, selectorType)
            .fillEmail(user.fakeEmail, selectorType)
            .fillSubject('Test', selectorType)
            .fillMessage('Test', selectorType)
            .uploadFile('cypress/fixtures/example.json', selectorType)
            .clickSubmit(selectorType)
            .checkSuccessMessage('Success! Your details have been submitted successfully.', selectorType)
            .clickOk(selectorType)
            .waitUntilCarrousselIsLoaded(selectorType)
    })

    it('T7 - Should navigate to test cases page', () => {
        landingPage.clickTestCases(selectorType)
    })

    it('T8 - Should navigate to test cases page', () => {
        landingPage.clickProducts(selectorType)
            .checkHeaderText('All Products', selectorType)
            .checkProductsList(selectorType)
            .clickViewProduct(1, selectorType)
            .checkProductDetail(selectorType)

    })

    it('T9 - Should search for a product', () => {
        landingPage.clickProducts(selectorType)
            .checkHeaderText('All Products', selectorType)
            .searchProduct('Women', selectorType)
            .checkSearchedProducts('Women', selectorType)
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
            .searchProduct(pricingList[0].description, selectorType)
            .hoverOverProduct(1, selectorType)
            .hoverAddToCart(1, selectorType)
            .continueModal(selectorType)
            .searchProduct(pricingList[1].description, selectorType)
            .hoverOverProduct(1, selectorType)
            .hoverAddToCart(2, selectorType)
            .viewCart(selectorType)
            .productsInCart(2, selectorType)
            .productsPricesInCart(pricingList, selectorType)
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
            .increaseQuantity(4, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .productsPricesInCart(pricingList, selectorType)

    })

    it('T14 - Should place order and register while checkout', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .proceedToCheckout(selectorType);
        cartPage.clickSigninLogIn(selectorType);
        newAccountPage.createNewAccount(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType);
        landingPage.clickCart(selectorType)
            .proceedToCheckout(selectorType)
            .reviewOrder(user, selectorType)
            .postComment('Test', selectorType)
            .placeOrder(selectorType)
            .enterPaymentDetails(user, selectorType)
            .payAndConfirmOrder(selectorType)
            .checkSuccessMessage('Order Placed!', selectorType);
        loggedPage.deleteAccount(loggedPage, selectorType)
    })
    it('T15 - Should place order', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType);
        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .addToCart(selectorType);
        landingPage.clickCart(selectorType)
            .proceedToCheckout(selectorType)
            .reviewOrder(user, selectorType)
            .postComment('Test', selectorType)
            .placeOrder(selectorType)
            .enterPaymentDetails(user, selectorType)
            .payAndConfirmOrder(selectorType)
            .checkSuccessMessage('Order Placed!', selectorType)
            .checkOrderPlacedMessage('Congratulations! Your order has been confirmed!', selectorType);
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T16 - Place order: Login before Checkout', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .proceedToCheckout(selectorType)
            .reviewOrder(user, selectorType)
            .postComment('Teste', selectorType)
            .placeOrder(selectorType)
            .enterPaymentDetails(user, selectorType)
            .payAndConfirmOrder(selectorType)
            .checkSuccessMessage('Order Placed!', selectorType);
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T17 - Remove Products From Cart', () => {
        productsPage.clickViewProduct(1, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .removeItem(1, selectorType)
            .isEmpty(selectorType)
    })

    it('T18 - View Category Products', () => {
        landingPage.containCatagoryPanel(selectorType)
            .selectCategory('Women', selectorType)
            .selectSubCategory('Dress', selectorType)
            .checkProductsListText('Women - Dress Products', selectorType)
            .selectCategory('Men', selectorType)
            .selectSubCategory('Tshirts', selectorType)
            .checkProductsListText('Men - Tshirts Products', selectorType)
    })

    it('T19 - View & Cart Brand Products', () => {
        landingPage.clickProducts(selectorType)
        landingPage.containBrandsPanel(selectorType)
            .selectBrand('Polo', selectorType)
            .checkProductsListText('Brand - Polo Products', selectorType)
            .selectBrand('Babyhug', selectorType)
            .checkProductsListText('Brand - Babyhug Products', selectorType)
    })

    it('T20 - Search Products and Verify Cart After Login', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .clickLogout(selectorType)
            .clickProducts(selectorType)
            .searchProduct('Polo', selectorType)
            .checkSearchedProducts('Polo', selectorType)
            .addAllToCart(selectorType)
            .productsInCart(1, selectorType);
        newAccountPage.login(user, pages)
        landingPage.clickCart(selectorType)
            .productsInCart(1, selectorType)

    })

    it('T21 - Add review on product', () => {
        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .containWriteYourReview(selectorType)
            .reviewerName(user.fakeNome, selectorType)
            .reviewerEmail(user.fakeEmail, selectorType)
            .reviewText('Teste', selectorType)
            .submitReview(selectorType)

    })

    it('T22 - Add to cart from Recommended items', () => {
        landingPage.recommendedItemsVisible(selectorType)
            .addRecommendedToCart(1, selectorType)
            .clickModalViewCart(selectorType)
            .productsInCart(1, selectorType)
    })

    it('T23 - Verify address details in checkout page', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        newAccountPage.createNewAccount(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType);
        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .proceedToCheckout(selectorType)
        landingPage.clickCart(selectorType)
            .proceedToCheckout(selectorType)
            .reviewOrder(user, selectorType)
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T24 - Download Invoice after purchase order', () => {
        const pages = { landingPage, signPage, accountCreatedPage, selector: selectorType }

        landingPage.clickProducts(selectorType)
            .clickViewProduct(1, selectorType)
            .addToCart(selectorType)
            .viewCart(selectorType)
            .proceedToCheckout(selectorType)
        cartPage.clickSigninLogIn(selectorType)
            .createNewAccount(user, pages)
            .checkLoggedInUser(user.fakeNome, selectorType);
        landingPage.clickCart(selectorType)
            .proceedToCheckout(selectorType)
            .reviewOrder(user, selectorType)
            .postComment('Test', selectorType)
            .placeOrder(selectorType)
            .enterPaymentDetails(user, selectorType)
            .payAndConfirmOrder(selectorType)
            .checkSuccessMessage('Order Placed!', selectorType)
            .clickDownloadInvoice(selectorType);
        loggedPage.deleteAccount(loggedPage, selectorType)
    })

    it('T25 - Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        landingPage.scrollToFooter(selectorType)
            .clickScrollUpButton(selectorType)
            .carousselShouldHaveText('Full-Fledged practice website for Automation Engineers', selectorType)
    })

    it('T26 - Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        landingPage.scrollToFooter(selectorType)
            .scrollUpToCaroussel(selectorType)
            .carousselShouldHaveText('Full-Fledged practice website for Automation Engineers', selectorType)
    })
})

