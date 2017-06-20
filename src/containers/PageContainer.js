import Page from '../components/Page';
import {Container} from 'flux/utils';
import Store from '../data/Store';

function getStores() {
  return [
    Store,
  ];
}

function getState() {
  return {
    stuff: Store.getState(),
  };
}

export default Container.createFunctional(Page, getStores, getState);
