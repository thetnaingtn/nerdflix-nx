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
  it('renders', () => {
    cy.mount(
      <Collections searchedResults={[]} collections={collections as any} />
    );

    cy.contains('Trending').should('be.visible');
    cy.get('img').should('have.length', 4);
  });
});
