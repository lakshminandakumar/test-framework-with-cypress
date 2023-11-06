describe('Searching Function in ToolsQA Book Store App', () => {
    // let data;
    beforeEach(() => {
        cy.session('login',() => {
            cy.visit('/login');
            cy.login(Cypress.env('validUsername'), Cypress.env('validPassword'));
        })
        cy.contains('span', 'Book Store').click();
    })
    it('search for a book', () => {
        cy.get('input#searchBox').clear().type('Git')
        cy.get('input#searchBox').should('exist');
        cy.get('button#submit').should('be visible');
    })
})