const randomStrings = require("../index")

describe('Test functions the randomString', () => {
  test('Test funcionallity', () => {
    expect(typeof (randomStrings())).toBe('string')
  })
  test('Comprobate dont exist one city', () => {
    expect(randomStrings()).not.toMatch(/Lima/)
  })
});
