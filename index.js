var requireModules = function(basePath, names) {
  var modules = {}
  names.forEach(function(name) {
    modules[name] = require([basePath, name].join('/'))
  })
  return modules
}

module.exports = {
  formulas: requireModules('./src/formulas', [
    'development',
    'gainRatio',
    'gearInches',
    'gearRatio',
    'skidpatches',
    'speed',
  ]),

  sizes: requireModules('./src/sizes', [
    'chainrings',
    'cogs',
    'cranks',
    'wheels',
  ]),
}
