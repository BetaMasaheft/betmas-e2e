describe(
  "Gǝʿǝz Morphological Parser API (parser app, roaster router)",
  { tags: "@container" },
  () => {
    /**
     * The `parser` app (db/apps/parser) was migrated off native RESTXQ
     * (%rest:* annotations) onto the roaster OpenAPI router: modules/api.xql +
     * api.json now dispatch every /morpho route. BetMasWeb's controller still
     * owns the public /morpho URL and forwards to the app (previously
     * /restxq/morpho/..., now /apps/parser/morpho/...) - these specs exercise
     * the public contract through BetMasWeb, so they stay green whichever
     * backend serves it.
     */

    const query = "sabe";

    it("GET /morpho returns the search form and results as HTML", () => {
      cy.request({ url: "/morpho", qs: { query } }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include(`Morphological parsing of ${query}`);
      });
    });

    it("GET /morpho/xml/{query} returns candidate analyses as XML", () => {
      cy.request({ url: `/morpho/xml/${query}` }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("xml");
        expect(res.body).to.include("<allresults>");
      });
    });

    it("GET /morpho/geta/{query} maps results to the alpheios schema as XML", () => {
      cy.request({ url: `/morpho/geta/${query}` }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("xml");
        expect(res.body).to.include("<results>");
      });
    });

    it("GET /morpho/alpheios/{query} maps results to the alpheios schema as XML", () => {
      cy.request({ url: `/morpho/alpheios/${query}` }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("xml");
        expect(res.body).to.include("<words>");
      });
    });

    it("GET /morpho/decl prints a declension table as HTML", () => {
      cy.request({ url: "/morpho/decl", qs: { root: query } }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include(`Declension of ${query}`);
      });
    });

    it("GET /morpho/corpus looks up TraCES corpus attestations as HTML", () => {
      cy.request({ url: "/morpho/corpus", qs: { query, type: "string" } }).then(
        (res) => {
          expect(res.status).to.eq(200);
          expect(res.headers["content-type"]).to.include("text/html");
          expect(res.body).to.include("TraCES corpus");
        },
      );
    });

    it("GET /morpho/patterns lists all available patterns as HTML", () => {
      cy.request({ url: "/morpho/patterns" }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include("Available patterns");
      });
    });

    it("GET /morpho/affixes lists all available affixes as HTML", () => {
      cy.request({ url: "/morpho/affixes" }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include("Available affixes");
      });
    });

    it("GET /morpho/letters lists the fidal letters and transcription types as HTML", () => {
      cy.request({ url: "/morpho/letters" }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include("Fidal");
      });
    });

    // morpho:pattern2form()/morpho:pattern2transcription() (modules/morphoparser.xqm)
    // used to call fn:analyze-string() with a pattern whose every capture group
    // was optional, which XQuery F&O requires implementations to reject with
    // err:FORX0003 ("regular expression could match empty string") - both
    // routes 500'd on any root. Fixed in BetMas#173 (closes BetMas#128).
    it("GET /morpho/paradigm renders a paradigm table for a root", () => {
      cy.request({ url: "/morpho/paradigm", qs: { root: query } }).then(
        (res) => {
          expect(res.status).to.eq(200);
          expect(res.headers["content-type"]).to.include("text/html");
          expect(res.body).to.include(`${query} paradigm`);
        },
      );
    });

    it("GET /morpho/conj renders a conjugation table for a root", () => {
      cy.request({ url: "/morpho/conj", qs: { root: query } }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.headers["content-type"]).to.include("text/html");
        expect(res.body).to.include("conjugation for");
      });
    });
  },
);
