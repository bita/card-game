import React from "react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders the button component mount correctly", () => {
    const onClick = cy.stub();
    cy.mount(<Button name="Button" type="button" classes="my-btn myBtn" onClick={onClick}/>);
    cy.get("[data-cy=button]")
      .should("have.text", "Button")
      .should("have.class", "my-btn myBtn")
      .invoke("attr", "type")
      .should("eq", "button");
      
      cy.get("[data-cy=button]").click().then(() => {
        expect(onClick).to.be.called;
      });
  });

  it("renders the button submit component mount correctly", () => {
    cy.mount(<Button name="Submit" type="submit" classes="my-btn myBtn"/>)
    cy.get("[data-cy=submit]")
      .should("have.text", "Submit")
      .should("have.class", "my-btn myBtn")
      .invoke("attr", "type")
      .should("eq", "submit");
  });
});
