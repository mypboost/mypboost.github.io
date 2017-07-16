import * as Actions from "./actions.js";

export const updateSlider = (group, name, value) => ({
  type: Actions.UPDATE_SLIDER,
  group,
  name,
  value
})


export const updateField = ( name, value) => ({
  type: Actions.UPDATE_FIELD,
  name,
  value
})
