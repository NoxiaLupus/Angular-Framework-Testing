module.exports = {
    beforeEach(browser) {
      browser.url('http://localhost:4200/division')
    },
    'test one: check the header': function(browser) {
      browser.assert.textContains('h2[class="divisionheadline"]', 'Welcome to the division')
    },
    'test two: divide two numbers': function(browser) {
      browser
      .setValue('input[id="first"]', '20')
      .setValue('input[id="second"]', '5')
      .click('button[class="divisionbutton"]')
      .assert.textContains('label[id="quotient"]', '4')
    },
    'test three: navigate to the start page' : function(browser) {
      browser.click('button[class="returnbutton"]')
      browser.url(function(result) {
        this.assert.equal(result.value, 'http://localhost:4200/')
      })
    }
  }