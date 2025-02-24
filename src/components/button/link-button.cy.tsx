import React from 'react'
import { LinkButton } from './link-button';

import '@/styles/globals/globals.scss';
import styles from './link-button.module.scss';

describe('LinkButton, variant=primary', () => {
  it('renders with the link and label', () => {
    cy.mount(<LinkButton label={'Foobar'} href={'https://www.foobar.com/'} />);

    cy.get('a').should('have.class', styles.primary);

    cy.get('a').should('have.text', 'Foobar');
    cy.get('a').invoke('attr', 'href').should('eq', 'https://www.foobar.com/');
  });
})

describe('LinkButton, variant=secondary', () => {
  it('renders with the link and label', () => {
    cy.mount(<LinkButton label={'Foobar'} href={'https://www.foobar.com/'} variant={'secondary'} />);

    cy.get('a').should('have.class', styles.secondary);

    cy.get('a').should('have.text', 'Foobar');
    cy.get('a').invoke('attr', 'href').should('eq', 'https://www.foobar.com/');
  });
})