import { Selector } from './pages/class/Selector';
// commands.d.ts
declare namespace Cypress {
    interface Chainable<Subject = any> {
        xget(selectorType: Selector, cssSelector: string, xpathSelector: string): Chainable<Subject>;
    }
}