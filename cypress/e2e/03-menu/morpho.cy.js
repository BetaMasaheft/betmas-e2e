describe("morphology page", { tags: "@container" }, () => {
  // see 03_user 21 — API contract is in api/morpho.cy.js
  it("renders a parse result for a sample query", () => {
    cy.visit({ url: "morpho", qs: { query: "sabe" } });
    cy.contains("Morphological parsing of ሰባ").should("be.visible");

    // There should be traces for this annotation
    cy.contains("TraCES annotations of ሰባ").should("be.visible");

    // This should at least be 1. It might be incremented in the future, but this verifies the lookup into traces actually succeeds
    // If it turns to 'none visible', check the deployment.
    cy.contains(
      "This word appears in this form in the TraCES corpus 1 times.",
    ).should("be.visible");
  });
});
