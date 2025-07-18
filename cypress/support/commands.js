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

Cypress.Commands.add('start', () => {
    cy.viewport(1920,1080 )
    cy.visit('https://www.amazon.com.br/')
    cy.url().should('include', 'amazon.com.br');
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Cypress.Commands.add('start', () => {
  cy.viewport(1920, 1080);
  cy.visit('/');
  cy.url().should('include', 'amazon.com.br');
});

Cypress.Commands.add('login', () => {
  cy.fixture('login').then((login) => {
    cy.get('#nav-link-accountList > .nav-a').click();
    cy.get('#ap_email_login').type(login.email);
    cy.get('#continue').click();
    cy.get('#ap_password').type(login.senha);
    cy.get('#signInSubmit').click();
  });
});

Cypress.Commands.add('searchProductAndClick', (term, productName) => {
  cy.get('#twotabsearchtextbox').click().type(term);
  cy.get('#nav-search-submit-button').click();
  cy.get('span.a-color-state.a-text-bold').should('contain.text', term);
  cy.contains('span', productName).should('be.visible').click();
  cy.get('#productTitle').should('exist');
});

Cypress.Commands.add('addToCart', () => {
  cy.get('#add-to-cart-button').should('be.visible').click({ force: true });
  cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
});

Cypress.Commands.add('removeFromCart', () => {
  cy.get('.sc-action-delete-active > .a-declarative > .a-color-link').click();

  cy.get('body').then(($body) => {
    if ($body.text().includes('foi removido de Carrinho de compras.')) {
      cy.contains('foi removido de Carrinho de compras.').should('exist');
    } else if ($body.text().includes('Seu carrinho da Amazon está vazio')) {
      cy.contains('Seu carrinho da Amazon está vazio').should('exist');
    }
  });
});


