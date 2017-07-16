import formReducer from '../reducers/form'
import { defaultForm } from '../reducers/default_state';
import * as Actions from '../actions/actions'

describe('updating fields', () => {
  it('should return the default state', () => {
    expect(formReducer(defaultForm, {})).toEqual(defaultForm)
  })

  it('should update the correct slider', () => {
    const newState = formReducer(
      defaultForm, 
      {
        type: Actions.UPDATE_SLIDER,
        group: "goalSliders",
        name: "Physical Health & Fitness",
        value: 100
      }
    )
    const sliderShouldUpdate = newState.getIn(
      ["goalSliders", "Physical Health & Fitness", "value"]
    )
    const sameGroupShouldNotUpdate = newState.getIn(
      ["goalSliders", "Mental Health & Wellbeing", "value"]
    )
    const differentGroupShouldNotUpdate = newState.getIn(
      ["currentSliders", "Physical Health & Fitness", "value"]
    )
    expect(sliderShouldUpdate).toEqual(100)
    expect(sameGroupShouldNotUpdate).toEqual(500)
    expect(differentGroupShouldNotUpdate).toEqual(500)
  })

  it('should update the correct field', () => {
    const newState = formReducer(
      defaultForm, 
      {
        type: Actions.UPDATE_FIELD,
        name: "name",
        value: "Cool Name"
      }
    )
    const fieldShouldUpdate = newState.getIn(
      ["fields", "name", "value"]
    )
    const fieldShouldNotUpdate = newState.getIn(
      ["fields", "age", "value"]
    )
    expect(fieldShouldUpdate).toEqual("Cool Name")
    expect(fieldShouldNotUpdate).toEqual("")
  })
})
