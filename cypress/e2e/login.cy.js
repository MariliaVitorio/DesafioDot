describe('Login bem sucedido', () => {
  it('Adicionar produto ao carrinho', () => {
    cy.fixture('login').then((login) => {
      cy.start()

      cy.get('#nav-link-accountList > .nav-a').click()

      cy.get('#ap_email_login').type(login.email)
      cy.get('#continue').click()

      cy.get('#ap_password').type(login.senha)
      cy.get('#signInSubmit').click()
    })
  })
})
