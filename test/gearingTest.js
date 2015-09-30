import expect from 'unexpected'
import gearRatio from '../src/gearRatio'
import gainRatio from '../src/gainRatio'
import gearInches from '../src/gearInches'
import development from '../src/development'
import skidPatches from '../src/skidPatches'
import speed from '../src/speed'

describe('46/16 gearing', () => {
  var gearing = {
    chainring: 46,
    cog: 16,
    crank: 165,
    wheel: 622, // ISO
    cadence: 90,
  }

  it('gear ratio should be 2.88', () => {
    expect(gearRatio(gearing), 'to be', 2.88)
  })

  it('gain ratio should be 5.42', () => {
    expect(gainRatio(gearing), 'to equal', 5.42)
  })

  it('gear inches should be 70in', () => {
    expect(gearInches(gearing), 'to equal', 70)
  })

  it('development should be 5.62m', () => {
    expect(development(gearing), 'to equal', 5.62)
  })

  it('skid patches should be 8', () => {
    expect(skidPatches(gearing), 'to equal', 8)
  })

  it('ambidextrous skid patches should be 16', () => {
    expect(skidPatches(gearing, true), 'to equal', 16)
  })

  it('speed should be 8.43m/s', () => {
    expect(speed(gearing), 'to equal', 8.43)
  })
})

describe('43/15 gearing', () => {
  var gearing = {
    chainring: 43,
    cog: 15,
    crank: 170,
    wheel: 622, // ISO
    cadence: 90,
  }

  it('gear ratio should be 2.87', () => {
    expect(gearRatio(gearing), 'to be', 2.87)
  })

  it('gain ratio should be 5.24', () => {
    expect(gainRatio(gearing), 'to equal', 5.24)
  })

  it('gear inches should be 70in', () => {
    expect(gearInches(gearing), 'to equal', 70)
  })

  it('development should be 5.6m', () => {
    expect(development(gearing), 'to equal', 5.6)
  })

  it('skid patches should be 15', () => {
    expect(skidPatches(gearing), 'to equal', 15)
  })

  it('ambidextrous skid patches should be 30', () => {
    expect(skidPatches(gearing, true), 'to equal', 30)
  })

  it('speed should be 8.4m/s', () => {
    expect(speed(gearing), 'to equal', 8.4)
  })
})

describe('48/12 gearing', () => {
  var gearing = {
    chainring: 48,
    cog: 12,
    crank: 170,
    wheel: 622, // ISO
    cadence: 90,
  }

  it('skid patches should be 1', () => {
    expect(skidPatches(gearing), 'to equal', 1)
  })

  it('ambidextrous skid patches should be 1', () => {
    expect(skidPatches(gearing, true), 'to equal', 1)
  })

  it('speed should be 11.73m/s', () => {
    expect(speed(gearing), 'to equal', 11.73)
  })
})
