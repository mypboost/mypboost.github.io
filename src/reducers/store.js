import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import form from './form';

const defaultSliderValue = 500;
const defaultSliders = Immutable.fromJS({
  "Physical Health & Fitness": {value: defaultSliderValue, className: "purple-slider"},
  "Mental Health & Wellbeing": {value: defaultSliderValue, className: "yellow-slider"},
  "Family & Friends": {value: defaultSliderValue, className: "pink-slider"},
  "Career & Work/Life Balance": {value: defaultSliderValue, className: "orange-slider"},
  "Wealth and Financial Wellbeing": {value: defaultSliderValue, className: "red-slider"},
  "Self Actualization": {value: defaultSliderValue, className: "blue-slider"},
  "Overall Happiness": {value: defaultSliderValue, className: "lime-slider"},
})
const defaultFields = Immutable.fromJS({
  "name": {
    "value": "",
    "fieldTitle": "Your Full Name",
    "info": "i",
    "placeholder": "Your Name",
    "errors": {}
  },
  "age": {
    "value": "",
    "fieldTitle": "Your Age",
    "info": "i",
    "placeholder": "Your Age",
    "errors": {}
  },
  "sex": {
    "value": "",
    "fieldTitle": "Your Sex",
    "info": "i",
    "errors": {}
  },
  "email": {
    "value": "",
    "fieldTitle": "Your Email Address",
    "info": "i",
    "placeholder": "your@email.com",
    "errors": {}
  }
})

const StateRecord = Immutable.Record({
    form: Immutable.fromJS({
      currentSliders: defaultSliders,
      goalSliders: defaultSliders,
      fields: defaultFields
    })
});

const combinedReducers = combineReducers({form: form}, StateRecord)
const store = createStore(combinedReducers);
export default store;
