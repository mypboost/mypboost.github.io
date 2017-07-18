import formReducer from '../reducers/form';
import Immutable from 'immutable';
import { defaultForm } from '../reducers/default-state';
import * as Actions from '../actions/actions';

const formAction = (action, formState = defaultForm) => {
  return formReducer(formState, action);
}

describe('updating fields', () => {
  it('should return the default state', () => {
    expect(formAction({})).toEqual(defaultForm)
  })

  it('should update the correct slider', () => {
    const state = formAction(
      {
        type: Actions.UPDATE_SLIDER,
        group: "goalSliders",
        name: "Physical Health & Fitness",
        value: 100
      }
    )
    const sliderShouldUpdate = state.getIn(
      ["goalSliders", "Physical Health & Fitness", "value"]
    )
    const sameGroupShouldNotUpdate = state.getIn(
      ["goalSliders", "Mental Health & Wellbeing", "value"]
    )
    const differentGroupShouldNotUpdate = state.getIn(
      ["currentSliders", "Physical Health & Fitness", "value"]
    )
    expect(sliderShouldUpdate).toEqual(100)
    expect(sameGroupShouldNotUpdate).toEqual(500)
    expect(differentGroupShouldNotUpdate).toEqual(500)
  })

  it('should update the correct field', () => {
    const state = formAction(
      {
        type: Actions.UPDATE_FIELD,
        name: "name",
        value: "Cool Name"
      }
    )
    const fieldShouldUpdate = state.getIn(
      ["fields", "name", "value"]
    )
    const fieldShouldNotUpdate = state.getIn(
      ["fields", "age", "value"]
    )
    expect(fieldShouldUpdate).toEqual("Cool Name")
    expect(fieldShouldNotUpdate).toEqual("")
  })

  it('should display errors if relevant on blur', () => {
    const state = formAction(
      {
        type: Actions.BLUR_FIELD,
        name: "name",
        value: ""
      }
    )

    const fieldShouldHaveErrors = state.getIn(
      ["fields", "name", "errors"]
    )

    expect(fieldShouldHaveErrors.size).toEqual(1)

  });

  it('should not display errors on field update', () => {
    const state = formAction(
      {
        type: Actions.UPDATE_FIELD,
        name: "name",
        value: ""
      }
    )

    const fieldShouldNotHaveErrors = state.getIn(
      ["fields", "name", "errors"]
    )

    expect(fieldShouldNotHaveErrors.size).toEqual(0)

  });

  it('should not remove errors on update if they are not fixed', () => {
    let state = formAction(
      {
        type: Actions.BLUR_FIELD,
        name: "name",
        value: ""
      }
    )

    state = formAction(
      {
        type: Actions.UPDATE_FIELD,
        name: "name",
        value: ""
      },
      state
    )

    const fieldShouldHaveErrors = state.getIn(
      ["fields", "name", "errors"]
    )

    expect(fieldShouldHaveErrors.size).toEqual(1)
  });

  it('should remove errors on update if they are fixed', () => {
    const postFormMock = jest.fn();
    let state = formAction(
      {
        type: Actions.BLUR_FIELD,
        name: "name",
        value: ""
      }
    )

    state = formAction(
      {
        type: Actions.UPDATE_FIELD,
        name: "name",
        value: "some text"
      },
      state
    )

    const fieldShouldHaveErrors = state.getIn(
      ["fields", "name", "errors"]
    )

    expect(fieldShouldHaveErrors.size).toEqual(0)
  });

  it('should fail form submission if there are errors', () => {
    let state = formAction({type: Actions.SUBMIT_FORM})
    const canSubmit = state.get("canSubmit");
    expect(canSubmit).toEqual(false)
  });

  it('should allow form submission if there are no errors', () => {
    let state = formAction(
      {type: Actions.SUBMIT_FORM},
      Immutable.fromJS(
        {
          "fields": {
            "name": {"value": "foo"},
            "age": {"value": "foo"},
            "sex": {"value": "foo"},
            "email": {"value": "foo"}
          }
        }
      )
    )

    const canSubmit = state.get("canSubmit");
    expect(canSubmit).toEqual(true)
  });
})
