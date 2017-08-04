import Immutable from 'immutable';
import * as Actions from '../actions/actions.js';
import { getOverallGdd, getGddValues } from '../utils/gdd.js';

const form = (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_SLIDER:
      return updateSlider(state, action.group, action.name, action.value);
    case Actions.UPDATE_FIELD:
      return updateField(state, action.name, action.value);
    case Actions.BLUR_FIELD:
      return blurField(state, action.name, action.value);
    case Actions.SET_SCROLL_TO_ERRORS:
      return state.set('scrollToErrors', action.value);
    case Actions.SUBMIT_FORM:
      return submitForm(state);
    default:
      return state;
  }
};

const updateSlider = (state, group, name, value) => {
  return state.setIn([group, name, "value"], value);
};

const updateField  = (state, name, value) => {
  let newState = state;

  if (!state.getIn(["fields", name, "errors"]).isEmpty()) {
    newState = validateField(state, name, value);
  }

  return newState.setIn(["fields", name, "value"], value);
};

const blurField = (state, name, value) => {
  return validateField(state, name, value);
};

const submitForm = (state) => {
  let newState = state;
  let hasErrors = false;

  state.get("fields").forEach((value, key) => {
    newState = validateField(newState, key, value.get("value"));
    if (!newState.getIn(["fields", key, "errors"]).isEmpty()) hasErrors = true;
  });

  if (hasErrors) {
    newState = newState.set('scrollToErrors', true);
    newState = newState.set("canSubmit", false);
  }
  else {
    newState = newState.set('scrollToErrors', false);
    newState = newState.set("canSubmit", true);
    newState = setAveragesAndGdd(newState);
  }

  return newState;
};

const setAveragesAndGdd = (state) => {
  const currentScore = generateScore(state.get('currentSliders'));
  const goalScore = generateScore(state.get('goalSliders'));

  let newState = state.set('currentScore', currentScore);
  newState = newState.set('goalScore', goalScore);
  newState = newState.set('overallGdd', getOverallGdd(newState));
  newState = newState.set('gddValues', getGddValues(newState));

  return newState;

};

const generateScore = (sliders) => {
  let averageScore = sliders.reduce((reduction, values, key) => {
    if (key === "Overall Happiness") return reduction;
    if (Immutable.Map.isMap(reduction)) reduction = reduction.get('value');
    return reduction + values.get('value');
  }) / (sliders.size - 1);

  const happinessValue = sliders.getIn(["Overall Happiness", 'value']);

  return Math.round((averageScore + (happinessValue * 2)) / 3);
};

const validateField = (state, name, fieldState) => {

  let newState = state;
  let errors = Immutable.List();

  if (fieldState === "") {
    if (name == 'sex') {
      errors = errors.push("Please select an option");
    }
    else {
      errors = errors.push("This field cannot be empty");
    }
  }

  if (name === 'age' && (isNaN(fieldState) || parseInt(fieldState) < 0)) {
    errors = errors.push("Please enter a valid age.");
  }

  newState = newState.setIn(["fields", name, "errors"], errors);
  return newState;
};

export default form;
