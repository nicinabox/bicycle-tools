module.exports = function(basePath, names) {
  var modules = {}
  names.forEach(function(name) {
    modules[name] = require([basePath, name].join('/'))
  })
  return modules
}
