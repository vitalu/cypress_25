
export class AddToCartPage{
    locators = {
        searchBox: "input[placeholder='Search']",
        searchButton: ".btn.btn-default.btn-lg",
        productList: ".product-thumb",
        addToCartButton: ".button-group button .fa.fa-shopping-cart",
        successAlert: ".alert.alert-success",
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
    clickAddToCartButton(){
        cy.get(this.locators.addToCartButton).click();
    }
    getSuccessAlert(){
        return cy.get(this.locators.successAlert);
    }
}