describe('Base-path drift guard', { tags: '@container' }, () => {
  /**
   * Class-wide guard for the appUrl/BMurl link bugs fixed in
   * BetaMasaheft/BetMas#113: upstream code that strips the wrong prefix
   * (or none) renders hrefs like
   *   href="/https://betamasaheft.eu/LIT1544Gebrah"   (glued absolute URL)
   *   href="//betamasaheft.eu/LIT1544Gebrah"          (protocol-relative host)
   * Both shapes are broken in the container and drift-prone on production.
   * Checking the raw HTML of a sample of pages catches the whole class
   * instead of one link per spec. Extend the sample as more upstream
   * link-generation code is converted to appUrl-prefixed hrefs.
   */
  const pages = [
    '/',
    '/manuscripts/ESdz010/main',
    '/works/LIT1544Gebrah/main',
    '/as.html',
  ]

  const brokenShapes = [
    // absolute URL glued after a path slash, incl. appUrl-prefixed variants
    /href="[^"]*\/https?:\/\/[^"]*"/g,
    // protocol-relative canonical host
    /href="\/\/betamasaheft[^"]*"/g,
  ]

  pages.forEach((page) => {
    it(`renders no broken base-path hrefs on ${page}`, () => {
      cy.request(page)
        .its('body')
        .then((body) => {
          brokenShapes.forEach((shape) => {
            const matches = body.match(shape)
            expect(matches, `${shape} on ${page}: ${matches ? matches.slice(0, 3).join(' ') : ''}`)
              .to.be.null
          })
        })
    })
  })
})
