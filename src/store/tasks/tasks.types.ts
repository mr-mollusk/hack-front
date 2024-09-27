import { Task } from '../../@types';

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: unknown;
}
