describe('Addition component', function () {
   
    beforeEach(() => {
       cy.visit('/addition')
    }) 
 
    it('should check the header', () => {
       cy.get('[class="additionheadline"]').should('have.text', 'Welcome to the addition')
    })
 
    it('should add two numbers', () => {
       cy.get('[id="first"]').type('5')
       cy.get('[id="second"]').type('8')
       cy.get('[class="additionbutton"]').click()
       cy.get('[id="summe"]').should('have.text', 13)
    })
 
    it('should navigate to the start page', () => {
       cy.get('[class="returnbutton"]').click()
       cy.url().should('equal', 'http://localhost:4200/')
    })
 });