import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMockTodoes } from '../../api/mock/todo';

export const fetchMockTodoes = createAsyncThunk('mock/fetchByIdStatus', async () => {
  const response = await getMockTodoes();
  return response.data;
});
