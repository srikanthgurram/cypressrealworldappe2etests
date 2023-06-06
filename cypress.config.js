const { defineConfig } = require("cypress");
// load the environment variables from the local .env file
require('dotenv').config()

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "embeddedScreenshots": true,
    "charts": true,
    "reportPageTitle": "Cypress Inline Report",
    "inlineAssets": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {}

      config.env.username = process.env.USER_NAME
      config.env.password = process.env.PASSWORD
      return config
    },
    specPattern: "cypress/tests/**/*.spec.js",
    baseUrl: 'http://localhost:3000'
    
  },
  projectId: "74b28c",
  
});
