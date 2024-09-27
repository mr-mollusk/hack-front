import { Project } from '../../@types';

export interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: unknown;
}
