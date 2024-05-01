import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import usersReducer from './users/usersSlice';
import authReducer from './auth/authenticationSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
