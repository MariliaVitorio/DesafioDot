describe('Busca na Amazon', () => {
    it('Realiza uma busca válida', () => {
        cy.start()

        cy.get('#twotabsearchtextbox').click()
            .type('blusa crochê inverno');

        cy.get('#nav-search-submit-button').click()
        //Papito:
        // cy.contains('label', 'Feminino')
        // .find('input')
        // .check()
        // .should('be.checked')

        //GPT:
        // cy.get('#p_n_feature_twenty-eight_browse-bin\/121476056011 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')

        cy.get('span.a-color-state.a-text-bold')
            .should('contain.text', 'blusa crochê inverno');

        cy.contains('span', 'Moletom feminino térmico básico de crochê para mulheres')
            .should('be.visible').click();

        cy.get('#productTitle').should('exist');
        //  cy.contains('span', 'Moletom feminino térmico básico de crochê').click();
    });

    // it('Realiza uma busca inválida', () => {
    //     cy.start()

    //     cy.get('#twotabsearchtextbox').click()
    //         .type('produtoinexistente1');

    //     cy.get('#nav-search-submit-button').click();
    //     cy.contains('span.a-size-medium.a-color-base.a-text-normal', 'produtoinexistente1')
    //   .should('be.visible');        
    // });

});

// cy.contains('resultados').should('exist');
// cy.contains('span.menu-text', 'Soluções').click();
// cy.contains('span.menu-text', 'Soluções', { timeout: 5000 }).trigger('mouseover');
// cy.contains('span', 'Desenvolvimento de cursos EaD', { timeout: 5000 }).should('be.visible').click();

//cy.get('span.menu-text').click()