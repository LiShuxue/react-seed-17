import * as types from '../actionTypes';
import { testGetMethod } from '../../ajax/api';

const requestSuccess = () => {
  return {
    type: types.REQUEST_SUCCESS,
    data: 'request success, B changed',
  };
};
const requestFailed = () => {
  return {
    type: types.REQUEST_FAILED,
    data: 'request failed, B changed',
  };
};

export const testSyncAction = (data) => {
  return {
    type: types.ACTION_TYPE_SYNC,
    data: data,
  };
};

export const testAsyncAction = () => {
  return async (dispatch, getState) => {
    console.log(getState());
    try {
      await testGetMethod();
      dispatch(requestSuccess());
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};
