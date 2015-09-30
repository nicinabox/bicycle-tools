export default (values) => {
  var { chainring, cog, wheelDiameter } = values
  return +(wheelDiameter * chainring / cog).toFixed()
}
