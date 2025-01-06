import React from 'react';
import { mount, MountOptions, MountReturn } from '@cypress/react18';

Cypress.Commands.add(
  'mount',
  (component: React.ReactElement, options?: MountOptions): Cypress.Chainable<MountReturn> => {
    return mount(component, options);
  }
);

Cypress.Commands.add('getDataCy', (selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-test="${selector}"]`);
});
