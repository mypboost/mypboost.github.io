import Immutable from 'immutable';

const form = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SLIDER':
      return updateSlider(state, action.group, action.name, action.value);
    case 'UPDATE_FIELD':
      return updateField(state, action.name, action.value);
    case 'BLUR_FIELD':
      return blurField(state, action.name, action.value);
    case 'SUBMIT_FORM':
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
    newState = validateFields(state, name, value);
  }

  return newState.setIn(["fields", name, "value"], value);
};

const blurField = (state, name, value) => {
  return validateFields(state, name, value);
};

const submitForm = (state) => {
  let newState = state;
  let areErrors = false;

  state.get("fields").forEach((value, key) => {
    newState = validateFields(newState, key, value.get("value"));

    if (!newState.getIn(["fields", key, "errors"]).isEmpty()) {
      areErrors = true;
    }
  });

  return newState.set("canSubmit", !areErrors);
};


const validateFields = (state, name, fieldState) =>{

  let newState = state;
  let errors = Immutable.List();

  if (fieldState === "") {
    errors = errors.push("This field cannot be empty");
  }

  newState = newState.setIn(["fields", name, "errors"], errors);
  return newState;
};

export default form;
