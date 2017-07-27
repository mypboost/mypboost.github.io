import { buildParameters } from '../utils/post-form';
import Immutable from 'immutable';

describe('buildParameters', () => {
  it('should return the correct values', () => {

    const state = Immutable.fromJS({
      'fields': {
        'name': {
          'value': 'Great Name'
        }
      },
      'currentSliders': {
        'Physical Health & Fitness': {
          'value': 100
        }
      },
      'goalSliders': {
        'Mental Health & Wellbeing': {
          'value': 100
        }
      },
      'currentScore': 666,
      'goalScore': 777,
      'gdd': 888
    })

    const expectedResults = {
      'entry.1036334072': 100,
      'entry.1806384428': 100,
      'entry.1702747898': 'Great Name',
      "entry.242114334": 666,
      "entry.300738981": 777,
      "entry.901063976": 888
    }

    expect(buildParameters(state)).toEqual(expectedResults)
  })
});
