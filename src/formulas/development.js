import gearInches from './gearInches'

export default (values) => {
  var { chainring, cog, wheel } = values
  var circumference = wheel * Math.PI

  return +(circumference * chainring / cog / 1000).toFixed(2)
}
