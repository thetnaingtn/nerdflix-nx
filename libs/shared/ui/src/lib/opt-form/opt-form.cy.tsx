import OptForm from './opt-form';

describe('OptForm', () => {
  it('should render OptForm correctly', () => {
    cy.mount(
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    );

    cy.get('input[placeholder="Email address"]').should('be.visible');
    cy.get('button').should('have.text', 'Try it now');
    cy.contains(
      'Ready to watch? Enter your email to create or restart your membership.'
    ).should('be.visible');
  });
});
