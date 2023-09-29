describe('Sign In Flow', () => {
  beforeEach(() => cy.visit('/'));

  it('shoud successfully sign in and navigate to  series page', () => {
    cy.get('input[placeholder="Email address"]').type('thet@mail.com');
    cy.get('input[placeholder="Password"]').type('asdf1234');
    cy.get('button').click();
    cy.get('a').contains('Series');
    cy.get('a').contains('Films');
  });
});
