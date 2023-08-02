describe('Check UI Elements', () => {
    it('Checking Radio Buttons', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')
        cy.get('#other').should('be.visible')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
        cy.get('#other').should('not.be.checked')


        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        cy.get('#other').should('not.be.checked')

        

    })


    it('Checking Check Box', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        
        // hi

    })
})