describe('Start page', function() {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should check the header', () => {
        cy.get('[class="startheadline"]').should('have.text', 'Calculator')
    })

    it('should navigate to the addition', () => {
        cy.get('[id="addition"]').click()
        cy.url().should('equal', 'http://localhost:4200/addition')
    })

    it('should navigate to the subtraction', () => {
        cy.get('[id="subtraction"]').click()
        cy.url().should('equal', 'http://localhost:4200/subtraction')
    })

    it('should navigate to the multiplication', () => {
        cy.get('[id="multiplication"]').click()
        cy.url().should('equal', 'http://localhost:4200/multiplication')
    })

    it('should navigate to the division', () => {
        cy.get('[id="division"]').click()
        cy.url().should('equal', 'http://localhost:4200/division')
    })
})