const { browser, element } = require("protractor")

describe('Testing Subtraction Component', function() {
    beforeEach(function() {
        browser.get('http://localhost:4200/multiplication')
    })

    it('should check the title', function() {
        let headline = element(by.css('.multiplicationheadline')).getText();
        expect(headline).toBe('Welcome to the multiplication')
    })

    it('should multiply two numbers', function() {
        element(by.id('first')).sendKeys(4);
        element(by.id('second')).sendKeys(5);
        element(by.css('.multiplicationbutton')).click();

        expect(element(by.css('.product')).getText()).toBe('20');
    })

    it('should navigate to the start page', function() {
        element(by.css('.returnbutton')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
    })
})