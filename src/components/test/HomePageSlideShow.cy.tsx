import React from 'react';
import HomePageSlideShow from '../HomePageSlideShow';

describe('HomePageSlideShow Component', () => {
    beforeEach(() => {
        // Mount the component before each test
        cy.mount(<HomePageSlideShow/>);
    });

    it('renders correctly', () => {
        // Verify the component renders without errors
        cy.get('.bg-white').should('exist');
    });

    it('displays the main text content', () => {
        // Check if the main text content is displayed
        cy.contains('Compassionate Dental Care').should('be.visible');
        cy.contains('For the Entire Family').should('be.visible');
    });

    it('displays the learn more button', () => {
        // Verify the learn more button exists and has the correct text
        cy.get('a.button2').should('exist');
        cy.get('a.button2').should('have.attr', 'href', '/meet-the-team');
        cy.contains('LEARN MORE').should('be.visible');
    });
});
