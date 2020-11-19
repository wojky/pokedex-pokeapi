describe('Dashboard', () => {
    it('Pokedex should be initial view', () => {
      cy.visit('');

      cy.url().should('contain', '/pokedex');
    })

    it("Pokedex list should show 20 pokemons", () => {
        cy.get('app-pokemon-tile').should('have.length', 20);
     })

     it("Pokedex should show pokemon navigations", () => {
        cy.get('app-navigation-bar').should('be.visible');
     });

     it('Selecting pokemon opens pokemon details container', () => {
      cy.get('app-pokemon-tile').first().within(() => {
         cy.get('img').click();
      });

      cy.get('app-pokemon-details').should('be.visible');
     })
  });