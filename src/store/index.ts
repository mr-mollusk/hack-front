import { configureStore } from '@reduxjs/toolkit';
import mockReducer from './mock/mock.reducer';
import authReducer from './auth/auth.reducer';

export const store = configureStore({
  reducer: { mock: mockReducer,
    auth:authReducer
   },
});
