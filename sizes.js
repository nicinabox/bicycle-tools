var requireModules = require('./requireModules')

module.exports = requireModules('./lib/sizes', [
  'chainrings',
  'cogs',
  'cranks',
  'wheels',
])
