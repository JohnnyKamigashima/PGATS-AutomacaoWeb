import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ekfjcc',
  e2e: {
    baseUrl: 'https://automationexercise.com',
    env: {
      logLevel: "ASSERT",
      hideXhr: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});

