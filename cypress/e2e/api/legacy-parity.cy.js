/**
 * Legacy-parity contract replay.
 *
 * Replays the surfaces captured in cypress/fixtures/legacy-parity/ (see the
 * README there) against a candidate deployment and asserts the CONTRACT SHAPE
 * matches what the legacy production stack served: status code, content-type
 * family, and (for JSON bodies) the top-level structure. Content is expected
 * to drift as data evolves — for byte-level diffs at cutover time, run
 * scripts/capture-legacy-parity.sh against both stacks the same day and diff.
 *
 * Dormant by default: runs only when a candidate is named, e.g.
 *   CYPRESS_PARITY_TARGET=http://localhost:8080 npx cypress run \
 *     --spec cypress/e2e/api/legacy-parity.cy.js
 *
 * This is the acceptance gate for replacing a legacy surface (native /api,
 * Fuseki SPARQL, collatex servlet): the replacement must match, or the delta
 * must be reviewed and documented in the fixture README. Legacy 500s count as
 * the baseline too — a candidate may improve on them (document the delta),
 * but an unexplained mismatch fails.
 */

import manifest from '../../fixtures/legacy-parity/manifest.json'

const LEGACY_HOST = 'https://betamasaheft.eu'

const typeFamily = (contentType) => {
  const ct = (contentType || '').toLowerCase()
  if (ct.includes('json')) return 'json'
  if (ct.includes('xml')) return 'xml'
  return 'other'
}

const topLevelShape = (parsed) => {
  if (Array.isArray(parsed)) return { kind: 'array' }
  if (parsed && typeof parsed === 'object') return { kind: 'object', keys: Object.keys(parsed).sort() }
  return { kind: typeof parsed }
}

describe('Legacy-parity contract replay', { tags: '@parity' }, () => {
  manifest.surfaces.forEach((surface) => {
    it(`${surface.slug} matches the legacy contract`, function () {
      const path = surface.url.replace(LEGACY_HOST, '')

      cy.env(['PARITY_TARGET']).then((env) => {
        if (!env.PARITY_TARGET) {
          cy.log('PARITY_TARGET not set — parity replay is dormant')
          this.skip()
        }

        cy.request({
          method: 'GET',
          url: `${env.PARITY_TARGET}${path}`,
          followRedirect: false,
          failOnStatusCode: false,
          timeout: 90000
        }).then((response) => {
          assertContract(surface, response, env.PARITY_TARGET)
        })
      })
    })
  })

  const assertContract = (surface, response, target) => {
    expect(response.status, `${surface.slug}: status`).to.eq(surface.status)

    if (surface.status === 302) {
      // Host-agnostic on the location itself, verbatim on path + query — a
      // serving host leaking into the query (id=http://localhost…) must fail.
      const actual = new URL(response.headers.location, target)
      const legacy = new URL(surface.redirect_url)
      expect(
        actual.pathname + actual.search,
        `${surface.slug}: redirect target`
      ).to.eq(legacy.pathname + legacy.search)
      return
    }

    expect(
      typeFamily(response.headers['content-type']),
      `${surface.slug}: content-type family (legacy: ${surface.content_type})`
    ).to.eq(typeFamily(surface.content_type))

    if (surface.status === 200 && typeFamily(surface.content_type) === 'json') {
      cy.fixture(`legacy-parity/${surface.file}`).then((legacyBody) => {
        const candidateBody =
          typeof response.body === 'string' ? JSON.parse(response.body) : response.body

        expect(
          topLevelShape(candidateBody),
          `${surface.slug}: top-level JSON structure`
        ).to.deep.eq(topLevelShape(legacyBody))
      })
    }
  }
})
