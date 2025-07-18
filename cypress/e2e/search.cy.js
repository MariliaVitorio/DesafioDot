describe('Busca na Amazon', () => {
    it.only('Realizar uma busca válida', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type('blusa crochê inverno');

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', 'blusa crochê inverno');

        cy.contains('span', 'Moletom feminino térmico básico de crochê para mulheres')
            .should('be.visible').click();

        cy.get('#productTitle').should('exist');
    });

    it('Realizar uma busca inválida', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type('XPT123ProdutoInexistente');

        cy.get('#nav-search-submit-button').click()

        cy.get('span.a-size-medium.a-color-base.a-text-normal')
            .should('contain.text', 'Nenhum resultado para');  
    });
});
