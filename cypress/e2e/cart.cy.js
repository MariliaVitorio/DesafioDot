describe('Carrinho', () => {
    it('Adicionar produto ao carrinho', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type('Alexa');

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', 'Alexa')

        cy.contains('span', 'Echo com Alexa (Última geração)')
            .should('be.visible').click()

        cy.get('#productTitle').should('exist');

        cy.get('#add-to-cart-button').should('be.visible').click({ force: true })

        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    });

    it.only('Remover produto do carrinho', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type('Alexa');

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', 'Alexa')

        cy.contains('span', 'Echo com Alexa (Última geração)')
            .should('be.visible').click()

        cy.get('#productTitle').should('exist');

        cy.get('#add-to-cart-button').should('be.visible').click({ force: true })

        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

        cy.get('.sc-action-delete-active > .a-declarative > .a-color-link').click()

        cy.contains(' foi removido de Carrinho de compras.').should('exist')
    });
});