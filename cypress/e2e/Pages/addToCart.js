export class AddToCartPage{
    locators = {
        searchBox: "input[placeholder='Search']",
        searchButton: ".btn.btn-default.btn-lg",
        productList: ".product-thumb"
    }
    enterSearchText(text){
        cy.get(this.locators.searchBox).type(text);
    }
    clickSearchButton(){
        cy.get(this.locators.searchButton).click();
    }
    getProductList(){
        return cy.get(this.locators.productList);
    }
}