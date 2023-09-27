import * as React from 'react';
import faqsData from '@nerdflix/shared/assets/fixtures/faq.json';
import Accordion, { Frame, Title, Item, Header, Body } from './accordion';

describe(Accordion.name, () => {
  it('should render Accordion and can toggle question', () => {
    cy.mount(
      <Accordion>
        <Title>Frequently Asked Questions</Title>
        <Frame>
          {faqsData.map((item) => (
            <Item key={item.id}>
              <Header>{item.header}</Header>
              <Body>{item.body}</Body>
            </Item>
          ))}
        </Frame>
      </Accordion>
    );

    cy.contains('What is Netflix?').as('qOne');

    cy.get('@qOne').click();
    cy.contains(
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
    ).should('be.visible');

    cy.get('@qOne').click();
    cy.contains(
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!"
    ).should('not.be.visible');
  });
});
