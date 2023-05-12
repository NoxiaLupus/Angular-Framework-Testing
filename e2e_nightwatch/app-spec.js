module.exports = {
    beforeEach(browser) {
        browser.url('http://localhost:4200/')
    },
    'test one: check the headline' : function(browser) {
        browser.assert.textContains('h1[class="startheadline"]', 'Calculator')
    },
    'test two: navigate to the addition page' : function(browser) {
        browser.click('button[id="addition"]')
        browser.url(function(result) {
            this.assert.equal(result.value, 'http://localhost:4200/addition')
        })
    },
    'test three: navigate to the subtraction page' : function(browser) {
        browser.click('button[id="subtraction"]')
        browser.url(function(result) {
            this.assert.equal(result.value, 'http://localhost:4200/subtraction')
        })
    },
    'test four: navigate to the multiplication page' : function(browser) {
        browser.click('button[id="multiplication"]')
        browser.url(function(result) {
            this.assert.equal(result.value, 'http://localhost:4200/multiplication')
        })
    },
    'test five: navigate to the division page' : function(browser) {
        browser.click('button[id="division"]')
        browser.url(function(result) {
            this.assert.equal(result.value, 'http://localhost:4200/division')
        })
    }
}