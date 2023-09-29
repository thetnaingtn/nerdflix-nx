import * as React from 'react';
import Collections from './collections';
import collections from '../../../cypress/fixtures/collections.json';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  // Add `unoptimized` to any use of `next/image` in our tests
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

describe(Collections.name, () => {
  it('should render collection component', () => {
    cy.mount(
      <Collections searchedResults={[]} collections={collections as any} />
    );

    cy.contains('Trending').should('be.visible');
    cy.get('img').should('have.length', 4);

    cy.get("[data-testid='item']").eq(0).click();
    cy.get('h2').should('have.text', 'No One Will Save You');

    cy.get("button[data-testid='dialog-close'").click();
    cy.contains('No One Will Save You').should('not.be.visible');
    cy.get("[data-testid='item'").should('be.visible');
  });
});
