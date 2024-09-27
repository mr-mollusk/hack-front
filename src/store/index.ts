import { configureStore } from '@reduxjs/toolkit';
import mockReducer from './mock/mock.reducer';
import projectReducer from './project/project.reducer';
import tasksReducer from './tasks/tasks.reducer';

export const store = configureStore({
  reducer: { mock: mockReducer, projects: projectReducer, tasks: tasksReducer },
});
