import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ekfjcc',
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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});

