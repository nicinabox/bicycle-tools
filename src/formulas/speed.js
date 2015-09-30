import development from './development'

export default (gearing) => {
  var { cadence } = gearing
  var distance = development(gearing)

  return +(distance * cadence / 60).toFixed(2)
}
