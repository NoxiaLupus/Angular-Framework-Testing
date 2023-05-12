const { element, browser } = require("protractor");

describe('Testing Division Component', function() {
    beforeEach(function() {
        browser.get('http://localhost:4200/division')
    })
    
    it('should check the header', function() {
        let headline = element(by.css('.divisionheadline')).getText();
        expect(headline).toEqual('Welcome to the division')
    })
    
    it('should divide two numbers', function() {
        element(by.id('first')).sendKeys(20);
        element(by.id('second')).sendKeys(5);
        element(by.css('.divisionbutton')).click();

        expect(element(by.id('quotient')).getText()).toEqual('4');
    })

    it('should navivagte to the start page', function() {
        element(by.css('.returnbutton')).click();
        
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/')
    })

})