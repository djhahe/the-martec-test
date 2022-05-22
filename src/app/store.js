import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import githubReducer from './githubSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    github: githubReducer,
  },
});
