describe('CSS locators', () => {
    it('Find elemts by css locator', () => {

        cy.visit('https://ultimateqa.com/');
        cy.title().should('eq', 'Homepage - Ultimate QA');
        cy.get('.et_pb_searchform').type('test');
        cy.get('.et_pb_searchsubmit').click();
        cy.url().should('match', /https:\/\/ultimateqa.com\/\?.*s=test/)
    }) 
})