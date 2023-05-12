const { browser, element } = require("protractor")

describe('Testing the start page', function() {
    beforeEach(function() {
        browser.get('http://localhost:4200/');
    })

    it('should check the headlline', function() {
        let headline = element(by.css('.startheadline')).getText();
        expect(headline).toBe('Calculator');
    })

    it('should navigate to the addition page', function() {
        element(by.id('addition')).click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/addition');
    })

    it('should navigate to the subtraction page', function() {
        element(by.id('subtraction')).click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/subtraction');
    })

    it('should navigate to the multiplication page', function() {
        element(by.id('multiplication')).click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/multiplication');
    })

    it('should navigate to the division page', function() {
        element(by.id('division')).click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/division')
    })
})