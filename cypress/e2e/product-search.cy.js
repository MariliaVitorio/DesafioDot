describe('Busca na Amazon', () => {  
  let dados;

  before(() => {
    cy.fixture('busca').then((massa) => {
      dados = massa;
    });
  });

  it('Realizar uma busca válida', () => {
    cy.start()

    cy.get('#twotabsearchtextbox').click().type(dados.pesquisaBlusa.termo);
    cy.get('#nav-search-submit-button').click();

    cy.get('span.a-color-state.a-text-bold')
      .should('contain.text', dados.pesquisaBlusa.termo);

    cy.contains('span', dados.pesquisaBlusa.produto)
      .should('be.visible')
      .click();

    cy.get('#productTitle').should('exist');
  });

  it('Realizar uma busca inválida', () => {
    cy.start()

    cy.get('#twotabsearchtextbox').click().type(dados.pesquisaInvalida);
    cy.get('#nav-search-submit-button').click();

    cy.get('span.a-size-medium.a-color-base.a-text-normal')
      .should('contain.text', 'Nenhum resultado para');
  });
});
