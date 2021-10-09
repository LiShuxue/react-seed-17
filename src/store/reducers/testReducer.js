import * as types from '../actionTypes';

export const reducerA = (state = '', action) => {
  switch (action.type) {
    case types.ACTION_TYPE_SYNC:
      return action.data;
    default:
      return state;
  }
};

export const reducerB = (state = '', action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return action.data;
    case types.REQUEST_FAILED:
      return action.data;
    default:
      return state;
  }
};
