import { createSlice } from '@reduxjs/toolkit';
import { MockState } from './mock.types';
import { fetchMockTodoes } from './mock.actions';
import { isPendingAction, isRejectedAction } from '../../@types';

const initialState = {
  todoes: [],
  loading: false,
  error: null,
} satisfies MockState as MockState;

const mockSlice = createSlice({
  name: 'mock',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMockTodoes.fulfilled, (state, action) => {
      state.loading = false;
      state.todoes = action.payload;
    });
    builder.addMatcher(isPendingAction, state => {
      state.loading = true;
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default mockSlice.reducer;
