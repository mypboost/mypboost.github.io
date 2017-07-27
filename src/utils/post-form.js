import 'whatwg-fetch';

const fieldKeys = {
  "name": "entry.1702747898",
  "age": "entry.740066158",
  "sex": "entry.165127320",
  "email": "entry.2034596921",
  "currentScore": "entry.242114334",
  "goalScore": "entry.300738981",
  'gdd': "entry.901063976"
};

const currentSliderKeys = {
  "Physical Health & Fitness": "entry.1806384428",
  "Mental Health & Wellbeing": "entry.69348868",
  "Family & Friends": "entry.135260925",
  "Career & Work/Life Balance": "entry.345041851",
  "Wealth and Financial Wellbeing": "entry.1674782857",
  "Self Actualization": "entry.525176522",
  "Overall Happiness": "entry.158168460"
};

const goalSliderKeys = {
  "Physical Health & Fitness": "entry.274382139",
  "Mental Health & Wellbeing": "entry.1036334072",
  "Family & Friends": "entry.2101903718",
  "Career & Work/Life Balance": "entry.278394668",
  "Wealth and Financial Wellbeing": "entry.1321808841",
  "Self Actualization": "entry.482196849",
  "Overall Happiness": "entry.130879393"
};

const parameterizeFields = (state, parameters, keysObject) => {
  state.forEach((value, key) => {
    parameters[keysObject[key]] = value.get("value");
  });
};

export const buildParameters = (state) => {
  let parameters = {};

  parameterizeFields(state.get('fields'), parameters, fieldKeys);
  parameterizeFields(state.get('currentSliders'), parameters, currentSliderKeys);
  parameterizeFields(state.get('goalSliders'), parameters, goalSliderKeys);
  parameters[fieldKeys['currentScore']] = state.get('currentScore');
  parameters[fieldKeys['goalScore']] = state.get('goalScore');
  parameters[fieldKeys['gdd']] = state.get('gdd');
  
  return parameters;
};

const parameterizeForm = (state) => {
  let formData = new FormData();
  const parameters = buildParameters(state)

  for (const key in parameters) { formData.append(key, parameters[key]); }

  return formData;
};

export const postForm = (state) => {
  const url = 'https://docs.google.com/forms/d/e/' +
              '1FAIpQLSeQyuIpkBzHnToQ1UWyI7mlgneU1JFDKcI8sB0OZ4evm_uDjQ/formResponse';

  fetch(url, {
    method: 'POST',
    body: parameterizeForm(state)
  });
};

