import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import form from './form';
import DefaultState from './default-state';

const combinedReducers = combineReducers({form: form}, DefaultState);
const store = createStore(combinedReducers);

export default store;
