module.exports = {
    beforeEach(browser) {
      browser.url('http://localhost:4200/subtraction')
    },
    'test one: check the header': function(browser) {
      browser.assert.textContains('h2[class="subtractionheadline"]', 'Welcome to the subtraction')
    },
    'test two: subtract two numbers': function(browser) {
      browser
      .setValue('input[id="first"]', '5')
      .setValue('input[id="second"]', '3')
      .click('button[class="subtractionbutton"]')
      .assert.textContains('label[id="difference"]', '2')
    },
    'test three: navigate to the start page' : function(browser) {
      browser.click('button[class="returnbutton"]')
      browser.url(function(result) {
        this.assert.equal(result.value, 'http://localhost:4200/')
      })
    }
  }