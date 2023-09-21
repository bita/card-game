import React from "react";
import Header from "./Header";
import { changeDifficulty } from "@/redux/slices/setting-slice";
import { ReduxProvider } from "@/redux/Provider";

describe("<Header />", () => {
  it("renders renders the header correctly on game start", () => {
    const level = 4;
    const move = 0;
    
    cy.window()
      .its("Cypress")
      .its("store")
      .invoke("dispatch", changeDifficulty(level));

    const startGame = cy.stub();
    cy.mount(<ReduxProvider><Header moves={move} shuffleCards={startGame} /></ReduxProvider>);

    cy.get("[data-cy=title]").should("contain.text", "Match game!");
    cy.get("[data-cy=new-game]").should("have.length", 1);
    cy.get("[data-cy=reset-game]").should("have.length", 1);
    cy.get("[data-cy=diff-level]").should("have.length", 1);
    cy.get("[data-cy=moves]").should("have.length", 1).should('contain.text', move);
    cy.get("[data-cy=level]").should("have.length", 1).should('contain.text', level);
  });
});
