import testData from '../../fixtures/registration.json';
import { faker } from '@faker-js/faker';
describe('Registration Test', () => {
    let email;
    let password;
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
        
    });

    it('should register a new user', () => {
        email = faker.internet.email();
        password = faker.internet.password();
        cy.get("div[id='account-login'] a:nth-child(2)").click();
        cy.url().should('include', 'account/register');
        cy.get('#input-firstname').type(faker.person.firstName());
        cy.get('#input-lastname').type(faker.person.lastName());
        cy.get('#input-email').type(email);
        cy.get('#input-telephone').type(faker.phone.number());
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);
        cy.get('#input-newsletter-no').check().and('be.checked');
        cy.get("label[for='input-agree']").click();
        cy.get('input[type="submit"]').click();
        cy.url().should('include', 'account/success');
        cy.get(".page-title.my-3").should('contain', 'Your Account Has Been Created');
    });
    it('should login with the registered user', () => {
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('input[type="submit"]').click();
        cy.url().should('include', 'account/account');
        cy.get("div[class*='card']:nth-child(1) h2").should('contain', 'My Account');
    });
    it('should logout the user', () => {
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('input[type="submit"]').click();
        cy.url().should('include', 'account/account');
        cy.contains('a.icon-left.both.nav-link.dropdown-toggle', 'My account').trigger('mouseover');
        cy.contains("span[class='title']", ' Logout').click();
        cy.url().should('include', 'account/logout');
        cy.get(".page-title.my-3").should('contain', 'Account Logout');
    });
});
