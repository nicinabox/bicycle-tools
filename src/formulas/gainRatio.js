export default (values) => {
  var { chainring, cog, crank, wheel } = values
  var radiusRatio = wheel / 2 / crank

  return +(radiusRatio * chainring / cog).toFixed(2)
}
