describe("modal managment", () => {
  it("should open and close the modal", () => {
    cy.visit('http://localhost:3000/');
    cy.get('button').should('have.length', 4);
    cy.get('[data-cy="diff-level"] [data-cy="button"]').click();
    cy.get('[data-cy="difficulty"]').should('have.length',1)
    cy.get('[data-cy="difficulty"] [data-cy="submit"]').should('have.length',1)
    cy.get('[data-cy="back-drop"]').should('have.length',1)
    cy.get('[data-cy="modal"]').should('have.length',1)

    cy.get('[data-cy="back-drop"]').click({ force: true})
    cy.get('[data-cy="back-drop"]').should('not.exist')
    cy.get('[data-cy="modal"]').should('not.exist')

    cy.get('[data-cy="diff-level"] [data-cy="button"]').click();
    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="back-drop"]').should('not.exist')
    cy.get('[data-cy="modal"]').should('not.exist')
  });

  it("should change the difficulty level correctly", () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="diff-level"] [data-cy="button"]').click();
    cy.get('[data-cy="select-level"]').select('6');
    cy.get('[data-cy="difficulty"] [data-cy="submit"]').click();
    cy.get('[data-cy="back-drop"]').should('not.exist')
    cy.get('[data-cy="modal"]').should('not.exist')
    cy.get('[data-cy="level"]').contains('6')
    cy.get('[data-cy="moves"]').contains('0')
    cy.get('[data-cy="cards-container"]').should('have.class', 'grid-cols-6');
    cy.get('[data-cy="cards-container"]').find('[data-cy="back"]').should('have.length', 36)
    cy.get('[data-cy="cards-container"] div.absolute [data-cy="front"]').should('have.length', 36)
    cy.get('[data-cy="cards-container"] div.absolute').should('have.class', '[transform:rotateY(180deg)] [backface-visibility:hidden]')
    
    cy.get('[data-cy="diff-level"] [data-cy="button"]').click();
    cy.get('[data-cy="select-level"]').select('4');
    cy.get('[data-cy="difficulty"] [data-cy="submit"]').click();
    cy.get('[data-cy="back-drop"]').should('not.exist')
    cy.get('[data-cy="modal"]').should('not.exist')
    cy.get('[data-cy="level"]').contains('4')
    cy.get('[data-cy="moves"]').contains('0')
    cy.get('[data-cy="cards-container"]').should('have.class', 'grid-cols-4');
    cy.get('[data-cy="cards-container"]').find('[data-cy="back"]').should('have.length', 16)
    cy.get('[data-cy="cards-container"] div.absolute [data-cy="front"]').should('have.length', 16)
    cy.get('[data-cy="cards-container"] div.absolute').should('have.class', '[transform:rotateY(180deg)] [backface-visibility:hidden]')


    cy.get('[data-cy="diff-level"] [data-cy="button"]').click();
    cy.get('[data-cy="select-level"]').select('2');
    cy.get('[data-cy="difficulty"] [data-cy="submit"]').click();
    cy.get('[data-cy="back-drop"]').should('not.exist')
    cy.get('[data-cy="modal"]').should('not.exist')
    cy.get('[data-cy="level"]').contains('2')
    cy.get('[data-cy="moves"]').contains('0')
    cy.get('[data-cy="cards-container"]').should('have.class', 'grid-cols-2');
    cy.get('[data-cy="cards-container"]').find('[data-cy="back"]').should('have.length', 4)
    cy.get('[data-cy="cards-container"] div.absolute [data-cy="front"]').should('have.length', 4)
    cy.get('[data-cy="cards-container"] div.absolute').should('have.class', '[transform:rotateY(180deg)] [backface-visibility:hidden]')
});
});
