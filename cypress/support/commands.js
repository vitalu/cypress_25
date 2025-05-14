// ***********************************************
// This example commands.js shows you how to
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

 Cypress.Commands.add('login', () => { 
    cy.visit(Cypress.env('URL'));
        cy.get('#input-email').type('cypressuser@gmail.com');
        cy.get('#input-password').type('Cypress123');
        cy.get('input[type="submit"]').click();
        cy.url().should('include', 'account/account');
        cy.get('h2:nth-child(1)').should('contain', 'My Account');
 })
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