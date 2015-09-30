export default (gearing) => {
  var { chainring, cog } = gearing
  return +(chainring / cog).toFixed(2)
}
