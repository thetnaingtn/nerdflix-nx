import * as React from 'react';
import collection from '../../../cypress/fixtures/collections.json';

import ShowModal from './show-modal';

describe(ShowModal.name, () => {
  it('should render show modal correctly when toggle true', () => {
    const toggleHandler = cy.stub().as('handler');
    const show = collection[0].shows[0];

    cy.mount(
      <ShowModal
        show={show as any}
        toggle={true}
        toggleHandler={toggleHandler}
      />
    );

    cy.contains('No One Will Save You').should('be.visible');
    cy.contains(
      "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home."
    ).should('be.visible');

    cy.get("button[data-testid='dialog-close']").click();
    cy.get('@handler').should('be.calledWith', false);
  });
});
