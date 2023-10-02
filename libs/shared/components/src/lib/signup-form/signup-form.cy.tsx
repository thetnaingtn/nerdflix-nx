import * as React from 'react';
import SigUp from './signup-form';

describe(SigUp.name, () => {
  it('renders', () => {
    cy.mount(<SigUp />);
  });
});
