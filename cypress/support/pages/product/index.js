import products from '../products'

export default new class product {
    submitReview() {
        cy.get('[id="button-review"]').click()
        cy.get('.alert-success').should('contain', 'Thank you for your review.')
        return this
    }
    reviewText(text) {
        cy.get('[id="review"]').type(text)
        return this
    }
    reviewerEmail(fakeEmail) {
        cy.get('[id="email"]').type(fakeEmail)
        return this
    }
    reviewerName(fakeNome) {
        cy.get('[id="name"]').type(fakeNome)
        return this
    }
    containWriteYourReview() {
        cy.get('.category-tab.shop-details-tab').should('contain', 'Write Your Review')
        return this
    }
    increaseQuantity(value) {
        cy.get('[id="quantity"]').clear().type(value.toString())
        return this
    }

    addToCart() {
        cy.get('[type="button"].cart').click()
        return products
    }

    checkProductDetail() {
        cy.get('.product-details').should('be.visible')
        checkProductName()
        checkCategoryVisibility()
        checkPriceVisibility()
        checkAvailabilityVisibility()
        checkConditionVisibility()
        checkBrandVisibility()
        return this
    }
}

function checkProductName() {
    cy.get('.product-details h2').should('be.visible')
    return this
}
function checkAvailabilityVisibility() {
    cy.get('.product-details b').contains('Availability:').should('be.visible')
    return this
}

function checkCategoryVisibility() {
    cy.get('.product-details p').contains('Category:').should('be.visible')
    return this
}

function checkPriceVisibility() {
    cy.get('.product-details span').contains('Rs.').should('be.visible')
    return this
}

function checkConditionVisibility() {
    cy.get('.product-details b').contains('Condition:').should('be.visible')
    return this
}

function checkBrandVisibility() {
    cy.get('.product-details').should('be.visible')
    return this
}

