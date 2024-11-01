const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

let convertHandler = new ConvertHandler()

suite('Unit Tests', function () {
  test('should correctly read a whole number input', function () {
    assert(convertHandler.getNum(55)).to.be.a('number')
  })

  test('should correctly read a decimal number input', function () {
    assert.equal(convertHandler.getNum(4.5), 4.5)

    done()
  })
})
