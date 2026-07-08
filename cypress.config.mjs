import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents (on, config) {
      return config
    },
    baseUrl: 'https://betamasaheft.eu',
    responseTimeout: 100000,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads'
  }
})
