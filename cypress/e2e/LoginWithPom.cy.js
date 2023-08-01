import Login from '../PageObjects/LoginPage';

describe('Login with using page object', () => {
    it('LoginPage', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        const ln = new Login();
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit();
        ln.verifyLogin();

    })

    it.only('LoginPage with fixture', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        cy.fixture('loginData').then((data) => {

            const ln = new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifyLogin();
        })  
    })
})
