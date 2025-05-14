import { AddToCartPage } from "../Pages/addToCart";
const addToCartPage = new AddToCartPage();
describe('Add a product to the cart', () => {

    beforeEach(() => {
        cy.login()
    });
    it('search a product', () => {
        addToCartPage.enterSearchText('Macbook');
        addToCartPage.clickSearchButton();
        cy.url().should('include', 'product/search&search=Macbook');
        addToCartPage.getProductList().should('have.length.greaterThan', 0);
    });

});