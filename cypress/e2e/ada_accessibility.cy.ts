/// <reference types="cypress" />
import 'cypress-axe';

const pages = [
    '/',
    '/the-office',
    '/service',
    '/contact',
    '/meet-the-team',
    // Add more routes as needed
];

describe('ADA Accessibility (a11y) checks on all pages', () => {
    pages.forEach((page) => {
        it(`should have no detectable a11y violations on ${page}`, () => {
            cy.visit(page);
            cy.injectAxe();
            cy.checkA11y();
            //     cy.checkA11y(undefined, undefined, (violations) => {
            //         if (violations.length) {
            //             const details = violations.map((v) => {
            //                 const nodes = v.nodes.map((node) => `    Target: ${node.target}\n    Failure Summary: ${node.failureSummary}`).join('\n');
            //                 return [
            //                     `ID: ${v.id}`,
            //                     `Description: ${v.description}`,
            //                     `Help: ${v.help}`,
            //                     `Help URL: ${v.helpUrl}`,
            //                     `Impact: ${v.impact}`,
            //                     `Nodes:\n${nodes}`
            //                 ].join('\n');
            //             }).join('\n\n')
            //             cy.log(`Accessibility violations found on ${page}:`, details);
            //             // throw new Error(`Accessibility violations found:\n${details}`);
            //         }
            //         expect(violations, 'No accessibility violations').to.have.length(0);
            //     });
        });
    });
});
