import expect from 'unexpected'

describe('module', () => {
  describe('formulas', () => {
    it('requires formulas', () => {
      var tools = require('../index.js')
      expect(tools.formulas, 'to have keys', [
        'development',
        'gainRatio',
        'gearInches',
        'gearRatio',
        'skidpatches',
        'speed'
      ])
    })

    it('requires sizes', () => {
      var tools = require('../index.js')
      expect(tools.sizes, 'to have keys', [
        'chainrings',
        'cogs',
        'cranks',
        'wheels',
      ])
    })
  })
})
