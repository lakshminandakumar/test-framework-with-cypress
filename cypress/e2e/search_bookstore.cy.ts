describe('Searching Function in ToolsQA Book Store App', () => {
    beforeEach(() => {
        cy.loginViaApi();
        cy.visit('/books');
        cy.get('input#searchBox').should('exist');
    })

    it('searchs for a book', () => {
        cy.get('input#searchBox').clear().type('Git')
    })
})