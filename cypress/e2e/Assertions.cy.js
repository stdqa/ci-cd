
describe('Assertions demo', () => {
    it('Test implicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.title().should('eq', 'OrangeHRM');
        
        cy.url().should('include', 'index.php');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain', 'orangeh');

        cy.url().should('include', 'index.php')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangeh');

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist');

        cy.xpath('//a').should('have.length', '5');

        cy.get('[name = "username"]').type('Admin');
        cy.get('[name = "username"]').should('have.value', 'Admin');

        cy.get('[name = "password"]').type('admin123');
        cy.get('[name = "password"]').should('have.value', 'admin123');
        

    })

    it('Test explicit assertions', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

        cy.get('[name = "username"]').type('Admin');
        cy.get('[name = "username"]').should('have.value', 'Admin');

        cy.get('[name = "password"]').type('admin123');
        cy.get('[name = "password"]').should('have.value', 'admin123');
        cy.get('button[type = "submit"]').click();

        let expName = 'PaulAAAAAAAAA Collings';

        cy.get('.oxd-userdropdown-name').then( (x) => {
            let actName = x.text();

            // BDD Style
            expect(actName).to.equal(expName);
            //expect(actName).to.not.equal(expName);

            // TDD Style
            assert.equal(actName, expName);
            //assert.notequal(actName, expName);
        })
        
    })
})