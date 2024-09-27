export type TaskStatuses = 'to do' | 'in progress' | 'done';

export interface Task {
  id: number;
  projectId: number;
  creatorId: string;
  title: string;
  descriptions: string;
  status: TaskStatuses;
}
