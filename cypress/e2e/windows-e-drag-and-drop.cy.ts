describe('Windows e Drag and drop', () => {
    it('deve trabalhar com nova janela', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.contains('Click here')
            .invoke('removeAttr', 'target')
            .click();

        cy.url().should('include', 'windows/new');
        cy.get('h3').should('have.text', 'New Window');

    });

    it('Drag and drop', () => {
        const dataTransfer = new DataTransfer();

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        // Elemento que será arrastado
        cy.contains('A').trigger('dragstart', { dataTransfer });

        // Área em que vamos soltar o elemento
        cy.contains('B').trigger('drop', { dataTransfer });

    });
});