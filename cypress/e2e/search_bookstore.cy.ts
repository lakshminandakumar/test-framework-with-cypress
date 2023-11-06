describe('Searching Function in ToolsQA Book Store App', () => {
    beforeEach(() => {
        cy.visit('/books');
        cy.loginViaApi();
        // cy.get('input#searchBox').should('exist');
    })
    it('search for a book', () => {
        // cy.get('input#searchBox').clear().type('Git')
        cy.get('input#searchBox').should('exist');
        cy.get('button#submit').should('be visible');
    })
})