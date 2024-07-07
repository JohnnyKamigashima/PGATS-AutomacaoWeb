import { Selector } from "../pages/class/Selector";

export const xget = (selectorType: Selector, cssSelector: string, xpathSelector: string) => {
    if (selectorType === Selector.css) {
        return cy.get(cssSelector);
    } else if (selectorType === Selector.xpath) {
        return cy.xpath(xpathSelector);
    }
}