# TraCES corpus fixture

`sabe.tei.xml` is a **synthetic** fixture, not a capture of real TraCES data.

The morphology page's "TraCES annotations of …" panel is driven by
`$morpho:corpus := collection('/db/apps/tracesData/')` in `BetMas`'s
`db/apps/parser/modules/morphoparser.xqm` — a plain eXist collection, not
Fuseki or QLever. That collection holds the real TraCES corpus (annotated by
the [TraCES project](https://www.traces.uni-hamburg.de/)), which is
intentionally `.gitignore`d in `BetMas` and never baked into the container
image — it's licensed corpus data, not something to ship in a public test
fixture or a public image.

That means the containerized stack `betmas-e2e` tests against has an empty
`tracesData` collection by construction, and always will. `morpho.cy.js`
("renders a parse result for a sample query") asserts a real hit ("This word
appears in this form in the TraCES corpus 1 times.") for the query `sabe`
(ሰባ) — so CI seeds this one minimal `t:f[@name='fidäl']` entry directly into
`/db/apps/tracesData/` over eXist's REST API before the suite runs (see
`test-container.yml`, "Seed TraCES corpus fixture"), the same way test users
are provisioned straight against eXist rather than through nginx.
