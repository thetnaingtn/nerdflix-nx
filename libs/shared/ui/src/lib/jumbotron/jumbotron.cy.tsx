import * as React from 'react';

import jumboData from '@nerdflix/shared/assets/fixtures/jumbo.json';
import Jumbotron, { Container, Title, SubTitle, Pane } from './jumbotron';

describe(Jumbotron.name, () => {
  it('render jumbotron correctly ', () => {
    cy.mount(
      <Container>
        {jumboData.map((jumbo) => {
          return (
            <Jumbotron
              key={jumbo.id}
              direction={
                `flex-${jumbo.direction}` as 'flex-row' | 'flex-row-reverse'
              }
            >
              <Pane>
                <Title>{jumbo.title}</Title>
                <SubTitle>{jumbo.subTitle}</SubTitle>
              </Pane>
              <Pane>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={jumbo.image} alt={jumbo.alt} className="max-w-full" />
              </Pane>
            </Jumbotron>
          );
        })}
      </Container>
    );

    cy.contains('Enjoy on your TV.').should('be.visible');
    cy.contains(
      'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
    ).should('be.visible');

    cy.contains('Download your programmes to watch on the go.').should(
      'be.visible'
    );
    cy.contains('Save your data and watch all your favourites offline.').should(
      'be.visible'
    );

    cy.contains('Watch everywhere.').should('be.visible');
    cy.contains(
      'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.'
    ).should('be.visible');
  });
});
