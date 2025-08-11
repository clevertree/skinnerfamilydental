// cypress/support/e2e.ts
import 'cypress-axe';

// You can add more global setup here if needed

Cypress.on('uncaught:exception', (err) => {
    // Ignore React/Next.js hydration errors
    if (err.message &&
        (err.message.includes('hydration') || err.message.includes('did not match'))
    ) {
        return false;
    }
    // Let all other errors fail the test
    return true;
});
