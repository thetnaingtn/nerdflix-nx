import * as React from 'react';
import { Logo } from './nav';

describe(Logo.name, () => {
  it('render nav logo', () => {
    cy.mount(<Logo />);
    cy.get('img').should('be.visible');
  });
});
