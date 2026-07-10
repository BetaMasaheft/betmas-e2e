import { defineConfig } from 'cypress'
import { plugin as cypressGrepPlugin } from '@cypress/grep/plugin'

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents (on, config) {
      cypressGrepPlugin(config)
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
