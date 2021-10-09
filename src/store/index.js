import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const defaultState = {
  stateA: '这是A state',
  stateB: '这是B state',
};

const store = createStore(reducer, defaultState, applyMiddleware(thunk));

export default store;
