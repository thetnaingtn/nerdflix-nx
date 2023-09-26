describe('Sing Up Form', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    cy.get('h1').contains('Sign Up');
  });

  it('should display form and all inputs', () => {
    cy.get('form').children().should('have.length', 4);
    cy.get('input[placeholder="First Name"]').should('be.visible');
    cy.get('input[placeholder="Email address"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains('Sign Up');
  });
});
