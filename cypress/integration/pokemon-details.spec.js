describe('Pokemon Details', () => {
    it ('App url should contain pokemon number', () => {
        cy.visit('');
  
        cy.get('app-pokemon-tile').first().within(() => {
            cy.get('img').click();
         });

        cy.url().should('match', /pokedex\/\d+/);
    });

    it('Pokemon details container should display correctly', () => {
        cy.get('app-pokemon-details').within(() => {
            cy.get('img').should('be.visible');
            cy.get('button').contains('rotate');

            // pokemon name
            cy.get('h4').should('be.visible');

            // types container
            cy.get('.badge').its('length').should('be.gt', 0);

            // stats container
            cy.get('.mt-4').contains('hp')
            cy.get('.mt-4').contains('attack')
            cy.get('.mt-4').contains('defense')
            cy.get('.mt-4').contains('special-attack')
            cy.get('.mt-4').contains('special-defense')
            cy.get('.mt-4').contains('speed')
        })
    });

    it('pokemon sprite should change after rotate button click ', () => {
        cy.get('app-pokemon-details').within(async () => {
            const initialImageState = await cy.get('img');
            const initialImageSrc = initialImageState.attr('src');

            cy.get('button').click();
            cy.get('img').should('not.have.attr', 'src', initialImageSrc);

            cy.get('button').click();
            cy.get('img').should('have.attr', 'src', initialImageSrc);
        })
    });
})