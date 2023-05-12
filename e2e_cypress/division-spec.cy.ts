describe('Division component', function () {
   
    beforeEach(() => {
       cy.visit('/division')
    }) 
 
    it('should check the header', () => {
       cy.get('[class="divisionheadline"]').should('have.text', 'Welcome to the division')
    })
 
    it('should multiply two numbers', () => {
       cy.get('[id="first"]').type('20')
       cy.get('[id="second"]').type('5')
       cy.get('[class="divisionbutton"]').click()
       cy.get('[id="quotient"]').should('have.text', 4)
    })
 
    it('should navigate to the start page', () => {
       cy.get('[class="returnbutton"]').click()
       cy.url().should('equal', 'http://localhost:4200/')
    })
 });