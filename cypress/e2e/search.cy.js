describe('Busca na Amazon', () => {
    it('Realiza uma busca válida', () => {
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

   });
