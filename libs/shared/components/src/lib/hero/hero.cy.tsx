import * as React from 'react';
import * as NextImage from 'next/image';

import Hero from './hero';
import collection from '../../../cypress/fixtures/collections.json';
import HomeBg from '@nerdflix/shared/assets/images/home-bg.jpg';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  // Add `unoptimized` to any use of `next/image` in our tests
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

describe(Hero.name, () => {
  it('should render show type correctly', () => {
    const show = collection[0].shows[0];
    cy.mount(<Hero type="show" show={show as any} />);

    cy.contains('No One Will Save You').should('be.visible');
    cy.contains(
      "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home."
    ).should('be.visible');

    cy.get('button').eq(0).should('have.text', 'Play');
    cy.get('button').eq(1).should('have.text', 'More Info');
  });

  it('should render static type correctly', () => {
    cy.mount(
      <Hero type="static" src={HomeBg}>
        <span className="text-white">Hello</span>
      </Hero>
    );

    cy.contains('Hello').should('be.visible');
  });
});
