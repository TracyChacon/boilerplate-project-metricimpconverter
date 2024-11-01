function ConvertHandler() {
  this.getNum = function (input) {
    const result = input.match(/^\d+(\.\d+)?/)

    if (!result) {
      return 1
    }

    if (result[1]) {
      return parseFloat(result[0])
    }

    return parseInt(result[0])
  }

  this.getUnit = function (input) {
    const result = input.match(/\D+/)
    if (!result) {
      return null
    }
    return result[0]
  }

  this.getReturnUnit = function (initUnit) {
    const initToReturnUnitMapping = {
      gal: 'L',
      L: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs',
    }

    const result = initToReturnUnitMapping[initUnit]

    return result
  }

  this.spellOutUnit = function (unit) {
    const unitAbbreviationToFullSpelling = {
      gal: 'gallons',
      L: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
      cm: 'centimeters',
      in: 'inches',
    }

    let result = unitAbbreviationToFullSpelling[unit]

    return result
  }

  this.convert = function (initNum, initUnit) {
    const conversionFactors = {
      galToL: 3.78541,
      lbsToKg: 0.453592,
      miToKm: 1.60934,
      inToCm: 2.54,
    }

    const unitConversionNumber = {
      gal: conversionFactors['galToL'],
      lbs: conversionFactors['lbsToKg'],
      mi: conversionFactors['miToKm'],
      in: conversionFactors['inToCm'],
      L: 1 / conversionFactors['galToL'],
      kg: 1 / conversionFactors['lbsToKg'],
      km: 1 / conversionFactors['miToKm'],
      cm: 1 / conversionFactors['inToCm'],
    }

    let result = initNum * unitConversionNumber[initUnit]

    return result
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`

    return result
  }
}

module.exports = ConvertHandler
