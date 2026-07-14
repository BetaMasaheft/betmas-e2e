import { isDataWriteRequest, isSessionPost } from '../../support/read-only-policy.js'

const loginBody = 'user=JinntecCatalogue&password=secret'

describe('read-only guard', { tags: '@container' }, () => {
  it('allows GET navigation (including newentry.html)', () => {
    expect(isDataWriteRequest({
      method: 'GET',
      url: 'https://betamasaheft.eu/newentry.html?type=works'
    })).to.eq(false)
  })

  it('allows login and logout POSTs (the #login-nav form posts to the current page)', () => {
    const allowed = [
      // login from the home page
      { method: 'POST', url: 'https://betamasaheft.eu/', body: loginBody },
      // login from a subpage
      { method: 'POST', url: 'https://betamasaheft.eu/availableImages.html', body: loginBody },
      // logout
      { method: 'POST', url: 'https://betamasaheft.eu/', body: 'logout=true' },
      // Cypress may parse form bodies into an object
      { method: 'POST', url: 'https://betamasaheft.eu/', body: { user: 'x', password: 'y' } }
    ]

    allowed.forEach((req) => {
      expect(isDataWriteRequest(req), `${req.url} (${JSON.stringify(req.body)})`).to.eq(false)
    })
  })

  it('allows the login POST on the container base path', () => {
    const appHostnames = ['betamasaheft.eu', 'localhost']

    expect(isDataWriteRequest({
      method: 'POST',
      url: 'http://localhost:8080/exist/apps/BetMasWeb/',
      body: loginBody
    }, appHostnames)).to.eq(false)
  })

  it('allows search POSTs', () => {
    const allowed = [
      { method: 'POST', url: 'https://betamasaheft.eu/newSearch.html' },
      { method: 'POST', url: 'https://betamasaheft.eu/Dillmann/' }
    ]

    allowed.forEach((req) => {
      expect(isDataWriteRequest(req), req.url).to.eq(false)
    })
  })

  it('blocks any app POST not on the allowlist (default-deny)', () => {
    const blocked = [
      { method: 'POST', url: 'https://betamasaheft.eu/newentry.html?confirmcreatenew=1' },
      { method: 'POST', url: 'https://betamasaheft.eu/newentry.html' },
      { method: 'POST', url: 'https://betamasaheft.eu/Dillmann/edit/edit.xq' },
      { method: 'POST', url: 'https://betamasaheft.eu/Dillmann/update.html?id=L123' },
      { method: 'POST', url: 'https://betamasaheft.eu/DillmannData/new/foo.xml' },
      // an endpoint the policy has never heard of must be blocked, not let through
      { method: 'POST', url: 'https://betamasaheft.eu/some/brand-new-endpoint.xq' }
    ]

    blocked.forEach((req) => {
      expect(isDataWriteRequest(req), req.url).to.eq(true)
    })
  })

  it('blocks a write POST even when credentials ride along in the body', () => {
    expect(isDataWriteRequest({
      method: 'POST',
      url: 'https://betamasaheft.eu/newentry.html',
      body: 'user=x&password=y&title=to-be-deleted'
    })).to.eq(true)

    expect(isSessionPost('user=x&password=y&title=to-be-deleted')).to.eq(false)
    expect(isSessionPost('')).to.eq(false)
    expect(isSessionPost(undefined)).to.eq(false)
  })

  it('treats relative URLs as app requests', () => {
    expect(isDataWriteRequest({ method: 'POST', url: 'newentry.html' })).to.eq(true)
    expect(isDataWriteRequest({ method: 'POST', url: 'newSearch.html' })).to.eq(false)
  })

  it('blocks all PUT, PATCH, and DELETE requests to the app', () => {
    const methods = ['PUT', 'PATCH', 'DELETE']

    methods.forEach((method) => {
      expect(isDataWriteRequest({
        method,
        url: 'https://betamasaheft.eu/works/LIT1/main'
      })).to.eq(true)
    })
  })

  it('ignores mutating requests to third-party hosts', () => {
    const thirdParty = [
      { method: 'POST', url: 'https://www.google-analytics.com/collect' },
      { method: 'PUT', url: 'https://cdn.example.org/asset' }
    ]

    thirdParty.forEach((req) => {
      expect(isDataWriteRequest(req), req.url).to.eq(false)
    })
  })
})
