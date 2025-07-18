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

    it('Remover produto do carrinho', () => {
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

        it.only('Concluir uma compra', () => {
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
     //login
     cy.get('#ap_email_login').type('eu.mariliavitorio.qa@gmail.com')
//cy.get('.a-button-input').click()
cy.get('#continue').click()

cy.get('#ap_password').type('Teste@qa54321')
cy.get('#signInSubmit').click()



//radio
//cy.get(':nth-child(30) > [data-layer="Content"]').click()
//cy.get('input[name=ppw-instrumentRowSelection]').click()
// cy.contains('input', 'instrumentId=amzn1.pm.pma.blt-Ym9sZXRv.QTJHOVdYQ1haVjlNRTE&isExpired=false&paymentMethod=Boleto&tfxEligible=false')
// .parent()
// .find('input').check()

// cy.get('#checkout-secondary-continue-payselect').click()
// cy.get('#prime-panel-fallback-button').click()
// cy.get('#placeOrder').click()
    
    });
});