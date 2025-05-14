const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  },
});
