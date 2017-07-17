import Immutable from 'immutable';

const defaultSliderValue = 500;
const defaultSliders = Immutable.fromJS({
  "Physical Health & Fitness": {value: defaultSliderValue, className: "purple"},
  "Mental Health & Wellbeing": {value: defaultSliderValue, className: "yellow"},
  "Family & Friends": {value: defaultSliderValue, className: "pink"},
  "Career & Work/Life Balance": {value: defaultSliderValue, className: "orange"},
  "Wealth and Financial Wellbeing": {value: defaultSliderValue, className: "red"},
  "Self Actualization": {value: defaultSliderValue, className: "blue"},
  "Overall Happiness": {value: defaultSliderValue, className: "lime"},
});

const defaultFields = Immutable.fromJS({
  "name": {
    "value": "",
    "errors": []
  },
  "age": {
    "value": "",
    "errors": []
  },
  "sex": {
    "value": "",
    "errors": []
  },
  "email": {
    "value": "",
    "errors": []
  }
});

export const defaultForm = Immutable.fromJS({
  currentSliders: defaultSliders,
  goalSliders: defaultSliders,
  fields: defaultFields,
  canSubmit: false
});

const StateRecord = Immutable.Record({
  form: defaultForm
});

export default StateRecord;
