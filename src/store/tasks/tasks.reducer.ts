import { createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isRejectedAction } from '../../@types';
import { TasksState } from './tasks.types';
import { tasksActionCreators } from './tasks.actions';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
} satisfies TasksState as TasksState;

const mockSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      tasksActionCreators.fetchTasksByProjectId.fulfilled,
      (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      }
    );
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
