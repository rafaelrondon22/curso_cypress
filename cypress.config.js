const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7mfa23',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-front.vercel.app/",
    defaultCommandTimeout: 7000,
    watchForFileChanges: false,
    
  },
});
