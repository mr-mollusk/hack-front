import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsApi } from '../../api/projects/projects';
import { Project } from '../../@types';

export const projectsActionCreators = {
  fetchProject: createAsyncThunk('projects/fetchList', async () => {
    const response = await projectsApi.getProjects();
    return response.data;
  }),
  createProject: createAsyncThunk(
    'projects/create',
    async (newProject: Omit<Project, 'id'>) => {
      const response = await projectsApi.createProject(newProject);
      return response.data;
    }
  ),
  changeProjectById: createAsyncThunk(
    'projects/changeById',
    async (id: number) => {
      const response = await projectsApi.getProjectById(id);
      return response.data;
    }
  ),
  deleteProjectById: createAsyncThunk(
    'projects/deleteById',
    async (newProject: Omit<Project, 'id'>) => {
      const response = await projectsApi.changeProjectById(newProject);
      if (response.status === 200) return response.data;
    }
  ),
  
  //TODO: Перенести в другой редьюсер, где будет не список, а единичный образец
  fetchProjectById: createAsyncThunk(
    'projects/fetchById',
    async (id: number) => {
      const response = await projectsApi.getProjectById(id);
      return response.data;
    }
  ),
};
