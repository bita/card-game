import React from "react";
import { changeDifficulty, changeTheme } from "@/redux/slices/setting-slice";
import { ReduxProvider } from "@/redux/Provider";
import GameBoardInfo from "./GameBoardInfo";

describe("<Header />", () => {
  it("renders renders the header correctly on game start", () => {
    const level = 4;
    const move = 0;
    const theme = 'desert';
    
    cy.window()
      .its("Cypress")
      .its("store")
      .invoke("dispatch", changeDifficulty(level));

    cy.window()
      .its("Cypress")
      .its("store")
      .invoke("dispatch", changeTheme(theme));

    const startGame = cy.stub();
    cy.mount(<ReduxProvider><GameBoardInfo moves={move} /></ReduxProvider>);

    cy.get("[data-cy=moves]").should("have.length", 1).should('contain.text', move);
    cy.get("[data-cy=level]").should("have.length", 1).should('contain.text', level);
    cy.get("[data-cy=theme]").should("have.length", 1).should('contain.text', theme);
  });
});