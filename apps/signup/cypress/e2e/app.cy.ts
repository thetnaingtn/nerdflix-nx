describe('Sign Up Form', () => {
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

describe('Sign Up Flow', () => {
  beforeEach(() => cy.visit('/'));

  it('shoud successfully signup and navigate to  series page', () => {
    cy.get('input[placeholder="First Name"]').type('Thet Naing Tun');
    cy.get('input[placeholder="Email address"]').type('thetnaing@mail.com');
    cy.get('input[placeholder="Password"]').type('asdf1234');
    cy.get('button').click();

    cy.get('a').contains('Series');
    cy.get('a').contains('Films');
  });
});
