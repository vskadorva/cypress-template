import './commands';
import 'cypress-axe';

beforeEach(() => {
  const testFilter = Cypress.env('SUITE');
  if (!testFilter) return;

  const { title } = Cypress.mocha.getRunner().suite.ctx.currentTest;
  const filtered = `<${testFilter}>`;

  if (!title.includes(filtered)) {
    cy.log(`Skipped test "${title}"`);
    throw new Error(`Test "${title}" filtered out by suite "${filtered}".`);
  }
});

Cypress.on('uncaught:exception', () => false);
