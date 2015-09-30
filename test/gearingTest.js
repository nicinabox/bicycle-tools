import expect from 'unexpected'
import gearRatio from '../src/gearRatio'
import gainRatio from '../src/gainRatio'
import gearInches from '../src/gearInches'
import development from '../src/development'
import skidPatches from '../src/skidPatches'

describe('46/16 gearing', () => {
  var gearing = {
    chainring: 46,
    cog: 16,
    crank: 165,
    wheelDiameter: 27
  }

  it('gearRatio should be 2.88', () => {
    expect(gearRatio(gearing), 'to be', 2.88)
  })

  it('gain ratio should be 5.92', () => {
    expect(gainRatio(gearing), 'to equal', 5.92)
  });

  it('gear inches should be 78in', () => {
    expect(gearInches(gearing), 'to equal', 78)
  });

  it('development should be 6.14m', () => {
    expect(development(gearing), 'to equal', 6.14)
  });

  it('skid patches should be 8', () => {
    expect(skidPatches(gearing), 'to equal', 8)
  })

  it('Ambidextrous skid patches should be 16', () => {
    expect(skidPatches(gearing, true), 'to equal', 16)
  })
})
