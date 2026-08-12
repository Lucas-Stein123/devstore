/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

// -- This is a parent command --
Cypress.Commands.add("searchByQuery", (query: string) => {
  cy.visit("/")

  cy.wait(500)

  cy.get("input[name=q]").type(`${query}{enter}`)
})
