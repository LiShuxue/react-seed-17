import { configureStore } from '@reduxjs/toolkit';
import testSlice from './testSlice';

const store = configureStore({
  reducer: {
    // state分模块
    test: testSlice,
  },
});

export default store;
