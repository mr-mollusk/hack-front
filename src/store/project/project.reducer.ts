import { createSlice } from '@reduxjs/toolkit';
import { isPendingAction, isRejectedAction } from '../../@types';
import { ProjectsState } from './project.types';
import { projectsActionCreators } from './project.actions';

const initialState = {
  projects: [],
  loading: false,
  error: null,
} satisfies ProjectsState as ProjectsState;

const mockSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      projectsActionCreators.fetchProject.fulfilled,
      (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      }
    );
    builder.addCase(
      projectsActionCreators.createProject.fulfilled,
      (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      }
    );
    builder.addCase(
      projectsActionCreators.changeProjectById.fulfilled,
      (state, action) => {
        const projectId = action.payload.id;
        state.loading = false;
        state.projects[projectId] = action.payload;
      }
    );
    builder.addCase(
      projectsActionCreators.deleteProjectById.fulfilled,
      (state, action) => {
        state.loading = false;
        state.projects = state.projects.splice(action.payload.id, 1);
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
