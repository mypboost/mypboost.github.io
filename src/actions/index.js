export const updateSlider = (group, name, value) => ({
  type: 'UPDATE_SLIDER',
  group,
  name,
  value
})


export const updateField = ( name, value) => ({
  type: 'UPDATE_FIELD',
  name,
  value
})
