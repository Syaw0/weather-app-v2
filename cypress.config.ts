import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "./cypress/e2e/*spec.{ts,js,tsx,jsx}",
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    viewportWidth:1000,
    viewportHeight:700,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
