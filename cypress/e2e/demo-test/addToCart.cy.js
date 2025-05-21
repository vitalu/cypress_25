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
    it('select a product', () => {
        const productName = 'MacBook Pro';
        addToCartPage.enterSearchText('Macbook');
        addToCartPage.clickSearchButton();
        addToCartPage.getProductList().each((el, index) => {
            if (el.text().includes(productName)) {
                cy.wrap(el).find(addToCartPage.locators.addToCartButton).click();
                addToCartPage.getSuccessAlert().should('contain', `Success: You have added ${productName} to your shopping cart!`);
            }
        })
    })
});