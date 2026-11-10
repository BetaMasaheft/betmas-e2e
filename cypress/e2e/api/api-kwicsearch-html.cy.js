describe('API regression: /api/kwicsearch embeds HTML, not XML', { tags: '@container' }, () => {
  /**
   * `results` carries KWIC snippets (<p><span class="previous">…</span>
   * <span class="hi">…</span><span class="following">…</span></p>) inside a
   * JSON string. They used to be XML-serialized, so a match at the very
   * start/end of a text produced an empty, self-closing
   * `<span class="previous"/>`. Browsers ignore the `/` on a non-void HTML
   * element, so injecting that string as HTML swallowed everything after it
   * into the span. The snippets must be serialized as HTML.
   *
   * Queries below match the first word of a text (e.g. a place name at the
   * start of a title), which is what produces the empty `previous` span.
   */

  const selfClosing = /<(?!(?:area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr)\b)[a-zA-Z][^<>]*\/>/

  const snippets = (body) => {
    const items = typeof body === 'string' ? JSON.parse(body).items : body.items
    // a single snippet is a bare string, several are an array
    return items.flatMap((i) => [].concat(i.results))
  }

  const search = (q, element = 'title') =>
    cy.request({ url: '/api/kwicsearch', qs: { q, element }, timeout: 60000 })

  it('returns the documented JSON shape', () => {
    search('Gondar').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('total').that.is.a('number')
      expect(res.body.items).to.be.an('array')
      expect(res.body.items.length).to.be.greaterThan(0)
      expect(res.body.items[0]).to.include.keys('id', 'title', 'collection', 'hitsCount', 'results')
    })
  })

  ;['Gondar', 'Tigray', 'Dabra', 'Mary'].forEach((q) => {
    it(`has no self-closing elements in the snippets for "${q}"`, () => {
      search(q).then((res) => {
        const all = snippets(res.body)
        expect(all.length, 'at least one snippet').to.be.greaterThan(0)
        const bad = all.filter((s) => selfClosing.test(s))
        expect(bad.length, `${bad.length} snippets with self-closing tags, e.g. ${(bad[0] || '').slice(0, 120)}`).to.eq(0)
      })
    })
  })

  it('parses as HTML into previous/hi/following spans in that order', () => {
    search('Gondar').then((res) => {
      snippets(res.body).forEach((s) => {
        const doc = new DOMParser().parseFromString(s, 'text/html')
        const spans = [...doc.body.querySelectorAll('p > span')].map((e) => e.className)
        expect(spans).to.deep.eq(['previous', 'hi', 'following'])
      })
    })
  })
})
