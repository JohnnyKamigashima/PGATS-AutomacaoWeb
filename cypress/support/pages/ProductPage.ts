import { Selector } from "./class/Selector";
import { ProductsPage } from "./ProductsPage";

export class ProductPage {
    submitReview(selectorType: Selector) {
        cy.xget(selectorType, '[id="button-review"]', '').click();
        cy.xget(selectorType, '.alert-success', '').should('contain', 'Thank you for your review.');
        return this
    }
    reviewText(text: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="review"]', '').type(text);
        return this
    }
    reviewerEmail(fakeEmail: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="email"]', '').type(fakeEmail);
        return this
    }
    reviewerName(fakeNome: string, selectorType: Selector) {
        cy.xget(selectorType, '[id="name"]', '').type(fakeNome);
        return this
    }
    containWriteYourReview(selectorType: Selector) {
        cy.xget(selectorType, '.category-tab.shop-details-tab', '').should('contain', 'Write Your Review');
        return this
    }
    increaseQuantity(value: number, selectorType: Selector) {
        cy.xget(selectorType, '[id="quantity"]', '').clear().type(value.toString());;
        return this
    }

    addToCart(selectorType: Selector) {
        cy.xget(selectorType, '[type="button"].cart', '').click();;
        return new ProductsPage()
    }

    checkProductDetail(selectorType: Selector) {
        cy.xget(selectorType, '.product-details', '').should('be.visible')
        checkProductName(selectorType)
        checkCategoryVisibility(selectorType)
        checkPriceVisibility(selectorType)
        checkAvailabilityVisibility(selectorType)
        checkConditionVisibility(selectorType)
        checkBrandVisibility(selectorType);

        return this
    }

}

function checkProductName(selectorType: Selector) {
    cy.xget(selectorType, '.product-details h2', '').should('be.visible');

    return this;
}
function checkAvailabilityVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details b', '').contains('Availability:').should('be.visible');

    return this;
}

function checkCategoryVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details p', '').contains('Category:').should('be.visible');

    return this;
}

function checkPriceVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details span', '').contains('Rs.').should('be.visible');

    return this;
}

function checkConditionVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details b', '').contains('Condition:').should('be.visible');

    return this;
}

function checkBrandVisibility(selectorType: Selector) {
    cy.xget(selectorType, '.product-details', '').should('be.visible');

    return this;
}

