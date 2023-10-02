describe('films', () => {
  it('should display welcome message', () => {
    cy.login('thet@mail.com', 'asdf1234');
    cy.visit('/');

    cy.contains('Trending').should('be.visible');
    cy.contains('Top Rated').should('be.visible');
  });
});
