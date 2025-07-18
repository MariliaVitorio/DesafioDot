
# 🧪 Testes Automatizados com Cypress - Projeto DesafioDot

Este repositório contém o projeto de automação de testes da aplicação **[Amazon Brasil](https://www.amazon.com.br/)** utilizando o **[Cypress](https://www.cypress.io/)**, desenvolvido para o **DesafioDot**.

---

## 📁 Estrutura do Projeto

A estrutura segue o padrão do Cypress 10+:

```
DesafioDot/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml       # Pipeline CI com GitHub Actions
├── cypress/
│   ├── e2e/                        # Testes automatizados
│   │   ├── cart.cy.js              # Testes relacionados ao carrinho de compras
│   │   └── search.cy.js            # Testes de busca de produtos
│   ├── support/
│   │   ├── commands.js             # Comandos customizados do Cypress
│   │   └── e2e.js                  # Arquivo de suporte global
├── cypress.config.js              # Configurações do Cypress
├── package.json                   # Dependências e scripts
└── README.md                      # Este arquivo de documentação
```

---

## 🚀 Como Executar os Testes

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute os testes

#### Via interface gráfica:

```bash
npx cypress open
```

#### Via linha de comando (headless):

```bash
npx cypress run
```

---

## 🔎 Testes Implementados

- `search.cy.js`: cobre o fluxo de busca de produtos.
- `cart.cy.js`: cobre a adição e visualização de produtos no carrinho.

---

## ⚙️ Integração Contínua

Este projeto está configurado com GitHub Actions para rodar os testes automaticamente via CI. O workflow está localizado em:

```
.github/workflows/cypress-tests.yml
```

---

## ✅ Requisitos

- Node.js v18+
- npm v9+
- Cypress instalado
- Acesso à internet (os testes acessam o site real)

---

## 📃 Licença

Este projeto é de uso educacional e demonstração de habilidades práticas com automação de testes usando Cypress.

---

👩‍💻 Desenvolvido por Marília Vitório – *Desafio Técnico DotGroup*
