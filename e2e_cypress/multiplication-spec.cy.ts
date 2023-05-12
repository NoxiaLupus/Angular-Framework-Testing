describe('Multiplication component', function () {
   
   beforeEach(() => {
       cy.visit('/multiplication')
    }) 
 
    it('should check the header', () => {
       cy.get('[class="multiplicationheadline"]').should('have.text', 'Welcome to the multiplication')
    })
 
    it('should multiply two numbers', () => {
       cy.get('[id="first"]').type('8')
       cy.get('[id="second"]').type('5')
       cy.get('[class="multiplicationbutton"]').click()
       cy.get('[class="product"]').should('have.text', 40)
    })
 
    it('should navigate to the start page', () => {
       cy.get('[class="returnbutton"]').click()
       cy.url().should('equal', 'http://localhost:4200/')
    })
 });