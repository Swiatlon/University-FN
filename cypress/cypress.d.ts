import { ReactElement } from 'react';
import { MountOptions, MountReturn } from '@cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;

      mount(component: ReactElement, options?: MountOptions): Chainable<MountReturn>;

      getDataCy(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
