import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://petstore.swagger.io/v2",
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    env: {
      apiKey: process.env.API_KEY || "enter_your_api_key_value_here",
    },
  },
});
