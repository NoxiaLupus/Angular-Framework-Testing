const { element, browser, by } = require("protractor")

describe('Testing Subtraction Functionality', function() {
    beforeEach(function() {
        browser.get('http://localhost:4200/subtraction')
    })

    it('should check the title', function() {
        let headline = element(by.css('.subtractionheadline')).getText();
        expect(headline).toBe('Welcome to the subtraction')
    })

    it('should subtract number two from number one', function() {
        element(by.id('first')).sendKeys(5);
        element(by.id('second')).sendKeys(3);
        element(by.css('.subtractionbutton')).click();
        
        expect(element(by.id('difference')).getText()).toEqual('2');
    })

    it('should navivagte to the start page', function() {
        element(by.css('.returnbutton')).click();
        
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/')
    })
})