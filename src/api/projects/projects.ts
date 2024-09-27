import { Project } from '../../@types';
import { apiInstance } from '../instances/api';

export const projectsApi = {
  getProjects: async () => await apiInstance.get('/projects.json'),
  getProjectById: async (id: number) =>
    await apiInstance.get('/projects.json', { params: { id } }),
  createProject: async (newProject: Omit<Project, 'id'>) =>
    await apiInstance.post('/projects.json', newProject),
  changeProjectById: async (newProject: Partial<Omit<Project, 'id'>>) =>
    await apiInstance.patch('/projects.json', newProject),
  deleteProjectById: async (id: number) =>
    await apiInstance.delete('/projects.json', { params: { id } }),
  getTasksByProjectId: async (projectId: number) =>
    await apiInstance.get('/tasks.json', { params: { projectId } }),
};
