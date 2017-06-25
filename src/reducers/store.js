import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import form from './form';

const defaultSliderValue = 500;

const StateRecord = Immutable.Record({
    form: {
      currentSliders: [
        {
          "name": "Physical Health & Fitness",
          "value": defaultSliderValue
        },
        {
          "name": "Mental Health & Wellbeing",
          "value": defaultSliderValue
        },
        {
          "name": "Family & Friends",
          "value": defaultSliderValue
        },
        {
          "name": "Career & Work/Life Balance",
          "value": defaultSliderValue
        },
        {
          "name": "Wealth and Financial Wellbeing",
          "value": defaultSliderValue
        },
        {
          "name": "Self Actualization",
          "value": defaultSliderValue
        },
        {
          "name": "Overall Happiness",
          "value": defaultSliderValue
        },
      ],
      goalSliders: []
    }
});

const combinedReducers = combineReducers({form: form}, StateRecord)

const store  = createStore(combinedReducers);

export default store;
