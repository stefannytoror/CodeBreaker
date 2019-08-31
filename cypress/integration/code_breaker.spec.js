describe('Code-breaker tests', function() {
    it('Set up secret number', function() {
        cy.visit('http://localhost:4200/')
        cy.contains('Code Breaker')
        cy.get('#text1')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#button1')
            .click()
        cy.contains('begins')
    })

    it('Guess number', function() {
        cy.visit('http://localhost:4200/')
        cy.get('#text2')
            .type('1234')
            .should('have.value', '1234')
        cy.get('#button2')
            .click()
        cy.contains('XXXX')
    })
})