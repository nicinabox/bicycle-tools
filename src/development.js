import gearInches from './gearInches'
const WHEEL_SIZE = 680

export default (values) => {
  var { chainring, cog } = values
  var circumference = WHEEL_SIZE * Math.PI

  return +(circumference * chainring / cog / 1000).toFixed(2)
}
