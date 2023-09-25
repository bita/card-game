describe("cards behavior", () => {
  it("should flipps the cards correctly", () => {
    cy.visit("http://localhost:3000/").wait(2000);

    cy.get("[data-cy='moves']").should("have.text", "0");
    cy.get("[data-cy='level']").should("have.text", "Medium");
    cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
      .first()
      .click();
    cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
      .first()
      .should(
        "contain.class",
        "pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300]"
      );
    cy.get('[data-cy="cards-container"] [data-cy="single-card"]').eq(5).click();
    cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
      .eq(5)
      .should(
        "have.class",
        "pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300]"
      );

    cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
      .first()
      .find("img[data-cy='front']")
      .then((firstImg) => {
        const src1 = firstImg.attr("src");

        cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
          .eq(5)
          .find("img[data-cy='front']")
          .then((secondImg) => {
            const src2 = secondImg.attr("src");

            if (src1 !== src2) {
              cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
                .eq(2)
                .click();
              cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
                .eq(2)
                .should(
                  "not.have.class",
                  "pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300]"
                );
            } else {
              cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
                .eq(2)
                .click();
              cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
                .eq(2)
                .should(
                  "have.class",
                  "pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300]"
                );
            }
          });
      });
  });

  it("should show the matched cards correctly", () => {
    cy.visit("http://localhost:3000/").wait(2000);

    cy.get("[data-cy='moves']").should("have.text", "0");
    cy.get("[data-cy='level']").should("have.text", "Medium");
    cy.get('[data-cy="cards-container"] [data-cy="single-card"]')
      .first()
      .click()
      .find("img[data-cy='front']")
      .then((img) => {
        const source = img.attr("src");
        cy.get('[data-cy="cards-container"] [data-cy="single-card"]').each(
          ($card) => {
            const src2 = $card.find("img[data-cy='front']").attr("src");
            if (src2 == source) {
              cy.wrap($card).then((el) => {
                el.last().click();
              });
            }
          }
        );
        cy.get(
          '[data-cy="cards-container"] [data-cy="single-card"].pointer-events-none'
        ).should("have.length", 2);
      });
  });
});
