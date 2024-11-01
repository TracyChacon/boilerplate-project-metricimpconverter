const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

let convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  test('should correctly read a whole number input', function () {
    assert.equal(convertHandler.getNum('5mi'), 5)
  })

  test('should correctly read a decimal number input', function () {
    assert.equal(convertHandler.getNum('4.5km'), 4.5)
  })

  test('can convert gal to L and vice versa', function () {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L')
    assert.equal(convertHandler.getReturnUnit('L'), 'gal')
  })
})
