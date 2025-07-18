const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video && results.stats.failures === 0) {
          fs.unlinkSync(results.video);
        }
      });
    },
    baseUrl: 'https://www.amazon.com.br',
    video: true,
    screenshotOnRunFailure: true,
  },
});




