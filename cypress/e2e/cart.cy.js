describe('Carrinho', () => {
  let dados;

  before(() => {
    cy.fixture('busca').then((massa) => {
      dados = massa;
    });
  });
    it('Adicionar produto ao carrinho', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type(dados.pesquisaAlexa.termo);

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', dados.pesquisaAlexa.termo)

        cy.contains('span', dados.pesquisaAlexa.produto)
            .should('be.visible').click()

        cy.get('#productTitle').should('exist');

        cy.get('#add-to-cart-button').should('be.visible').click({ force: true })

        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    });

    it('Remover produto do carrinho', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type(dados.pesquisaAlexa.termo);

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', dados.pesquisaAlexa.termo)

        cy.contains('span', dados.pesquisaAlexa.produto)
            .should('be.visible').click()

        cy.get('#productTitle').should('exist');

        cy.get('#add-to-cart-button').should('be.visible').click({ force: true })

        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

        cy.get('.sc-action-delete-active > .a-declarative > .a-color-link').click()

        cy.contains(' foi removido de Carrinho de compras.').should('exist')
    });

});