module.exports = {
    beforeEach(browser) {
      browser.url('http://localhost:4200/multiplication')
    },
    'test one: check the header': function(browser) {
      browser.assert.textContains('h2[class="multiplicationheadline"]', 'Welcome to the multiplication')
    },
    'test two: multiply two numbers': function(browser) {
      browser
      .setValue('input[id="first"]', '5')
      .setValue('input[id="second"]', '3')
      .click('button[class="multiplicationbutton"]')
      .assert.textContains('label[class="product"]', '15')
    },
    'test three: navigate to the start page' : function(browser) {
      browser.click('button[class="returnbutton"]')
      browser.url(function(result) {
        this.assert.equal(result.value, 'http://localhost:4200/')
      })
    }
  }