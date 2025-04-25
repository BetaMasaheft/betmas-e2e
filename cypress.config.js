const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://ml-s-betmas.ad.uni-hamburg.de",
    responseTimeout: 100000,
    trashAssetsBeforeRuns: true,
  },
});
