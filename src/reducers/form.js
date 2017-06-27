const form = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SLIDER':
      return updateSlider(state, action.group, action.name, action.value);
    case 'UPDATE_FIELD':
      return updateField(state, action.name, action.value);
    default:
      return state;
  }
}

const updateSlider = (state, group, name, value) => {
  return state.setIn([group, name, "value"], value);
}

const updateField  = (state, name, value) => {
  console.log(state.getIn(["fields", name, "value"]))
  return state.setIn(["fields", name, "value"], value);
}


export default form;
