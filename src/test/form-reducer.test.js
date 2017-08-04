import formReducer from '../reducers/form';
import Immutable from 'immutable';
import { defaultForm } from '../reducers/default-state';
import * as Actions from '../actions/actions';

const formAction = (action, formState) => {
  const state = formState ? defaultForm.merge(formState) : defaultForm;
  return formReducer(state, action);
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

  it('should fail form submission and set scrollToErrors if there are errors', () => {
    const state = formAction({type: Actions.SUBMIT_FORM})
    expect(state.get("canSubmit")).toEqual(false)
    expect(state.get("scrollToErrors")).toEqual(true)
  });

  it('should allow form submission and set averages and gdd if there are no errors', () => {
    const state = formAction(
      { type: Actions.SUBMIT_FORM },
      Immutable.fromJS(
        {
          "fields": {
            "name": {"value": "foo"},
            "age": {"value": "16"},
            "sex": {"value": "Male"},
            "email": {"value": "foo"}
          },
          "currentSliders": {
            "Physical Health & Fitness": { value: 100 },
            "Mental Health & Wellbeing": { value: 100 },
            "Family & Friends": { value: 100 },
            "Career & Work/Life Balance": { value: 100 },
            "Wealth & Financial Wellbeing": { value: 100 },
            "Self Actualization": { value: 100 },
            "Overall Happiness": { value: 200 },
          },
          "goalSliders": {
            "Physical Health & Fitness": { value: 600 },
            "Mental Health & Wellbeing": { value: 620 },
            "Family & Friends": { value: 300 },
            "Career & Work/Life Balance": { value: 400 },
            "Wealth & Financial Wellbeing": { value: 430 },
            "Self Actualization": { value: 510 },
            "Overall Happiness": { value: 990 },
          }
        }
      )
    )

    expect(state.get("canSubmit")).toEqual(true);
    expect(state.get("currentScore")).toEqual(167);
    expect(state.get("goalScore")).toEqual(819);
    expect(state.get("overallGdd")).toEqual(517);
    expect(state.get("gddValues").toJS()).toEqual(
      {
        "Career & Work/Life Balance": 36,
        "Family & Friends": 612,
        "Mental Health & Wellbeing": 516,
        "Overall Happiness": 612,
        "Physical Health & Fitness": 644,
        "Self Actualization": 129,
        "Wealth & Financial Wellbeing": 27
      }
    );
  });

  it('setScrollToErrors should change to the provided boolean', () => {
    const state = formAction(
      { type: Actions.SET_SCROLL_TO_ERRORS, value: true }, 
      Immutable.fromJS({ scrollToErrors: false })
    )
    expect(state.get('scrollToErrors')).toEqual(true)
  });
})
