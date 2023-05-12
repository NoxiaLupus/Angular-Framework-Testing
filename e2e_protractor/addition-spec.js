const { element, browser } = require("protractor");

describe('Testing Addition Component', function() {
    beforeEach(function() {
        browser.get('http://localhost:4200/addition')
    })
    
    it('should check the header', function() {
        let headline = element(by.css('.additionheadline')).getText();
        expect(headline).toEqual('Welcome to the addition')
    })
    
    it('should add one and two', function() {
        element(by.id('first')).sendKeys(1);
        element(by.id('second')).sendKeys(2);
        element(by.css('.additionbutton')).click();

        expect(element(by.id('summe')).getText()).toEqual('3');
    })

    it('should navivagte to the start page', function() {
        element(by.css('.returnbutton')).click();
        
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/')
    })

})