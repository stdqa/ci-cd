describe('suite name', () => {

    it('test1 title positive', () => {
        
       cy.visit('https://opensource-demo.orangehrmlive.com/')

       cy.title().should('eq', 'OrangeHRM')

    })

    it('test2 title negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

       cy.title().should('eq', 'OrangeHRM333')
    })
    
})