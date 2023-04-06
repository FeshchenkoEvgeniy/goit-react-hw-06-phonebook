import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
