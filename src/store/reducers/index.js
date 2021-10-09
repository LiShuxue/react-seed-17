import { combineReducers } from 'redux';
import { reducerA, reducerB } from './testReducer';

// 必须跟默认的state key保持一致
const reducer = combineReducers({
  stateA: reducerA,
  stateB: reducerB,
});

export default reducer;
