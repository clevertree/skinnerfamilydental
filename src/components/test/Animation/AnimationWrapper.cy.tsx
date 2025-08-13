import React from 'react';
import AnimationWrapper from '../../Animation/AnimationWrapper';

describe('AnimationWrapper Component', () => {
    it('renders children correctly with default animation', () => {
        // Mount the component with child content
        cy.mount(
            <AnimationWrapper>
                <div data-testid="child-element">Test Content</div>
            </AnimationWrapper>
        );

        // Verify child content is rendered
        cy.get('[data-testid="child-element"]').should('exist');
        cy.contains('Test Content').should('be.visible');
    });

    it('applies zoom-in animation method when specified', () => {
        // Mount with zoom-in animation method
        cy.mount(
            <AnimationWrapper method="zoom-in">
                <div data-testid="animated-element">Zoom Content</div>
            </AnimationWrapper>
        );

        // Verify the appropriate animation class is applied
        cy.get('[data-testid="animated-element"]')
            .parent()
            .then(($el) => $el[0].className)
            .should('match', /zoom-in/);
    });
});
