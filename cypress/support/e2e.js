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

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {

  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  // see #1
  if (err.message.includes('Map container not found')) {
    return false
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a error with message 'form is not defined'
  // on the advanced search submit button
  // see #14
  if (err.message.includes('form is not defined')) {
    return false
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'trimmed is undefined'
  // and don't want to fail the test so we return false
  // see #4
  if (err.message.includes('trimmed is undefined')) {
    return false
  }
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'data is null'
  // and don't want to fail the test so we return false
  // see #4
  if (err.message.includes('data is null')) {
    return false
  }
})
