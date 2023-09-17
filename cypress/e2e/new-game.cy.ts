describe("First Visit", () => {
  it("should render the first page correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.length", 1).contains("Match game!");
    cy.get("button").should("have.length", 3);
    cy.get("[data-cy='moves']").should("have.text", "0");
    cy.get("[data-cy='level']").should("have.text", "4");
    cy.get("[data-cy='cards-container']").should("have.class", "grid-cols-4");
    cy.get("[data-cy='cards-container']").find("[data-cy='back']").should("have.length", 16);
    cy.get("[data-cy='cards-container'] div.absolute [data-cy='front']").should("have.length", 16);
    cy.get("[data-cy='cards-container'] div.absolute").should(
      "have.class",
      "[transform:rotateY(180deg)] [backface-visibility:hidden]"
    );
  });

  it("should render a new game", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy='new-game']").click();

    cy.get("[data-cy='moves']").should("have.text", "0");
    cy.get("[data-cy='level']").should("have.text", "4");
    cy.get("[data-cy='cards-container']").should("have.class", "grid-cols-4");
    cy.get("[data-cy='cards-container']").find("[data-cy='back']").should("have.length", 16);
    cy.get("[data-cy='cards-container'] div.absolute [data-cy='front']").should("have.length", 16);
    cy.get("[data-cy='cards-container'] div.absolute").should(
      "have.class",
      "[transform:rotateY(180deg)] [backface-visibility:hidden]"
    );
  });
});
