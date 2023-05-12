describe('Subtraction component', function () {
   
   beforeEach(() => {
       cy.visit('/subtraction')
    }) 
 
    it('should check the header', () => {
       cy.get('[class="subtractionheadline"]').should('have.text', 'Welcome to the subtraction')
    })
 
    it('should substract two numbers', () => {
       cy.get('[id="first"]').type('8')
       cy.get('[id="second"]').type('5')
       cy.get('[class="subtractionbutton"]').click()
       cy.get('[id="difference"]').should('have.text', 3)
    })
 
    it('should navigate to the start page', () => {
       cy.get('[class="returnbutton"]').click()
       cy.url().should('equal', 'http://localhost:4200/')
    })
 });