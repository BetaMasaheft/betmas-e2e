// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
function getAppBase () {
  const baseUrl = Cypress.config('baseUrl').replace(/\/$/, '')
  const base = new URL(baseUrl)
  const appPath = base.pathname.replace(/\/$/, '')
  return { baseUrl, base, appPath }
}

function withAppPath (url, { baseUrl, appPath }) {
  const resolved = url.startsWith('http') ? new URL(url) : new URL(url, baseUrl)
  if (appPath && !resolved.pathname.startsWith(appPath + '/') && resolved.pathname !== appPath) {
    resolved.pathname = appPath + (resolved.pathname.startsWith('/') ? resolved.pathname : '/' + resolved.pathname)
  }
  return resolved.toString()
}

Cypress.Commands.add('requestFollowingAppRedirects', (url, options = {}) => {
  const appBase = getAppBase()

  const requestOnce = (targetUrl) => {
    return cy.request({
      ...options,
      url: withAppPath(targetUrl, appBase),
      followRedirect: false
    }).then((response) => {
      if (response.status >= 300 && response.status < 400 && response.headers.location) {
        // Never fetch third-party hosts from CI: their WAFs block runner
        // traffic and their availability is not our contract. Tests must
        // assert the emitted href/location instead of following it.
        const next = new URL(response.headers.location, appBase.baseUrl)
        if (next.origin !== appBase.base.origin) {
          throw new Error(
            `redirect leaves the app origin (${response.headers.location}); ` +
            'assert the href instead of following it'
          )
        }
        return requestOnce(response.headers.location)
      }
      return response
    })
  }

  return requestOnce(url)
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, passwordEnvVar) => {
  cy.env([passwordEnvVar]).then((env) => {
    cy.removeHover('#logging')
    cy.get('input[name="user"]').type(username)
    cy.get('input[name="password"]').type(env[passwordEnvVar])
    cy.get('#login-nav > .w3-button').click()
  })
})

Cypress.Commands.add('loginCataloguer', (username = 'JinntecCatalogue') => {
  cy.login(username, 'PASSWORD_CATALOGUER')
})

Cypress.Commands.add('loginLexicon', (username = 'JinntecLexicon') => {
  cy.login(username, 'PASSWORD_LEXICOGRAPHER')
})

Cypress.Commands.add('removeHover', (menuId) => {
    cy.get(menuId)
    //we first check the presence of the pertinent classes related to hover
    .should('have.class', 'w3-dropdown-hover')
    .and('have.descendants', 'div.w3-dropdown-content')
    //Then we take out the class that makes the content invisible, so we can access the elements
    cy.get('.w3-dropdown-content')
    .invoke('removeAttr', 'class')
})