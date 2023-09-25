import * as React from 'react';
import Collections from './collections';

describe(Collections.name, () => {
  it('renders', () => {
    cy.mount(<Collections collections={[]} searchedResults={[]} />);
  });
});
