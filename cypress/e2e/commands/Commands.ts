Cypress.Commands.add('login', (username: string, password: string) => {
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="submitLogin"]').click();
});
