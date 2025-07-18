describe('Carrinho de compras Amazon', () => {
  let data;

  before(() => {
    cy.fixture('busca').then((d) => {
      data = d;
    });
  });

  it('Adicionar produto ao carrinho', () => {
    cy.start();
    cy.searchProductAndClick(data.pesquisaAlexa.termo, data.pesquisaAlexa.produto);
    cy.addToCart();
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
  });

  it('Remover produto do carrinho', () => {
    cy.start();
    cy.searchProductAndClick(data.pesquisaAlexa.termo, data.pesquisaAlexa.produto);
    cy.addToCart();
    cy.removeFromCart();
  });
});
