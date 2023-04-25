# cypress-template
This is a Cypress-based end-to-end testing framework template.

##System requirements:
For information on system requirements, see: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

##Installation
To install all dependencies, run:
```bash
  cd cypress-template
  npm install
``` 
or
```bash
  cd cypress-template
  yarn install
```
##Usage
To run an end-to-end test suite, use one of the following commands:
```bash
# for Dev environment
npm run test:dev

# for QA environment
npm run test:qa

# for Staging environment
npm run test:staging
```
To run an accessibility test suite, use one of the following commands:
```bash
# for Dev environment
npm run cy:accessibility:dev

# for QA environment
npm run test:accessibility:qa

# for Staging environment
npm run test:accessibility:staging
```

To run tests for debugging, you need to specify an environment you would like to run your tests
In this case you should replace {ENV} with the name of your config file. If your config file is
qa.json, you need to put qa instead of {ENV}
example: `npx cypress open --env configFile=qa`
```bash
npx cypress open --env configFile={ENV}
```
or
```bash
yarn run cypress open --env configFile={ENV}
```
