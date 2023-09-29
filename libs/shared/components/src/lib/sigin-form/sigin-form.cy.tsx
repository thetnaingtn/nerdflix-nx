import * as React from 'react';
import SignIn from './sigin-form';

describe(SignIn.name, () => {
  it('should display title', () => {
    cy.mount(<SignIn />);
    cy.contains('Sign In').should('be.visible');
  });

  it('should display form and all inputs', () => {
    cy.mount(<SignIn />);
    cy.get('form').children().should('have.length', 3);
    cy.get('input[placeholder="Email address"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains('Sign In').should('be.visible');
    cy.contains(
      "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
    ).should('be.visible');
  });
});
