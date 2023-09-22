describe(("Grid behavior"), () => {
    it("should create squere grid", () => {
        cy.visit("http://localhost:3000/");
        cy.get("[data-cy='level']").should("have.text", "4");
        cy.get("[data-cy='cards-container']").should("have.class", "grid-cols-4")  
    })
})