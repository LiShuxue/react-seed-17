import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { testGetMethod } from '../ajax/api';

export const initialState = {
  stateA: '这是A state',
  stateB: '这是B state',
};

// 异步更新action
export const asyncAction = createAsyncThunk('test/asyncAction', async (data) => {
  const response = await testGetMethod();
  return response;
});

const testSlice = createSlice({
  name: 'test',
  initialState,
  // 同步更新action的状态修改
  reducers: {
    syncAction: (state, action) => {
      state.stateA = action.payload;
    },
  },
  // 异步更新action promise完成后的状态修改
  extraReducers: {
    [asyncAction.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.stateB = 'request success, B changed';
    },
    [asyncAction.rejected]: (state, action) => {
      state.stateB = 'request failed, B changed';
    },
  },
});

export const { syncAction } = testSlice.actions;
export default testSlice.reducer;
