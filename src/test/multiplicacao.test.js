const multiplicacao = require('../multiplicacao')

test("add 5 * 5 to be equal 25", () => {
  expect(multiplicacao(5,5)).toBe(25)
})