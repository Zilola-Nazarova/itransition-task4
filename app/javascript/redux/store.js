import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import greetingsReducer from './greetings/greetingsSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
