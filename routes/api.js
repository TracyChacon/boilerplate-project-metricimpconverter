'use strict'

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  app.route('/api/convert/').get((req, res) => {
    const input = req.query.input

    let convertHandler = new ConvertHandler()

    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    const string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    )

    return res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string,
    })
  })
}
