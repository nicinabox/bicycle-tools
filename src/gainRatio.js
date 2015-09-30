const WHEEL_SIZE = 680

export default (values) => {
  var { chainring, cog, crank } = values

  var radiusRatio = WHEEL_SIZE / 2 / crank
  return +(radiusRatio * chainring / cog).toFixed(2)
}
