import User from '../support/class/User.js'
import landing from '../support/pages/landing'
import sign from '../support/pages/sign'
import newAccount from '../support/pages/newAccount'
import logged from '../support/pages/logged'
import cart from '../support/pages/cart'
import products from '../support/pages/products'
describe('Tests on the landing page', () => {
    let user

    beforeEach('Visits the landing page', () => {
        user = new User()
        landing.visit()
            .waitUntilCarrousselIsLoaded()
    })

    it('T1 - Should sign up and delete account', () => {
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .checkLoggedInUser(user.fakeNome)
            .deleteAccount()
    })

    it('T2 - Should login and delete account', () => {
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .clickLogout()
            .clickSigninLogIn()
            .login(user)
            .checkLoggedInUser(user.fakeNome)
            .deleteAccount(logged)
    })

    it('T3 - Should not login with incorrect email and password', () => {
        landing.clickSigninLogIn()
            .login(user)
        sign.checkErrorMessage('Your email or password is incorrect!')
    })

    it('T4 - Should logout user', () => {
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .clickLogout()
            .clickSigninLogIn()
            .login(user)
            .checkLoggedInUser(user.fakeNome)
            .clickLogout()
        sign.shouldContainText('Login to your account')

    })

    it('T5 - Should not register user with existing email', () => {
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .clickLogout()
            .clickSigninLogIn()
            .shouldContainText('New User Signup!')
            .fillSignUpName(user.fakeNome)
            .fillEmail(user.fakeEmail)
            .clickSignUp()
            .checkErrorMessage('Email Address already exist!')
    })

    it('T6 - Should submit contact form', () => {
        landing.clickContactUs()
            .checkHeaderText('Get In Touch')
            .fillName(user.fakeNome)
            .fillEmail(user.fakeEmail)
            .fillSubject('Test')
            .fillMessage('Test')
            .uploadFile('cypress/fixtures/example.json')
            .clickSubmit()
            .checkSuccessMessage('Success! Your details have been submitted successfully.')
            .clickOk()
            .waitUntilCarrousselIsLoaded()
    })

    it.skip('T7 - Should navigate to test cases page', () => {
        landing.clickTestCases()
    })

    it('T8 - Should navigate to test cases page', () => {
        landing.clickProducts()
            .checkHeaderText('All Products')
            .checkProductsList()
            .clickViewProduct(1)
            .checkProductDetail()

    })

    it('T9 - Should search for a product', () => {
        landing.clickProducts()
            .checkHeaderText('All Products')
            .searchProduct('Women')
            .checkSearchedProducts('Women')
    })

    it('T10 - Should subscribe to newsletter', () => {
        landing.subscribeToNewsletter(user.fakeEmail)
    })

    it.skip('T11 - Should verify subscription in cart page', () => {

        landing.clickCart()
        landing.subscribeToNewsletter(user.fakeEmail)
    })

    it.skip('T12 - Should add products to cart', () => {
        const pricingList = []
        const pricing1 = {
            description: 'Blue Top',
            price: 500,
            quantiy: 1,
            totalPrice: 500
        }
        const pricing2 = {
            description: 'Men Tshirt',
            price: 400,
            quantiy: 1,
            totalPrice: 400
        }
        pricingList.push(pricing1)
        pricingList.push(pricing2)

        landing.clickProducts()
            .searchProduct(pricingList[0].description)
            .hoverOverProduct(1)
            .hoverAddToCart(1)
            .continueModal()
            .searchProduct(pricingList[1].description)
            .hoverOverProduct(1)
            .hoverAddToCart(2)
            .viewCart()
            .productsInCart(2)
            .productsPricesInCart(pricingList)
    })

    it.skip('T13 - Should verify product quantity in cart', () => {
        const pricingList = []
        const pricing1 = {
            description: 'Blue Top',
            price: 500,
            quantiy: 4,
            totalPrice: 2000
        }
        pricingList.push(pricing1)

        products.clickViewProduct(1)
            .increaseQuantity(4)
            .addToCart()
            .viewCart()
            .productsPricesInCart(pricingList)

    })

    it.skip('T14 - Should place order and register while checkout', () => {

        landing.clickProducts()
            .clickViewProduct(1)
            .addToCart()
            .viewCart()
            .proceedToCheckout()
        cart.clickSigninLogIn()
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .checkLoggedInUser(user.fakeNome)
        landing.clickCart()
            .proceedToCheckout()
            .reviewOrder(user)
            .postComment('Test')
            .placeOrder()
            .enterPaymentDetails(user)
            .payAndConfirmOrder()
            .checkSuccessMessage('Order Placed!')
        logged.deleteAccount(logged)
    })
    it('T15 - Should place order', () => {
        landing.clickSigninLogIn()
            .newUserSignup(user)
            .createNewAccount(user)
            .checkSuccessMessage('Account Created!')
            .checkLoggedInUser(user.fakeNome)
        landing.clickProducts()
            .clickViewProduct(1)
            .addToCart()
        landing.clickCart()
            .proceedToCheckout()
            .reviewOrder(user)
            .postComment('Test')
            .placeOrder()
            .enterPaymentDetails(user)
            .payAndConfirmOrder()
            .checkSuccessMessage('Order Placed!')
            .checkOrderPlacedMessage('Congratulations! Your order has been confirmed!')
        logged.deleteAccount(logged)
    })

    it.skip('T16 - Place order: Login before Checkout', () => {
        landing.clickSigninLogIn()
        newAccount.createNewAccount(user)
            .checkSuccessMessage('Account Created!')
        landing.clickProducts()
            .clickViewProduct(1)
            .addToCart()
            .viewCart()
            .proceedToCheckout()
            .reviewOrder(user)
            .postComment('Teste')
            .placeOrder()
            .enterPaymentDetails(user)
            .payAndConfirmOrder()
            .checkSuccessMessage('Order Placed!')
        logged.deleteAccount(logged)
    })

    it.skip('T17 - Remove Products From Cart', () => {
        products.clickViewProduct(1)
            .addToCart()
            .viewCart()
            .removeItem(1)
            .isEmpty()
    })

    it.skip('T18 - View Category Products', () => {
        landing.containCatagoryPanel()
            .selectCategory('Women')
            .selectSubCategory('Dress')
            .checkProductsListText('Women - Dress Products')
            .selectCategory('Men')
            .selectSubCategory('Tshirts')
            .checkProductsListText('Men - Tshirts Products')
    })

    it.skip('T19 - View & Cart Brand Products', () => {
        landing.clickProducts()
        landing.containBrandsPanel()
            .selectBrand('Polo')
            .checkProductsListText('Brand - Polo Products')
            .selectBrand('Babyhug')
            .checkProductsListText('Brand - Babyhug Products')
    })

    it.skip('T20 - Search Products and Verify Cart After Login', () => {
        landing.clickSigninLogIn()
        newAccount.createNewAccount(user).checkSuccessMessage('Account Created!')
            .clickLogout()
            .clickProducts()
            .searchProduct('Polo')
            .checkSearchedProducts('Polo')
            .addAllToCart()
            .productsInCart(1)
        landing.clickSigninLogIn()
        newAccount.login(user)
        landing.clickCart()
            .productsInCart(1)

    })

    it.skip('T21 - Add review on product', () => {
        landing.clickProducts()
            .clickViewProduct(1)
            .containWriteYourReview()
            .reviewerName(user.fakeNome)
            .reviewerEmail(user.fakeEmail)
            .reviewText('Teste')
            .submitReview()

    })

    it.skip('T22 - Add to cart from Recommended items', () => {
        landing.recommendedItemsVisible()
            .addRecommendedToCart(1)
            .clickModalViewCart()
            .productsInCart(1)
    })

    it.skip('T23 - Verify address details in checkout page', () => {
        landing.clickSigninLogIn()
        newAccount.createNewAccount(user).checkSuccessMessage('Account Created!')
            .checkLoggedInUser(user.fakeNome)
        landing.clickProducts()
            .clickViewProduct(1)
            .addToCart()
            .viewCart()
            .proceedToCheckout()
        landing.clickCart()
            .proceedToCheckout()
            .reviewOrder(user)
        logged.deleteAccount(logged)
    })

    it.skip('T24 - Download Invoice after purchase order', () => {

        landing.clickProducts()
            .clickViewProduct(1)
            .addToCart()
            .viewCart()
            .proceedToCheckout()
        cart.clickSigninLogIn()
            .createNewAccount(user)
            .checkLoggedInUser(user.fakeNome)
        landing.clickCart()
            .proceedToCheckout()
            .reviewOrder(user)
            .postComment('Test')
            .placeOrder()
            .enterPaymentDetails(user)
            .payAndConfirmOrder()
            .checkSuccessMessage('Order Placed!')
            .clickDownloadInvoice()
        logged.deleteAccount(logged)
    })

    it.skip('T25 - Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        landing.scrollToFooter()
            .clickScrollUpButton()
            .carousselShouldHaveText('Full-Fledged practice website for Automation Engineers')
    })

    it.skip('T26 - Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        landing.scrollToFooter()
            .scrollUpToCaroussel()
            .carousselShouldHaveText('Full-Fledged practice website for Automation Engineers')
    })
})

