// cypress/e2e/busca.cy.js
describe('Busca de produtos na Amazon', () => {
  let data;

  before(() => {
    cy.fixture('busca').then((d) => {
      data = d;
    });
  });

  it('Realizar uma busca válida', () => {
    cy.start();
    cy.searchProductAndClick(data.pesquisaBlusa.termo, data.pesquisaBlusa.produto);
  });

  it('Realizar uma busca inválida', () => {
    cy.start();
    cy.get('#twotabsearchtextbox').click().type(data.pesquisaInvalida);
    cy.get('#nav-search-submit-button').click();

    cy.get('span.a-size-medium.a-color-base.a-text-normal')
      .should('contain.text', 'Nenhum resultado para');
  });
});
