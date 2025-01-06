import { HTTP_STATUS } from '../constants/Constants';

describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  function validateLoginRequest(statusCode: number) {
    cy.wait('@loginRequest').its('response.statusCode').should('eq', statusCode);
  }

  it('should navigate to the dashboard after successful login', () => {
    cy.intercept('POST', '/api/auth/login').as('loginRequest');
    cy.login('user', 'user');

    validateLoginRequest(HTTP_STATUS.SUCCESS);

    cy.url().should('include', '/postAuth');
  });

  it('should stay on the login page and display an error message for invalid credentials', () => {
    cy.intercept('POST', '/api/auth/login').as('loginRequest');
    cy.login('user', 'badPassword');

    validateLoginRequest(HTTP_STATUS.UNAUTHORIZED);

    cy.url().should('include', '/login');
    cy.contains('Password or identifier incorrect!').should('be.visible');
  });

  it('should navigate to the dashboard when logging in as a random user', () => {
    cy.intercept('POST', '/api/auth/random-login').as('loginRequest');
    cy.get('[data-cy="randomLogin"]').click();

    validateLoginRequest(HTTP_STATUS.SUCCESS);

    cy.url().should('include', '/postAuth');
  });
});
