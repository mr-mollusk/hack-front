import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsApi } from '../../api/projects/projects';

export const tasksActionCreators = {
  fetchTasksByProjectId: createAsyncThunk(
    'tasks/fetchByProjectId',
    async (projectId: number) => {
      const response = await projectsApi.getTasksByProjectId(projectId);
      return response.data;
    }
  ),
};
