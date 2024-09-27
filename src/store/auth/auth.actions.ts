import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth/auth';
import { LoginData, RegisterData } from '../../@types/auth.types';

export const authActions = {
  register: createAsyncThunk('auth/register', async ({ email, password }: RegisterData) => {
    const response = await authApi.register(email, password);
    return response.data;
  }),
  login: createAsyncThunk('auth/login', async ({ email, password }: LoginData) => {
    const response = await authApi.login(email, password);
    return response.data;
  }),
  fetchAuthorizedUser: createAsyncThunk('auth/me', async () => {
    const response = await authApi.me();
    return response.data;
  }),
}


