import { defineConfig } from "cypress";
import cypressFailFast from 'cypress-fail-fast/plugin.js';
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  projectId: 'ekfjcc',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://automationexercise.com',
    env: {
      logLevel: "VERBOSE",
      hideXhr: true
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    numTestsKeptInMemory: 2,
    specPattern: ["cypress/e2e/**/*.cy.ts"],
    setupNodeEvents(on, config) {
      cypressFailFast(on, config);
      cypressMochawesomeReporter(on);
      return config;
    },
  }
});

