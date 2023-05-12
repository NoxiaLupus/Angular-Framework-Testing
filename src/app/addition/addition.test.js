const sum = require('./addition.component');

test('adds 3 + 5 to equal 8', () => {
    expect(sum(3, 5)).toBe(8);
})