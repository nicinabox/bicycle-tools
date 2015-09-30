export default (values) => {
  var { chainring, cog, wheel } = values
  var wheelInches = wheel * 0.0393701

  return +(wheelInches * chainring / cog).toFixed()
}
