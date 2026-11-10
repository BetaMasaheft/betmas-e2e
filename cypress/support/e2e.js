// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './env'
import './read-only'
import { register as registerCypressGrep } from '@cypress/grep'

registerCypressGrep()

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, _runnable) => {
  // we expect a 3rd party library error with message 'trimmed is undefined'
  // and don't want to fail the test so we return false
  // see #4
  if (err.message.includes('trimmed is undefined')) {
    return false
  }
})

Cypress.on('uncaught:exception', (err, _runnable) => {
  // we expect a 3rd party library error with message 'data is null'
  // and don't want to fail the test so we return false
  // see #4
  if (err.message.includes('data is null')) {
    return false
  }
})
Cypress.on('uncaught:exception', (err, _runnable) => {
  // The cookiebar has a CORS issue.
  if (err.message.includes('Script error.')) {
    return false
  }
})


Cypress.on('uncaught:exception', (err, _runnable) => {
  // we expect a error with message '$ is not defined'
  // see #25 and test plan 02_01
  if (err.message.includes('$ is not defined')) {
    return false
  }
})

Cypress.on('uncaught:exception', (err, _runnable) => {
  // we expect a error with message 'Bootstrap requires jQuery'
   // see #25 and test plan 02_01
  if (err.message.includes('Bootstrap requires jQuery')) {
    return false
  }
})

// nginx bot protection (BetMas docker/nginx.conf) challenges clients without
// the ds_verification_token cookie and 403s some requests without a trusted
// Referer. Browsers satisfy this on their own; cy.request()/cy.visit() don't,
// so send both, the way a real visitor would.
beforeEach(() => {
  cy.setCookie('ds_verification_token', 'proof_passed')
})

const withReferer = (options) => {
  const baseUrl = Cypress.config('baseUrl')
  if (!baseUrl) return options
  const headers = options.headers || {}
  const hasReferer = Object.keys(headers).some((k) => k.toLowerCase() === 'referer')
  return hasReferer ? options : { ...options, headers: { Referer: baseUrl, ...headers } }
}

Cypress.Commands.overwrite('request', (originalFn, ...args) => {
  // forms: (url) | (method, url) | (method, url, body) | (options)
  if (args.length === 1 && typeof args[0] === 'object') {
    return originalFn(withReferer(args[0]))
  }
  if (args.length === 1) return originalFn(withReferer({ url: args[0] }))
  const [method, url, body] = args
  return originalFn(withReferer({ method, url, body }))
})

Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
  if (typeof url === 'object') return originalFn(withReferer(url))
  return originalFn(url, withReferer(options))
})
