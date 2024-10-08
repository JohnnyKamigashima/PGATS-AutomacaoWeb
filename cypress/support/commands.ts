import { Selector } from "./pages/class/Selector";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    namespace Cypress {
        interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
            xget(selectorType: Selector, cssSelector: string, xpathSelector: string): Chainable<JQuery<HTMLElement>>;
            realHover(options?: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

Cypress.Commands.add('xget', (selectorType: Selector, cssSelector: string, xpathSelector: string) => {
    // your code here
    if (selectorType === Selector.css) {
        return cy.get(cssSelector)
    } else {
        return cy.xpath(xpathSelector)
    }
});