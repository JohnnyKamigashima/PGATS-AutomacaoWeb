import { Selector } from "./class/Selector";

export class ProductPage {
    submitReview(selectorType: Selector) {
        cy.xget(selectorType, '[id="button-review"]', '').click();
        cy.xget(selectorType, '.alert-success', '').should('contain', 'Thank you for your review.')
    }
    reviewText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="review"]', '').type(text)
    }
    reviewerEmail(fakeEmail: any, selectorType: Selector) {
        cy.xget(selectorType, '[id="email"]', '').type(fakeEmail)
    }
    reviewerName(fakeNome: any, selectorType: Selector) {
        cy.xget(selectorType, '[id="name"]', '').type(fakeNome)
    }
    containWriteYourReview(selectorType: Selector) {
        cy.xget(selectorType, '.category-tab.shop-details-tab', '').should('contain', 'Write Your Review')
    }
    increaseQuantity(value: number, selectorType: Selector) {
        cy.xget(selectorType, '[id="quantity"]', '').clear().type(value.toString());
    }

    addToCart(itemNo: any, selectorType: Selector) {
        cy.xget(selectorType, '[type="button"].cart', '').click();
    }

    checkProductDetail(selectorType: Selector) {
        cy.xget(selectorType, '.product-details', '').should('be.visible')
        checkProductName(selectorType)
        checkCategoryVisibility(selectorType)
        checkPriceVisibility(selectorType)
        checkAvailabilityVisibility(selectorType)
        checkConditionVisibility(selectorType)
        checkBrandVisibility(selectorType)
    }

}

function checkProductName(selectorType: Selector) {
    cy.xget(selectorType, '.product-details h2', '').should('be.visible')
}
function checkAvailabilityVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details b', '').contains('Availability:').should('be.visible')
}

function checkCategoryVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details p', '').contains('Category:').should('be.visible')
}

function checkPriceVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details span', '').contains('Rs.').should('be.visible')
}

function checkConditionVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details b', '').contains('Condition:').should('be.visible')
}

function checkBrandVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details', '').should('be.visible')
}

