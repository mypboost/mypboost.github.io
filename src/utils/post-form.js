import 'whatwg-fetch';

const fieldKeys = {
  "name": "entry.1702747898",
  "age": "entry.740066158",
  "sex": "entry.165127320",
  "email": "entry.2034596921"
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

  return parameters;
};

const parameterizeForm = (fields, currentSliders, goalSliders) => {
  let formData = new FormData();
  let parameters = {};

  parameters = parameterizeFields(fields, parameters, fieldKeys);
  parameters = parameterizeFields(currentSliders, parameters, currentSliderKeys);
  parameters = parameterizeFields(goalSliders, parameters, goalSliderKeys);

  for (const key in parameters) { formData.append(key, parameters[key]); }

  return formData;
};

export const postForm = (fields, currentSliders, goalSliders) => {

  const url = 'https://docs.google.com/forms/d/e/' +
              '1FAIpQLSeQyuIpkBzHnToQ1UWyI7mlgneU1JFDKcI8sB0OZ4evm_uDjQ/formResponse';

  fetch(url, {
    method: 'POST',
    body: parameterizeForm(fields, currentSliders, goalSliders)
  });
};

