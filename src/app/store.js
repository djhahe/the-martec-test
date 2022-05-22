import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from './userSlice';
import githubReducer from './githubSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    github: githubReducer,
  },
});
